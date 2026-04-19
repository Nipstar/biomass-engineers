import Image from "next/image";

export function ImagePlaceholder({
  label,
  src,
  aspect = "4/3",
  tone = "green",
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  label?: string;
  src?: string;
  aspect?: string;
  tone?: "green" | "cream" | "charcoal";
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const bg =
    tone === "green"
      ? "bg-[var(--green)] text-[var(--cream)]"
      : tone === "charcoal"
      ? "bg-[var(--charcoal)] text-[var(--cream)]"
      : "bg-[var(--cream-dark)] text-[var(--green)]";

  return (
    <div
      className={`relative ${bg} border-2 border-[var(--charcoal)] overflow-hidden ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {src ? (
        <Image
          src={src}
          alt={label || "Biomass Engineers"}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, currentColor 0 1px, transparent 1px 30px)",
            }}
          />
          {label && (
            <div className="absolute inset-0 flex items-center justify-center p-4 text-center text-xs tracking-widest uppercase font-semibold opacity-80">
              {label}
            </div>
          )}
        </>
      )}
    </div>
  );
}
