import React, { useState } from "react";
import "../register/registerlogin.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";
import ThreeDots from "components/atoms/Loaders/ThreeDots";
import { Button } from "components/atoms/Buttons";
import { userActions } from "redux/actions/userActions";
import { useDispatch } from "react-redux";
import { MdEmail } from "react-icons/md";

interface Props {}

const Login = (_props: Props) => {
  const { signin } = useAuth();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const changeEventHandler = (inputName: String, e: any) => {
    switch (inputName) {
      case email: {
        setEmail(e.target.value);
        break;
      }
      case password: {
        setPassword(e.target.value);
        break;
      }
      default:
        return;
    }
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    signin(email, password)
      .then((_uid: string) => {
        setLoading(false);
        if (location.search) {
          const qs = require("qs");
          const qsArr = qs.parse(location.search, { ignoreQueryPrefix: true });
          if (qsArr["returnUrl"]) history.push(qsArr["returnUrl"]);
          else history.push(`/`);
        } else {
          history.push(`/`);
        }
      })
      .catch((_error: any) => {
        setError("Courriel ou mot de passe invalide");
        setLoading(false);
      });
  };

  return (
    <div className="outer">
      {loading && <ThreeDots />}
      {!loading && (
        <div className="inner">
          <form onSubmit={(e) => handleLogin(e)}>
            <h3>Se connecter</h3>

            <div className="form-group">
              <label>Courriel</label>
              <input
                onChange={(e) => changeEventHandler(email, e)}
                type="email"
                className="form-control"
                placeholder="Entrer votre courriel"
                value={email}
              />
            </div>

            <div className="form-group">
              <label>Mot de passe</label>
              <input
                onChange={(e) => changeEventHandler(password, e)}
                type="password"
                className="form-control"
                placeholder="Entrer votre mot de passe"
                value={password}
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Se souvenir
                </label>
              </div>
            </div>

            <Button type="submit">
              <MdEmail style={{ float: "left" }} />
              Se connecter
            </Button>
            {}

            <p className="forgot-password text-right">
              <Link to="/forgetPasword">Mot de passe oublié ?</Link>
            </p>
            <p className="forgot-password text-right">
              <Link to="/register">Créer un compte ?</Link>
            </p>
          </form>

          {error && <p style={{ color: "#ff0000" }}>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Login;
