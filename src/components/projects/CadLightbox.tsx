import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cadImages } from './cadGalleryData';

interface CadLightboxProps {
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

const CadLightbox = ({ index, onIndexChange, onClose }: CadLightboxProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const titleId = useId();
  const activeImage = cadImages[index];
  const navigate = (offset: number) => onIndexChange((index + offset + cadImages.length) % cadImages.length);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus({ preventScroll: true });

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      opener?.focus({ preventScroll: true });
    };
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      className="cad-lightbox"
      aria-labelledby={titleId}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      onKeyDown={(event) => {
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        if (event.key === 'ArrowLeft') { event.preventDefault(); navigate(-1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); navigate(1); }
        if (event.key === 'Home') { event.preventDefault(); onIndexChange(0); }
        if (event.key === 'End') { event.preventDefault(); onIndexChange(cadImages.length - 1); }
      }}
    >
      <div className="cad-lightbox-content">
        <div className="cad-lightbox-toolbar">
          <div><p className="mono">A CLOSER LOOK / {index + 1} OF {cadImages.length}</p><h2 id={titleId}>AI-native CAD assistant</h2></div>
          <div className="cad-lightbox-actions">
            <a href={activeImage.src} target="_blank" rel="noopener noreferrer" aria-label="Open this image at full resolution"><span>Full resolution</span><ArrowUpRight size={19} /></a>
            <button ref={closeRef} type="button" onClick={onClose} aria-label="Close image gallery"><X size={23} /></button>
          </div>
        </div>
        <div
          className="cad-lightbox-stage"
          onTouchStart={(event) => {
            touchStart.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
          }}
          onTouchCancel={() => { touchStart.current = null; }}
          onTouchEnd={(event) => {
            const start = touchStart.current;
            touchStart.current = null;
            if (!start || !event.changedTouches.length) return;
            const dx = event.changedTouches[0].clientX - start.x;
            const dy = event.changedTouches[0].clientY - start.y;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) navigate(dx < 0 ? 1 : -1);
          }}
        >
          <img src={activeImage.src} alt={activeImage.alt} decoding="async" draggable={false} />
          <button type="button" className="cad-lightbox-previous" onClick={() => navigate(-1)} aria-label="Previous CAD image"><ChevronLeft size={26} /></button>
          <button type="button" className="cad-lightbox-next" onClick={() => navigate(1)} aria-label="Next CAD image"><ChevronRight size={26} /></button>
        </div>
        <div className="cad-lightbox-footer">
          <div className="cad-lightbox-caption" aria-live="polite" aria-atomic="true"><span className="mono">{activeImage.kind}</span><h3>{activeImage.title}</h3><p>{activeImage.caption}</p></div>
          <div className="cad-lightbox-thumbnails" aria-label="Choose a CAD image">
            {cadImages.map((item, imageIndex) => (
              <button key={item.src} type="button" onClick={() => onIndexChange(imageIndex)} aria-label={`${imageIndex + 1}. ${item.title}`} aria-pressed={index === imageIndex}>
                <img src={item.src} alt="" decoding="async" /><span>{String(imageIndex + 1).padStart(2, '0')}</span>
              </button>
            ))}
          </div>
        </div>
        <p className="cad-lightbox-help">Use the arrow keys or swipe to browse. Press Escape to close.</p>
      </div>
    </dialog>,
    document.body,
  );
};

export default CadLightbox;
