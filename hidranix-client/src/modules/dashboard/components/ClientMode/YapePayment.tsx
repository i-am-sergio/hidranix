import { useState, useEffect } from "react";
import { MP_PUBLIC_KEY } from "../../../services/config";
// Extend the Window interface to include mpInstance
declare global {
  interface Window {
    mpInstance?: any;
    MercadoPago?: any;
  }
}

// interface YapePaymentProps {
//   isActive: boolean;
//   onClick: () => void;
// }

const YapePayment = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [phoneNumberError, _] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isMPReady, setIsMPReady] = useState<boolean>(false);

  useEffect(() => {
    // Cargar el script de MercadoPago dinámicamente
    const script = document.createElement("script");
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.async = true;
    script.onload = () => {
      console.log("SDK de MercadoPago cargado.");
      initializeMP();
      console.log("MercadoPago SDK initialized.");
    };
    script.onerror = () => console.error("Error cargando el SDK de MercadoPago.");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  async function initializeMP() {
    try {
      const mp = new window.MercadoPago(MP_PUBLIC_KEY);
      window.mpInstance = mp;
      setIsMPReady(true);
    } catch (error) {
      console.error("Error obteniendo la clave pública:", error);
    }
  }

  async function handleYapePayment(e: React.FormEvent) {
    e.preventDefault();

    if (!isMPReady || !window.mpInstance) {
      console.error("MercadoPago no ha sido inicializado.");
      setMessage("Error: MercadoPago no está listo.");
      return;
    }

    // Validar código de verificación (OTP)
    if (!verificationCode) {
      setMessage("Error: Ingresa el código de verificación (OTP).");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const yape = window.mpInstance.yape({
        otp: verificationCode,
        phoneNumber: phoneNumber,
      });
      const yapeToken = await yape.create();

      console.log("Token generado:", yapeToken);

      const response = await fetch("http://localhost:5000/payments/process_yape_payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: yapeToken,
          phoneNumber: phoneNumber,
        }),
      });

      const result = await response.json();
      console.log("Respuesta del pago:", result);

      if (result.error) {
        setMessage(`Error en el pago: ${result.error}`);
      } else {
        setMessage("Pago realizado con éxito.");
        // Reset form on success
        setPhoneNumber("");
        setVerificationCode("");
      }
    } catch (error) {
      console.error("Error generando el token:", error);
      setMessage("Error al procesar el pago.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={`px-2 xl:px-96 w-full md:w-full md:h-full p-6 cursor-pointer rounded-2xl transition-all duration-300 shadow-lg 
                 "bg-gray-200 backdrop-blur-md" : "bg-white/50 backdrop-blur-sm"}`}
      // onClick={!isActive ? onClick : undefined}
    >
      <h2 className="text-lg font-semibold mb-4 text-center">Proceso de Pago Yape</h2>
        <form className="transition-all duration-300" onSubmit={handleYapePayment}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Número de Celular
            </label>
            <input
              className={`shadow appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary ${
                phoneNumberError ? "border-red-500" : ""
              }`}
              type="tel"
              placeholder="912345678"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {phoneNumberError && <p className="text-red-500 text-xs italic">{phoneNumberError}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Código de Verificación (OTP)
            </label>
            <input
              className="shadow appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
              type="tel"
              placeholder="666666"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </div>
          <button
            className="bg-primary-light hover:bg-primary text-white font-bold py-2 px-4 rounded-xl w-full cursor-pointer disabled:bg-gray-400"
            type="submit"
            disabled={loading || !isMPReady}
          >
            {loading ? "Procesando..." : isMPReady ? "Pagar con Yape" : "Cargando..."}
          </button>
          {message && (
            <p
              className={`mt-2 text-xs italic ${
                message.includes("éxito") ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </form>
    </div>
  );
};

export default YapePayment;
