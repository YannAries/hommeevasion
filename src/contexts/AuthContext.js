import { useContext, useState, useEffect, createContext } from "react";
import { auth, facebookProvider, db } from "config/firebase";
import { useDispatch } from "react-redux";
import ThreeDots from "components/atoms/Loaders/ThreeDots";
import {
  addressActions,
  cartActions,
  orderActions,
  userActions,
  wishlistActions,
} from "redux/actions";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password, fullName) => {
    let promise = new Promise(function(resolve, reject) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((ref) => {
          resolve(ref.user.uid);
        })
        .catch((error) => reject(error));
    });

    return promise;
  };

  const signin = (email, password) => {
    let promise = new Promise(function(resolve, reject) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          resolve(res.user.uid);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  };

  const signout = () => {
    return auth.signOut();
  };

  const passwordReset = (email) => {
    let promise = new Promise(function(resolve, reject) {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          resolve(
            `Courriel de réinitialisation de mot de passe envoyé à ${email}`
          );
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  };

  const facebookLogin = () => {
    let promise = new Promise(function(resolve, reject) {
      auth
        .signInWithPopup(facebookProvider)
        .then((res) => {
          resolve({
            user: res.user,
            isNewUser: res.additionalUserInfo.isNewUser,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {

      setCurrentUser(user);
      setLoading(false);

      if (user) {
        dispatch(userActions.logIn(user.uid));
        dispatch(wishlistActions.getWishlistByUser(user.uid));
        dispatch(cartActions.getCartByUser(user.uid));
        dispatch(addressActions.getAddressesByUser(user.uid));
        dispatch(orderActions.getOrdersByUser(user.uid));
      }
    });

    return unsubscribe;
  }, [currentUser]);

  const value = {
    currentUser,
    signup,
    signin,
    signout,
    passwordReset,
    facebookLogin,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <ThreeDots /> : children}
    </AuthContext.Provider>
  );
}
