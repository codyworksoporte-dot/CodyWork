import { Brand } from './Brand';
import { Arrow } from './Arrow';
import { useActiveSection } from '../hooks/useActiveSection';

const links = [['activacion', 'Activación'], ['archivo', 'Proyectos'], ['capacidades', 'Capacidades'], ['proceso', 'Proceso'], ['inicializar', 'Tu proyecto']];

export function Navigation() {
  const active = useActiveSection();
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><header className="masthead"><Brand /><span className="origin"><i /> EL SALVADOR <span>→</span> EL MUNDO</span><a className="header-contact" href="#inicializar">Hablemos de tu idea <Arrow diagonal /></a></header><nav className="system-nav" aria-label="Índice de la experiencia"><span className="nav-caption">EXPLORAR</span>{links.map(([id, label], index) => <a href={`#${id}`} key={id} aria-current={active === id ? 'location' : undefined}><span className="nav-number">0{index + 1}</span><span>{label}</span><i aria-hidden="true" /></a>)}<span className="nav-end">IDEAS + CÓDIGO</span></nav></>;
}
