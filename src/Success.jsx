// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { userRequest } from "./requestMethods";
// import { useLocation } from "react-router";

// const Success = () => {
//   const location = useLocation();
//   const data = location.state.stripeData;
//   const cart = location.state.cart;
//   const currentUser = useSelector((state) => state.user.currentUser);
//   const [orderId, setOrderId] = useState(null);

//   useEffect(() => {
//     const createOrder = async () => {
//       try {
//         const res = await userRequest.post("/orders", {
//           userId: currentUser._id,
//           products: cart.products.map((item) => ({
//             productId: item._id,
//             quantity: item._quantity,
//           })),
//           amount: cart.total,
//           address: data.billing_details.address,
//         });
//         setOrderId(res.data._id);
//       } catch {}
//     };
//     data && createOrder();
//   }, [cart, data, currentUser]);

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       {orderId
//         ? `La commande a été créée avec succès. Votre numéro de commande est ${orderId}`
//         : `Succès ! Votre commande est en cours de préparation...`}
//       <button style={{ padding: 10, marginTop: 20 }}>Retour à la page d&#39;accueil</button>
//     </div>
//   );
// };

import { useLocation } from "react-router";

const Success = () => {
  const location = useLocation();

  console.log(location);
  return <div>Paiement avec succès !</div>;
};

export default Success;
