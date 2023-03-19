import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="header__title">
        ackyl.gg
      </Link>
      <div className="header__menu">menu</div>
    </header>
  );
}
