/**
 * Retorna null quando não existe um número internacional válido configurado.
 *
 * @param {unknown} number
 * @param {string} message
 * @returns {string | null}
 */
export function getWhatsAppUrl(number, message) {
  const digits = String(number ?? '').replace(/[\s()+.-]/g, '');
  if (!/^[1-9]\d{9,14}$/.test(digits)) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
