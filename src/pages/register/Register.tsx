import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./registerlogin.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";
import ThreeDots from "components/atoms/Loaders/ThreeDots";
import { Button } from "components/atoms/Buttons";
import {
  addressActions,
  cartActions,
  orderActions,
  userActions,
  wishlistActions,
} from "redux/actions";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { signup, currentUser } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      dispatch(userActions.logIn(currentUser.uid));
      dispatch(wishlistActions.getWishlistByUser(currentUser.uid));
      dispatch(cartActions.getCartByUser(currentUser.uid));
      dispatch(addressActions.getAddressesByUser(currentUser.uid));
      dispatch(orderActions.getOrdersByUser(currentUser.uid));

      // adding new entry in json-server db
      dispatch(
        userActions.addNewUser({
          id: currentUser.uid,
          firstName,
          lastName,
          joinDate: Date(),
          email,
          defaultAddressId: 0,
        })
      );
      setLoading(false);
      history.push(`/`);
    }
  }, [currentUser]);

  const handleRegister = (e: any) => {
    e.preventDefault();

    setLoading(true);

    signup(email, password, `${firstName} ${lastName}`)
      .then((uid: string) => {
        // don't need to do anything
      })
      .catch((err: any) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="outer">
      {loading && <ThreeDots />}

      {!loading && (
        <div className="inner">
          <form onSubmit={(e) => handleRegister(e)}>
            <h3>S&#39;enregistrer</h3>

            <div className="form-group">
              <label>Prénom</label>
              <input
                type="text"
                autoComplete="chrome-off"
                className="form-control"
                placeholder="Prénom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Nom</label>
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                placeholder="Nom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Courriel</label>
              <input
                autoComplete="chrome-off"
                type="email"
                className="form-control"
                placeholder="Entrer votre courriel"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Mot de passe</label>
              <input
                autoComplete="off"
                type="password"
                className="form-control"
                placeholder="Entrer votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit">Enregistrer</Button>

            <p className="forgot-password text-right">
              <Link to="/Login">Déjà inscrit ? Connectez-vous</Link>
            </p>
          </form>
          <br />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Register;
