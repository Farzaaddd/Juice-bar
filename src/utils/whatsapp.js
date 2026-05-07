export const createWhatsAppLink = (item) => {
  const message = `Hi, I want to order:\n${item.title} - ${item.price} AED`;
  return `https://wa.me/${item.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
