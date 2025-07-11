import React, { useRef, useEffect, useState } from 'react';
import './FadeIn.css';

export default function FadeIn({ children }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true));
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in-section ${visible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
}
