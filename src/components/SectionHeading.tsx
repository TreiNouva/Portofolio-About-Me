import type { ReactNode } from "react";

export function SectionHeading({ id, children, description }: { id: string; children: ReactNode; description?: ReactNode }) {
  return (
    <div className="mb-6 max-w-2xl">
      <h2 id={id} className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
        {children}
      </h2>
      {description ? <p className="mt-2 leading-relaxed text-muted">{description}</p> : null}
    </div>
  );
}
