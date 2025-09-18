import Payment from "./payments.model.js"; 

function getRandomDNI() {
  return Math.floor(10000000 + Math.random() * 90000000).toString(); // 8 dígitos
}

function getRandomEmail() {
  const randomString = Math.random().toString(36).substring(7);
  return `user_${randomString}@example.com`;
}

export async function savePayment(payment, payment_dni, payment_email) {
  try {
    if(!payment.transaction_amount || !payment.payment_method){
      throw new Error("Datos de pago incompletos");
    }
    const newPayment = await Payment.create({
      transaction_amount: payment.transaction_amount || 0,
      dni: payment_dni,
      firstname: payment.payer.first_name || "Usuario",
      lastname: payment.payer.last_name || "Test",
      email: payment_email,
      payment_method: payment.payment_method.type || "Yape"
    });

    console.log("Pago guardado en la base de datos:", newPayment.toJSON());
    return newPayment;
  } catch (error) {
    console.error("Error guardando el pago en la base de datos:", error);
  }
}

// ESTE SI VALIDA LOS CAMPOS NULL
// export async function savePayment(payment) {
//   try {
//     const newPayment = await PaymentModel.create({
//       transaction_amount: payment.transaction_amount,
//       dni: payment.payer.identification.number,
//       firstname: payment.payer.first_name,
//       lastname: payment.payer.last_name,
//       email: payment.payer.email,
//     });

//     console.log("Pago guardado en la base de datos:", newPayment.toJSON());
//     return newPayment;
//   } catch (error) {
//     console.error("Error guardando el pago en la base de datos:", error);
//   }
// }

