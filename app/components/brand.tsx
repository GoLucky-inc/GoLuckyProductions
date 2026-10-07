export function Clover({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="46"
      viewBox="0 0 40 46"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 24C7 25 0 18 3 11C5 6 11 6 13 8C11 1 20-2 24 3C27 7 22 17 20 24Z"
        fill="currentColor"
      />
      <path
        d="M20 24C21 11 26 3 33 7C38 10 36 16 33 18C40 17 43 26 36 30C31 33 23 26 20 24Z"
        fill="currentColor"
        opacity=".9"
      />
      <path
        d="M20 24C33 25 39 32 34 38C31 43 25 40 24 37C23 43 14 43 12 36C11 32 17 27 20 24Z"
        fill="currentColor"
        opacity=".85"
      />
      <path
        d="M20 24C8 21 0 25 2 32C3 38 9 39 13 35C13 31 16 27 20 24Z"
        fill="currentColor"
        opacity=".75"
      />
      <path
        d="M20 24C22 34 19 41 14 44"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function Brand() {
  return (
    <span className="brand">
      <Clover />
      <span className="brand-words">
        go lucky<span>PRODUCTIONS</span>
      </span>
    </span>
  );
}
export function Arrow({
  direction = "right",
}: {
  direction?: "right" | "down";
}) {
  return (
    <svg
      className={direction === "down" ? "arrow arrow-down" : "arrow"}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4 12h15M13 5l7 7-7 7" />
    </svg>
  );
}
