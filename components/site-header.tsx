import Link from "next/link";
import { CsdLogo } from "@/components/csd-logo";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-utility">
        <div className="site-container utility-inner">
          <span>New Road, Borikiri, Port Harcourt, Rivers State</span>
          <div>
            <a href="tel:+2347070927244">0707 092 7244</a>
            <span aria-hidden="true">•</span>
            <a href="mailto:consider8223@gmail.com">consider8223@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="nav-shell">
        <div className="site-container nav-inner">
          <Link className="brand" href="/" aria-label="CSD Enterprise home">
            <CsdLogo />
            <span className="brand-name">
              <strong>CSD Enterprise</strong>
              <small>Skills · Creativity · Delivery</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
            <Link className="nav-cta" href="/contact">Get in touch</Link>
          </nav>

          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span /><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href}>{item.label}</Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
