import React, { useState } from "react";

interface Props {}

const ForgetPassword = (props: Props) => {
  const [Email, setEmail] = useState("");
  const changeEventHandler = (inputName: String, e: any) => {
    switch (inputName) {
      case Email: {
        setEmail(e.target.value);
        break;
      }

      default:
        return;
    }
  };

  const formSubmitHandler = () => {};

  return (
    <div className="outer">
      <div className="inner">
        <form
          onSubmit={(e) => {
            console.log("formsubmitted");
            e.preventDefault();
            console.log(Email);
            formSubmitHandler();
          }}
        >
          <h3>Mot de passe oublié</h3>
          <div className="form-group">
            <label>Courriel</label>
            <input
              onChange={(e) => changeEventHandler(Email, e)}
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={Email}
            />
            <button type="submit" className="btn btn-dark btn-lg btn-block">
              S&#39;enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
