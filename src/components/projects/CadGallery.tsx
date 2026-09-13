import { useState } from 'react';
import { Expand } from 'lucide-react';
import { cadImages } from './cadGalleryData';
import CadLightbox from './CadLightbox';

const CadGallery = () => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const activeImage = cadImages[index];

  return (
    <div className="cad-gallery cad-gallery--project" role="region" aria-label="CAD project images">
      <button type="button" className="cad-gallery-preview" aria-haspopup="dialog" aria-label={`Expand CAD gallery: ${activeImage.title}. Image ${index + 1} of ${cadImages.length}.`} onClick={() => setIsOpen(true)}>
        <img className="cad-gallery-image" src={activeImage.src} alt={activeImage.alt} loading="lazy" decoding="async" draggable={false} />
        <span className="cad-gallery-expand"><Expand size={15} /><span>Expand gallery</span></span>
        <span className="cad-gallery-count mono">{index + 1} / {cadImages.length}</span>
      </button>
      <div className="cad-gallery-caption" aria-live="polite" aria-atomic="true">
        <p>{activeImage.title}</p><span>{activeImage.kind}</span>
      </div>
      <div className="cad-gallery-thumbnails" aria-label="Choose a CAD image">
        {cadImages.map((item, imageIndex) => (
          <button key={item.src} type="button" onClick={() => setIndex(imageIndex)} aria-label={`Show image ${imageIndex + 1}: ${item.title}`} aria-pressed={index === imageIndex}>
            <img src={item.src} alt="" loading="lazy" decoding="async" /><span>{String(imageIndex + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
      {isOpen && <CadLightbox index={index} onIndexChange={setIndex} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default CadGallery;
