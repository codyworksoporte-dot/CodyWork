import { useState, type CSSProperties, type PointerEvent } from 'react';
import { Arrow } from '../components/Arrow';

const states = [
  { name: 'Idea', label: 'TODO EMPIEZA CON UNA SEÑAL', description: 'Una necesidad real. Una posibilidad nueva. El punto de partida lo pones tú.', output: 'Una oportunidad por descubrir', color: '#5be8ee' },
  { name: 'Sistema', label: 'CONECTAMOS LAS PIEZAS', description: 'Ordenamos procesos, datos y funciones para darle una estructura clara a tu idea.', output: 'Arquitectura con propósito', color: '#6f9bff' },
  { name: 'Experiencia', label: 'LA TECNOLOGÍA SE HACE HUMANA', description: 'Diseñamos una interfaz que se entiende, se disfruta y ayuda a hacer las cosas mejor.', output: 'Una interacción que tiene sentido', color: '#b79aff' },
  { name: 'Resultado', label: 'TU IDEA, EN EL MUNDO REAL', description: 'Construimos, probamos y lanzamos un producto preparado para seguir evolucionando.', output: 'Un producto que funciona', color: '#f08cde' },
];

export function Activation({ signal, onSignal }: { signal: number; onSignal: (value: number) => void }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const current = states[signal];
  function pointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setTilt({ x: ((event.clientY - bounds.top) / bounds.height - .5) * -5, y: ((event.clientX - bounds.left) / bounds.width - .5) * 5 });
  }
  return <section id="activacion" className="activation" aria-labelledby="activation-title">
    <div className="section-eyebrow"><span className="status-dot" /> TU IDEA + NUESTRA TECNOLOGÍA <span className="edition">CODYWORK / EST. DIGITAL</span></div>
    <div className="activation-title"><h1 id="activation-title">Del impulso<br />al <span>producto.</span></h1><div className="intro-copy"><span className="mini-cross" aria-hidden="true">+</span><p>Convertimos ideas y necesidades reales en productos digitales que funcionan.</p><span className="micro-label">DISEÑO. CÓDIGO. DIRECCIÓN.</span></div></div>
    <div className="signal-workspace" style={{ '--signal': current.color } as CSSProperties}>
      <div className="signal-readout"><span className="micro-label">ENTRADA / 0{signal + 1}</span><div key={current.name} className="readout-content"><span className="signal-kicker">{current.label}</span><h2>{current.name}<span>_</span></h2><p>{current.description}</p></div><a href="#archivo" className="text-link">Explorar lo que construimos <Arrow /></a></div>
      <div className="signal-map" onPointerMove={pointerMove} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
        <span className="map-coordinate coordinate-top">CW — SIGNAL ENGINE</span>
        <div className="core-geometry" style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
          <svg className="circuit-map" viewBox="0 0 640 420" fill="none" aria-hidden="true"><defs><linearGradient id="signal-gradient"><stop stopColor="#51e5ed" /><stop offset=".45" stopColor="#5149e8" /><stop offset="1" stopColor="#bc55e8" /></linearGradient></defs><path className="circuit-guide" d="M320 48 473 136v150L320 374 167 286V136Z" /><path className="circuit-guide inner-guide" d="m320 86 119 69v110l-119 69-119-69V155Z" /><path className={`signal-track ${signal === 0 ? 'energized' : ''}`} d="M5 86h94l68 50 52 31" /><path className={`signal-track ${signal === 1 ? 'energized' : ''}`} d="M635 86h-94l-68 50-52 31" /><path className={`signal-track ${signal === 2 ? 'energized' : ''}`} d="M5 336h94l68-50 52-31" /><path className={`signal-track ${signal === 3 ? 'energized' : ''}`} d="M635 336h-94l-68-50-52-31" /><path className="circuit-center" d="M320 48V20m0 354v28M70 211h83m334 0h83" />{[[167,136],[473,136],[167,286],[473,286]].map(([cx,cy],index) => <circle key={cx+cy} cx={cx} cy={cy} r={index === signal ? 5 : 3} fill={index === signal ? current.color : '#434353'} />)}</svg>
          <div className="brand-core"><img src="./images/codywork-symbol.jpg" width="250" height="250" alt="Símbolo original CW de CodyWork" fetchPriority="high" /></div>
        </div>
        <div className="signal-nodes" role="group" aria-label="Recorrido interactivo: selecciona una etapa">{states.map((state, index) => <button className={`signal-node node-${index}`} key={state.name} aria-pressed={signal === index} onClick={() => onSignal(index)}><span>0{index + 1}</span>{state.name}<i aria-hidden="true">{signal === index ? '●' : '+'}</i></button>)}</div>
        <div className="map-output" aria-live="polite"><span className="status-dot" />{current.output}</div>
      </div>
      <div className="signal-legend"><span><span className="touch-hint">TOCA</span><span className="desktop-hint">SELECCIONA</span> UN NODO. EXPLORA LA TRANSFORMACIÓN.</span><span>01 — 04 <span className="legend-line" /></span></div>
    </div>
    <div className="activation-bottom"><span>SOFTWARE A LA MEDIDA.<br /><strong>POSIBILIDADES A TU ESCALA.</strong></span><a href="#archivo">EL TRABAJO HABLA <span className="circle-arrow">↓</span></a><span className="coordinates">13.69° N / 89.22° W<br /><strong>HECHO EN EL SALVADOR</strong></span></div>
  </section>;
}
