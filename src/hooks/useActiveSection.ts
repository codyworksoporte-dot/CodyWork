import { useEffect, useState } from 'react';

export function useActiveSection() {
  const [active, setActive] = useState('activacion');
  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>('main > section[id]')];
    let frame = 0;
    const update = () => {
      frame = 0;
      const anchor = window.innerHeight * .35;
      const section = sections.find(item => {
        const bounds = item.getBoundingClientRect();
        return bounds.top <= anchor && bounds.bottom > anchor;
      });
      if (section) setActive(section.id);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); };
  }, []);
  return active;
}
