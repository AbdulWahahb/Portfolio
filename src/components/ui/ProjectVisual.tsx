import { useEffect, useState } from "react";

interface ProjectVisualProps {
  label: string;
  image?: string | null;
}

export function ProjectVisual({ label, image }: ProjectVisualProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [image]);

  const showImage = Boolean(image) && !imageError;

  return (
    <figure
      className="flex h-full min-h-[500px] flex-col overflow-hidden rounded-xl border border-line bg-bg"
      aria-label={label}
    >
      {/* Browser-style header */}
      <div
        className="flex shrink-0 items-center gap-1.5 border-b border-line px-4 py-3"
        aria-hidden="true"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>

      {showImage ? (
        <div className="relative min-h-[240px] flex-1 overflow-hidden bg-surface">
          <img
            src={image!}
            alt={`${label} application screenshot`}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            className="
              absolute inset-0
              h-full w-full
              object-cover object-right
              transition-transform
              duration-500
              hover:scale-[1.02]
            "
          />
        </div>
      ) : (
        <div
          className="grid min-h-[240px] flex-1 grid-cols-[28%_1fr] gap-3 p-4"
          aria-hidden="true"
        >
          <div className="space-y-2 rounded-lg bg-surface p-3">
            {[70, 50, 60, 40].map((w) => (
              <div
                key={w}
                className="h-2 rounded bg-line"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>

          <div className="grid grid-rows-[auto_1fr] gap-3">
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-10 rounded-lg bg-surface" />
              ))}
            </div>
            <div className="rounded-lg bg-surface" />
          </div>
        </div>
      )}
    </figure>
  );
}
