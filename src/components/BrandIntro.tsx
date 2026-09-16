import { useEffect, useState, type CSSProperties } from 'react';

const pieces = ['north-west', 'north-east', 'center-west', 'center-east', 'south-west', 'south-east'];
const letters = 'CodyWork'.split('');

export function BrandIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timeout = window.setTimeout(() => setVisible(false), reducedMotion ? 120 : 3600);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return <div className="brand-intro" aria-hidden="true" onAnimationEnd={(event) => {
    if (event.target === event.currentTarget) setVisible(false);
  }}>
    <div className="brand-intro-stage">
      <div className="brand-intro-mark">
        {pieces.map((piece, index) => <img
          className={`brand-intro-piece piece-${piece}`}
          src="./images/codywork-symbol.jpg"
          alt=""
          width="640"
          height="640"
          key={piece}
          style={{ '--piece-index': index } as CSSProperties}
        />)}
        <span className="brand-intro-pulse" />
      </div>
      <div className="brand-intro-word">
        {letters.map((letter, index) => <span
          className={index >= 4 ? 'intro-letter-work' : ''}
          key={`${letter}-${index}`}
          style={{ '--letter-index': index } as CSSProperties}
        >{letter}</span>)}
      </div>
      <span className="brand-intro-tagline">IDEAS + CÓDIGO = RESULTADOS</span>
    </div>
  </div>;
}
