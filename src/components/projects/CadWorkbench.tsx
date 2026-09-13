import { useEffect, useState } from 'react';
import { cadImages } from './cadGalleryData';

// Repeating the first frame makes the last-to-first slide move in the same direction.
const slides = [...cadImages, cadImages[0]];

const CadWorkbench = () => {
  const [position, setPosition] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const index = position % cadImages.length;
  const activeImage = cadImages[index];

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotion = () => {
      setReduceMotion(preference.matches);
      if (preference.matches) {
        setIsTransitioning(false);
        setPosition(current => current % cadImages.length);
      }
    };
    const handleVisibility = () => setIsVisible(!document.hidden);
    handleMotion();
    handleVisibility();
    preference.addEventListener('change', handleMotion);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      preference.removeEventListener('change', handleMotion);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  useEffect(() => {
    if (isHovered || isFocused || !isVisible || isTransitioning) return;
    // Hold for five seconds after each slide has finished moving.
    const timeout = window.setTimeout(() => {
      setIsTransitioning(!reduceMotion);
      setPosition(current => reduceMotion ? (current + 1) % cadImages.length : current + 1);
    }, 5000);
    return () => window.clearTimeout(timeout);
  }, [position, isHovered, isFocused, isVisible, isTransitioning, reduceMotion]);

  return (
    <div className="cad-gallery cad-gallery--workbench" role="region" aria-roledescription="carousel" aria-label="CAD workbench slideshow. Pauses while the image is hovered or this slideshow is keyboard-focused." tabIndex={0} onFocus={(event) => setIsFocused(event.currentTarget.matches(':focus-visible'))} onBlur={() => setIsFocused(false)}>
      <div className="cad-workbench-meta mono"><span>{activeImage.kind}</span><span>{String(index + 1).padStart(2, '0')} / {String(cadImages.length).padStart(2, '0')}</span></div>
      <div className="cad-gallery-preview" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div
          className="cad-workbench-track"
          style={{ transform: `translateX(-${position * 100}%)`, transition: position === 0 || reduceMotion ? 'none' : undefined }}
          onTransitionEnd={(event) => {
            if (event.target !== event.currentTarget || event.propertyName !== 'transform') return;
            if (position === cadImages.length) setPosition(0);
            setIsTransitioning(false);
          }}
        >
          {slides.map((item, slideIndex) => <img key={`${item.src}-${slideIndex}`} src={item.src} alt={position === slideIndex ? item.alt : ''} aria-hidden={position !== slideIndex} decoding="async" draggable={false} />)}
        </div>
      </div>
      <div className="cad-gallery-caption" aria-live="off"><p>{activeImage.title}</p></div>
      <div className="cad-workbench-dots" aria-hidden="true">{cadImages.map((item, imageIndex) => <span key={item.src} className={index === imageIndex ? 'is-active' : ''} />)}</div>
    </div>
  );
};

export default CadWorkbench;
