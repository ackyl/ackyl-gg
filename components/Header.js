import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <Link href="/" passHref>
          <p className="header-link">home</p>
        </Link>
        <Link href="/about" passHref>
          <p className="header-link">about</p>
        </Link>
        <Link href="https://whitenoisewish.es/" passHref>
          <p className="header-link" target="_blank">
            music
          </p>
        </Link>
      </div>
    </header>
  );
}
