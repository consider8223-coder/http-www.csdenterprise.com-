import Link from "next/link";
import { CsdLogo } from "@/components/csd-logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand-block">
          <Link className="brand brand-footer" href="/">
            <CsdLogo />
            <span className="brand-name">
              <strong>CSD Enterprise</strong>
              <small>Skills · Creativity · Delivery</small>
            </span>
          </Link>
          <p>
            A Nigerian company providing industrial training, AI generative solutions, graphic design, video and music generation, and general contracting services.
          </p>
        </div>
        <div>
          <h2>Quick links</h2>
          <div className="footer-links">
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div>
          <h2>Contact</h2>
          <address>
            New Road, Borikiri<br />
            Port Harcourt, Rivers State<br />
            <a href="tel:+2347070927244">0707 092 7244</a><br />
            <a href="tel:+2349035879912">0903 587 9912</a><br />
            <a href="mailto:consider8223@gmail.com">consider8223@gmail.com</a>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="site-container footer-bottom-inner">
          <span>© {new Date().getFullYear()} CSD Enterprise. All rights reserved.</span>
          <span>Port Harcourt, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
