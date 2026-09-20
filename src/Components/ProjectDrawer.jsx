import { useEffect, useState } from "react";
import chevronRightIcon from "../Assets/chevronRightIcon.svg";
import { Divider } from "./Divider";

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M12 4 4 12M4 4l8 8"
        stroke="currentColor"
        strokeWidth="1.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ChevronLeft = 
(
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>)

const chevronRight = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)

export function ProjectDrawer({ project, onClose, onPrev, onNext }) {
  const [displayed, setDisplayed] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let raf;
    let timer;
    if (project) {
      setDisplayed(project);
      raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setIsOpen(true))
      );
    } else {
      setIsOpen(false);
      timer = setTimeout(() => setDisplayed(null), 350);
    }
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  if (!displayed) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={displayed.title}
      className="fixed inset-0 z-50 flex items-end justify-center pt-10"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Sheet — slides in from bottom */}
      <div
        className={`relative flex max-h-full w-full justify-center overflow-hidden bg-bg-0 border-t border-solid border-border-soft transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 flex items-center gap-2 cursor-pointer text-text-secondary text-14-decorative hover:text-text-primary"
        >
          <span>Close</span>
          <CloseIcon />
        </button>

        {/* Centered content column */}
        <div className="flex max-h-full w-[640px] max-w-full flex-col overflow-y-auto border-x border-solid border-border-strong [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            <Divider height={32}/>

          {/* Activity bar */}
          <div className="flex items-center justify-between self-stretch px-2 py-3">
            <button
              onClick={onPrev}
              aria-label="Previous project"
              className="flex items-center gap-2 cursor-pointer text-text-secondary text-14-decorative hover:text-text-primary"
            >
              {ChevronLeft}
              <span>Back</span>
            </button>
            <button
              onClick={onNext}
              aria-label="Next project"
              className="flex items-center gap-2 cursor-pointer text-text-secondary text-14-decorative hover:text-text-primary"
            >
              <span>Next</span>
              {chevronRight}
            </button>
          </div>

          <Divider height={32}/>
          <img
            src={displayed.heroImage}
            alt={displayed.title}
            className="h-[400px] w-full shrink-0 object-cover"
          />

          <Divider height={48}/>

          {/* Detail content */}
          <div className="flex flex-1 flex-col items-start gap-[21px] self-stretch p-6">
            <p className="self-stretch text-text-primary text-16-regular">
              {displayed.description}
            </p>
            {displayed.sections?.map((section, i) =>
              section.type === "image" ? (
                <img
                  key={i}
                  src={section.src}
                  alt={section.alt ?? displayed.title}
                  onError={(e) => {
                    if (!e.currentTarget.dataset.fallback) {
                      e.currentTarget.dataset.fallback = "1";
                      e.currentTarget.src = displayed.heroImage;
                    }
                  }}
                  className="w-full self-stretch rounded-[12px] object-cover"
                />
              ) : (
                <div key={i} className="flex flex-col gap-2 self-stretch">
                  {section.title && (
                    <h4 className="text-text-primary text-16-medium">
                      {section.title}
                    </h4>
                  )}
                  <p className="text-text-secondary text-14-regular">
                    {section.content}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
