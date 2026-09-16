export const contact = { primary: '50375308948', alternative: '50368483548', email: 'codyworksoporte@gmail.com' };

export function buildMessage({ need, stage, outcome }) {
  return `Hola, CodyWork. Quiero conversar sobre un proyecto.\n\nNecesidad: ${need}.\nPunto de partida: ${stage}.\nResultado esperado: ${outcome.trim()}\n\n¿Podemos explorar cómo hacerlo realidad?`;
}

export function buildContactUrl(channel, message) {
  if (channel === 'email') return `mailto:${contact.email}?subject=${encodeURIComponent('Una nueva idea para CodyWork')}&body=${encodeURIComponent(message)}`;
  return `https://wa.me/${channel === 'alternative' ? contact.alternative : contact.primary}?text=${encodeURIComponent(message)}`;
}
