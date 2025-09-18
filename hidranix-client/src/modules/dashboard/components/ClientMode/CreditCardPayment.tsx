import { useState } from "react";
import { CardPayment } from "@mercadopago/sdk-react";

const CreditCardPayment: React.FC = () => {
  const [isActive, _] = useState<boolean>(true);

  const handleOnSubmit = async (cardFormData: any, _?: any): Promise<void> => {
    try {
      const response = await fetch("http://localhost:5000/payments/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cardFormData),
      });

      console.log("Data que se envía:", JSON.stringify(cardFormData));

      if (response.ok) {
        console.log("Payment processed successfully");
        alert("Payment processed successfully");
        console.log(await response.json());
      } else {
        console.error("Payment failed");
      }
    } catch (error: any) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <div
      className={`px-2 xl:px-96 w-full md:w-full md:h-full p-6 cursor-pointer rounded-2xl transition-all duration-300 shadow-lg 
        ${isActive ? "bg-transparent backdrop-blur-md" : "bg-white/50 backdrop-blur-sm"}`}
    >
      {isActive && (
        <CardPayment
          initialization={{
            amount: 30,
            payer: {
              email: "",
            },
          }}
          customization={{
            visual: {
              style: {
                theme: "flat",
                customVariables: {},
              },
            },
            paymentMethods: {
              maxInstallments: 1,
            },
          }}
          onSubmit={handleOnSubmit}
          onReady={() => {
            console.log("Mercado Pago Card Payment Brick Ready");
          }}
          onError={(error: any) => {
            console.error("Mercado Pago Card Payment Brick Error:", error);
          }}
        />
      )}
    </div>
  );
};

export default CreditCardPayment;