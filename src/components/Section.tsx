import { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  surface?: boolean;
  center?: boolean;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  surface = false,
  center = false,
}: Props) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${surface ? "bg-surface" : "bg-white"} ${className}`}
    >
      <div className="container-x">
        {(eyebrow || title || description) && (
          <div className={`mb-10 md:mb-14 ${center ? "text-center" : ""}`}>
            {eyebrow && (
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-red">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-bold text-ink md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p
                className={`mt-4 text-muted md:text-lg ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
              >
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
