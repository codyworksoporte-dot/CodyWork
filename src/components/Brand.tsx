export function Brand({ compact = false }: { compact?: boolean }) {
  return <a className={`brand ${compact ? 'brand-compact' : ''}`} href="#activacion" aria-label="CodyWork, inicio"><img src="./images/codywork-symbol.jpg" width="56" height="56" alt="" /><span>Cody<span className="brand-work">Work</span><small>ESTUDIO DE PRODUCTOS DIGITALES</small></span></a>;
}
