import { projects, type Project } from '../data/portfolio';
import { Arrow } from '../components/Arrow';

function ProjectLink({ project, featured = false, onExplore }: { project: Project; featured?: boolean; onExplore: () => void }) {
  return <article id={`proyecto-${project.id}`} className={`project project-${project.id} ${featured ? 'project-featured' : ''}`}>
    <a className="project-visual" href={project.url} target="_blank" rel="noopener noreferrer" onClick={onExplore} aria-label={`Explorar ${project.name} en una pestaña nueva`}><img src={`./images/${project.image}.webp`} width="1200" height="750" alt={`Vista previa del sitio ${project.name}`} loading="lazy" /><span className="project-tag">{project.tag}</span><span className="project-launch"><Arrow diagonal /></span></a>
    <div className="project-info"><div className="project-meta"><span>{project.category}</span><span>/{project.number}</span></div><h3><a href={project.url} target="_blank" rel="noopener noreferrer" onClick={onExplore}>{project.name}<Arrow diagonal /></a></h3><p>{project.description}</p><span className="project-distinction">{project.distinction}</span>{project.note && <small className="project-note">{project.note}</small>}<a className="preview-source" href={project.url} target="_blank" rel="noopener noreferrer">Vista previa · Explorar fuente <span aria-hidden="true">↗</span></a></div>
  </article>;
}

export function Portfolio({ onExplore }: { onExplore: () => void }) {
  return <section id="archivo" className="portfolio-section" aria-labelledby="portfolio-title"><div className="section-heading"><div><span className="section-index">01 / ARCHIVO DE PRODUCTOS</span><h2 id="portfolio-title">Menos promesas.<br /><span>Más producto.</span></h2></div><p>Ideas distintas. Una misma intención:<br />hacer que la tecnología funcione para cada negocio.</p></div><div className="archive-toolbar"><span><span className="status-dot" /> {projects.length} EXPERIENCIAS PARA EXPLORAR</span><span>ABRIR. RECORRER. COMPROBAR. <Arrow diagonal /></span></div><div className="portfolio-grid">{projects.map((project, index) => <ProjectLink key={project.id} project={project} featured={index === 0 || project.id === 'mapache' || project.id === 'fashion-storefront'} onExplore={onExplore} />)}</div><p className="archive-note">Vistas previas de los enlaces indicados. Los conceptos demuestran posibilidades de diseño e interacción; no implican una relación comercial con las marcas mencionadas.</p></section>;
}
