export const handleWhatsAppClick = (number: string, message: string): void => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${number.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};
