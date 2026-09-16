import test from 'node:test';
import assert from 'node:assert/strict';
import { buildMessage, buildContactUrl } from '../src/utils/projectMessage.mjs';

const input = { need: 'Ecommerce', stage: 'Tengo un negocio', outcome: '  Vender café, té & pasteles. ¿Cómo empezamos?\nCon entrega local.  ' };
const message = buildMessage(input);
test('message includes the complete brief and trims surrounding whitespace', () => {
  for (const value of [input.need, input.stage, input.outcome.trim()]) assert.ok(message.includes(value));
  assert.ok(!message.includes('esperado:   '));
});
test('WhatsApp links use the official numbers and preserve Unicode and line breaks', () => {
  for (const [channel, number] of [['primary','50375308948'], ['alternative','50368483548']]) {
    const url = new URL(buildContactUrl(channel, message));
    assert.equal(url.hostname, 'wa.me'); assert.equal(url.pathname, `/${number}`);
    assert.equal(url.searchParams.get('text'), message);
    assert.equal([...url.searchParams.keys()].length, 1);
  }
});
test('email uses the official recipient and an encoded subject and body', () => {
  const url = new URL(buildContactUrl('email', message));
  assert.equal(url.protocol, 'mailto:'); assert.equal(url.pathname, 'codyworksoporte@gmail.com');
  assert.equal(url.searchParams.get('body'), message);
  assert.equal(url.searchParams.get('subject'), 'Una nueva idea para CodyWork');
});
