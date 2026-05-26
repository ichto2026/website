import { useEffect, useRef, useState } from "react";

type TeamRole = {
  role: string;
  members: readonly string[];
};

export default function TeamCard({
  name,
  nation,
  roles,
}: {
  name: string;
  nation: string;
  roles?: readonly TeamRole[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const flagFilename = nation.toLowerCase().replaceAll(" ", "-");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!cardRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  return (
    <div
      ref={cardRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="flex w-full items-center space-x-4 rounded-lg bg-gray-100 p-4 text-left"
        onClick={() => setIsOpen((open) => !open)}
        onFocus={() => setIsOpen(true)}
        onBlur={(event) => {
          if (!event.currentTarget.parentElement?.contains(event.relatedTarget as Node)) {
            setIsOpen(false);
          }
        }}
        aria-expanded={isOpen}
      >
        <img
          src={`/flags/${flagFilename}.svg`}
          alt={nation}
          loading="lazy"
          className="min-w-24 w-24 min-h-16 h-16"
        />
        <p>
          <span className="text-black text-xl md:text-xl font-bold">{name}</span>
          <br />
          <span className="text-gray-600 text-md md:text-lg">{nation}</span>
        </p>
      </button>

      <div
        className={`absolute left-0 top-full z-10 mt-2 w-full min-w-72 rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-opacity md:left-auto md:right-0 md:max-w-sm ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <p className="text-lg font-bold text-black">{name}</p>
        {roles?.length ? (
          <div className="mt-3 space-y-3">
            {roles.map(({ role, members }) => (
              <div key={role}>
                <p className="text-sm font-semibold text-gray-700">{role}</p>
                <ul className="mt-1 space-y-1 text-sm text-gray-600">
                  {members.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-gray-600">TBA</p>
        )}
      </div>
    </div>
  );
}
