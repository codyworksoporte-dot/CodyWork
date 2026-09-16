import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Brand } from './components/Brand';
import { BrandIntro } from './components/BrandIntro';
import { Activation } from './sections/Activation';
import { Portfolio } from './sections/Portfolio';
import { Capabilities } from './sections/Capabilities';
import { Process } from './sections/Process';
import { Initializer } from './sections/Initializer';

export function App() {
  const [signal, setSignal] = useState(0);
  return <><BrandIntro /><Navigation /><main id="contenido" tabIndex={-1}><Activation signal={signal} onSignal={setSignal} /><Portfolio onExplore={() => setSignal(3)} /><Capabilities onSelect={() => setSignal(1)} /><Process onSelect={setSignal} /><Initializer /></main><footer className="footer"><Brand compact /><p>Ideas + código = resultados.</p><a href="#activacion">Volver al origen ↑</a><span>© {new Date().getFullYear()} CODYWORK · EL SALVADOR</span></footer></>;
}
