import { useEffect, useState, useRef } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import YapePayment from "../ClientMode/YapePayment";
import CreditCardPayment from "../ClientMode/CreditCardPayment";
import { MP_PUBLIC_KEY } from "../../../services/config";
import imagenYape from '../../../../assets/dashboard/yape.jpg';
import imagenTarjeta from '../../../../assets/dashboard/tarjeta.jpg';

declare global {
  interface Window {
    mercadoPagoInitialized?: boolean;
    mercadoPagoPromise?: Promise<void>;
  }
}

const Pago = () => {
  const [mercadoPagoInitialized, setMercadoPagoInitialized] = useState(
    !!window.mercadoPagoInitialized
  );
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    "yape" | "tarjeta" | null
  >(null);
  const yapeRef = useRef<HTMLDivElement>(null);
  const tarjetaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMercadoPago = async () => {
      if (!window.mercadoPagoInitialized && MP_PUBLIC_KEY) {
        if (!window.mercadoPagoPromise) {
          initMercadoPago(MP_PUBLIC_KEY, {
            locale: "es-PE",
          });
          window.mercadoPagoInitialized = true;
          window.mercadoPagoPromise = Promise.resolve();
        }

        await window.mercadoPagoPromise;
        setMercadoPagoInitialized(true);
      }
    };

    initializeMercadoPago();
  }, []);

  useEffect(() => {
    if (selectedPaymentMethod === "yape" && yapeRef.current) {
      yapeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (selectedPaymentMethod === "tarjeta" && tarjetaRef.current) {
      tarjetaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedPaymentMethod]);

  if (!mercadoPagoInitialized) {
    return <div>Cargando MercadoPago...</div>;
  }

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-xl font-semibold mb-4">Pagar Servicio</h2>
      <p className="text-gray-600">Selecciona un método de pago para continuar.</p>

      {/* Opciones de Pago */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          onClick={() => setSelectedPaymentMethod("yape")}
          className={`bg-white rounded-md shadow-md p-6 cursor-pointer transition-shadow hover:shadow-lg ${
            selectedPaymentMethod === "yape" ? "border-2 border-primary-light" : ""
          }`}
        >
          <img src={imagenYape} alt="Pagar con Yape" className="w-full h-1/4 object-cover aspect-video" />
          <span className="mt-6 inline-block bg-primary-light text-white text-xs font-semibold rounded-full px-3 py-1 mb-2">
            Billetera Virtual
          </span>
          <h3 className="text-lg font-semibold mb-2 text-center">Pagar con Yape</h3>
          <p className="text-sm text-gray-700 text-center">
            Paga de forma rápida y segura usando tu aplicación Yape.
          </p>
          {selectedPaymentMethod === "yape" && (
            <div className="mt-4">
              <h4 className="text-md font-semibold mb-2">Instrucciones:</h4>
              <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                <li>Abre tu aplicación Yape en tu teléfono.</li>
                <li>Selecciona la opción de "Pagar con Código de Aprobación".</li>
                <li>Ingresa tu número de celular registrado en Yape.</li>
                <li>Ingresa el Código de Aprobación de 6 dígitos generado por la aplicación Yape.</li>
                <li>Confirma el pago y guarda la constancia.</li>
              </ol>
            </div>
          )}
        </div>

        <div
          onClick={() => setSelectedPaymentMethod("tarjeta")}
          className={`bg-white rounded-md shadow-md p-6 cursor-pointer transition-shadow hover:shadow-lg ${
            selectedPaymentMethod === "tarjeta" ? "border-2 border-primary-light" : ""
          }`}
        >
          <img src={imagenTarjeta} alt="Pagar con Tarjeta" className="w-full h-1/4 object-cover aspect-video" />
          <span className="mt-6 inline-block bg-primary-light text-white text-xs font-semibold rounded-full px-3 py-1 mb-2">
            Mercado Pago
          </span>
          <h3 className="text-lg font-semibold mb-2 text-center">Pagar con Tarjeta</h3>
          <p className="text-sm text-gray-700 text-center">
            Paga con tus tarjetas de crédito o débito a través de Mercado Pago.
          </p>
          {selectedPaymentMethod === "tarjeta" && (
            <div className="mt-4">
              <h4 className="text-md font-semibold mb-2">Instrucciones:</h4>
              <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                <li>Completa el formulario con los datos de tu tarjeta de crédito o débito.</li>
                <li>Ingresa el número de tarjeta, fecha de expiración y código de seguridad.</li>
                <li>Selecciona el número de cuotas si deseas pagar en varias partes.</li>
                <li>Revisa el monto total a pagar y confirma la transacción.</li>
                <li>Espera la confirmación del pago por parte de Mercado Pago.</li>
              </ol>
              {/* Aquí podrías renderizar el componente CreditCardPayment */}
            </div>
          )}
        </div>
      </div>

      {/* Formularios de Pago */}
      {selectedPaymentMethod === "yape" && (
        <div className="mt-8" ref={yapeRef}>
          <h3 className="text-lg font-semibold mb-4">Realizar Pago con Yape</h3>
          <YapePayment />
        </div>
      )}

      {selectedPaymentMethod === "tarjeta" && (
        <div className="mt-8" ref={tarjetaRef}>
          <h3 className="text-lg font-semibold mb-4">Realizar Pago con Tarjeta</h3>
          <CreditCardPayment />
        </div>
      )}
    </div>
  );
};

export default Pago;