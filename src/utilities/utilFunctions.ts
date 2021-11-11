export const toTitleCase = (toTransform: string) => {
  return toTransform.replace(/\b([a-z])/g, function(_, initial) {
    return initial.toUpperCase();
  });
};

const loadScript = (src: string) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const processPaymentRazorpay = async (
  orderAmt: number,
  callbackFunc: any
) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    alert("Razorpay SDK failed to load.");
    return;
  }

  const options = {
    key: "rzp_test_oTeKhXvrlA5LXo",
    amount: (orderAmt * 100).toString(),
    currency: "INR",
    name: "HommeEvasion",
    description: "Test Transaction",
    handler: async function(response: any) {
      callbackFunc(response.razorpay_payment_id);
    },
    prefill: {
      name: "<TON NOM>",
      email: "example@example.com",
      contact: "9999999999",
    },
    notes: {
      address: "Exemple adresse",
    },
    theme: {
      color: "#61dafb",
    },
  };

  const paymentObject = new (window as any).Razorpay(options);
  paymentObject.open();
};
