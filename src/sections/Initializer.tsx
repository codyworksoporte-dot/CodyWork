import { useRef, useState, type FormEvent } from 'react';
import { capabilities } from '../data/capabilities';
import { buildMessage, buildContactUrl } from '../utils/projectMessage.mjs';
import { Arrow } from '../components/Arrow';

export function Initializer() {
  const [need, setNeed] = useState('Experiencias web');
  const [stage, setStage] = useState('Tengo una idea');
  const [outcome, setOutcome] = useState('');
  const [channel, setChannel] = useState('primary');
  const [error, setError] = useState('');
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const outcomeRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const message = buildMessage({ need, stage, outcome });
  function resetPreview() { setReady(false); setCopied(false); }
  function prepare(event: FormEvent) {
    event.preventDefault();
    if (outcome.trim().length < 10) { setError('Cuéntanos un poco más: escribe al menos 10 caracteres sobre lo que quieres lograr.'); outcomeRef.current?.focus(); setReady(false); return; }
    setError(''); setCopied(false); setReady(true);
    requestAnimationFrame(() => previewRef.current?.focus());
  }
  async function copy() {
    try { await navigator.clipboard.writeText(message); setCopied(true); }
    catch { setError('No pudimos copiar el mensaje. Puedes seleccionarlo en la vista previa y copiarlo manualmente.'); }
  }
  return <section id="inicializar" className="initializer-section" aria-labelledby="initializer-title"><div className="initializer-intro"><span className="section-index">04 / INICIALIZAR UN PROYECTO</span><h2 id="initializer-title">La próxima idea<br />puede ser <span>la tuya.</span><span className="terminal-caret" aria-hidden="true">_</span></h2><p>No necesitas tenerlo todo resuelto.<br />Un primer impulso es suficiente.</p><div className="contact-detail"><span className="micro-label">CONVERSEMOS DIRECTAMENTE</span><a href="mailto:codyworksoporte@gmail.com">codyworksoporte@gmail.com <Arrow diagonal /></a><a href="tel:+50375308948">+503 7530 8948</a><a href="tel:+50368483548">+503 6848 3548</a><a className="alternate-contact" href="https://wa.me/50368483548" target="_blank" rel="noopener noreferrer">WhatsApp alternativo <Arrow diagonal /></a><span className="contact-location"><i className="status-dot" /> Desde El Salvador, para tu proyecto.</span></div></div><form className="project-initializer" onSubmit={prepare} noValidate><div className="initializer-bar"><span><i className="status-dot" /> NUEVA CONEXIÓN</span><span>PROYECTO / SIN TÍTULO</span></div><fieldset><legend><span>01</span> ¿Qué necesitas construir?</legend><div className="need-options">{[...capabilities.map(item => item.name), 'Quiero orientación'].map(item => <label key={item}><input type="radio" name="need" value={item} checked={need === item} onChange={() => {setNeed(item); resetPreview();}} /><span>{item}</span></label>)}</div></fieldset><fieldset><legend><span>02</span> ¿Desde dónde empezamos?</legend><div className="stage-options">{['Tengo una idea', 'Tengo un negocio', 'Quiero evolucionar un producto'].map(item => <label key={item}><input type="radio" name="stage" value={item} checked={stage === item} onChange={() => {setStage(item); resetPreview();}} /><span>{item}</span></label>)}</div></fieldset><div className="field"><label htmlFor="outcome"><span>03</span> ¿Qué te gustaría lograr?</label><textarea ref={outcomeRef} id="outcome" value={outcome} onChange={event => {setOutcome(event.target.value); resetPreview(); if (error) setError('');}} rows={3} maxLength={1500} aria-invalid={!!error} aria-describedby="outcome-help form-status" placeholder="Quiero que mis clientes puedan…" required /><span id="outcome-help">Una idea breve basta. Mínimo 10 caracteres.</span></div><div className="field channel-field"><label htmlFor="channel"><span>04</span> ¿Cómo prefieres conversar?</label><select id="channel" value={channel} onChange={event => {setChannel(event.target.value); setCopied(false);}}><option value="primary">WhatsApp · +503 7530 8948</option><option value="alternative">WhatsApp · +503 6848 3548</option><option value="email">Correo electrónico</option></select></div><div id="form-status" aria-live="polite" className={error ? 'form-status error' : 'form-status'}>{error || (copied ? 'Mensaje copiado. Ya puedes pegarlo en tu conversación.' : ready ? 'Mensaje preparado. Revísalo antes de abrir tu aplicación.' : '')}</div><button className="primary-button" type="submit">Preparar mi proyecto <Arrow /></button><p className="form-privacy">Tú decides cuándo enviarlo. Esta página no guarda tus datos.</p>{ready && <div ref={previewRef} tabIndex={-1} className="message-preview" aria-label="Vista previa de tu mensaje"><span className="micro-label">TU MENSAJE ESTÁ LISTO</span><p>{message}</p><div><a className="primary-button" href={buildContactUrl(channel, message)} target={channel === 'email' ? undefined : '_blank'} rel={channel === 'email' ? undefined : 'noopener noreferrer'}>{channel === 'email' ? 'Abrir correo' : 'Continuar en WhatsApp'}<Arrow diagonal /></a><button type="button" className="copy-button" onClick={copy}>{copied ? '✓ Copiado' : 'Copiar mensaje'}</button></div></div>}<noscript><p>Para iniciar un proyecto, escribe directamente a <a href="mailto:codyworksoporte@gmail.com">codyworksoporte@gmail.com</a> o <a href="https://wa.me/50375308948" target="_blank" rel="noopener noreferrer">abre WhatsApp</a>.</p></noscript></form></section>;
}
