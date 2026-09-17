import logo from "@/img/straya.svg";

type LogoProps = {
  className?: string;
};

const src = typeof logo === "string" ? logo : logo.src;

export function Logo({ className = "h-5 w-auto" }: LogoProps) {
  return (
    // SVG wordmark from src/img/straya.svg — height-driven so it scales cleanly.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="Straya" className={className} />
  );
}
