import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51JkrqdJ2W02D7YwnAi9NL3mMRcceeziYQhxgMOAcPjDLOT8rNrHHNRh3Ymn1ZVY3NUrtWjEftJm8YTYPCwZ2XBPJ00Ek8PMAwu";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5001/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        history.push("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, history]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>En cours de traitement. Veuillez patienter s&#39;il vous plaît.</span>
      ) : (
        <StripeCheckout
          name="Boutique Homme Évasion"
          image="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          billingAddress=""
          shippingAddress=""
          description="Votre total est de 20 CA$"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Payez maintenant
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
