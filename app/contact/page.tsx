import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact Us | CSD Enterprise",
  description: "Contact CSD Enterprise in Borikiri, Port Harcourt for training, design, media, and contracting enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero page-hero-contact">
          <div className="site-container page-hero-content">
            <p className="breadcrumb"><Link href="/">Home</Link><span>/</span>Contact Us</p>
            <p className="eyebrow eyebrow-coral">Talk to CSD Enterprise</p>
            <h1>Let’s discuss what you need to achieve.</h1>
            <p>Reach us directly for industrial training, AI generative, design, video or music generation, and general contracting enquiries.</p>
          </div>
        </section>

        <section className="contact-section section-space">
          <div className="site-container contact-grid">
            <div className="contact-intro">
              <p className="eyebrow">Contact details</p>
              <h2 className="section-title">A direct line to our team.</h2>
              <p>Choose the most convenient way to reach us. For a faster discussion, share the service you need, your expected outcome, and your preferred timeline.</p>
            </div>
            <div className="contact-cards">
              <article>
                <span className="contact-card-label">Visit us</span>
                <h3>Port Harcourt Office</h3>
                <address>New Road, Borikiri<br />Port Harcourt, Rivers State<br />Nigeria</address>
              </article>
              <article>
                <span className="contact-card-label">Call us</span>
                <h3>Speak with CSD Enterprise</h3>
                <a href="tel:+2347070927244">0707 092 7244</a>
                <a href="tel:+2349035879912">0903 587 9912</a>
              </article>
              <article>
                <span className="contact-card-label">Email us</span>
                <h3>Send your enquiry</h3>
                <a href="mailto:consider8223@gmail.com">consider8223@gmail.com</a>
                <span className="contact-note">Website: www.csdenterprise.com</span>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-guidance">
          <div className="site-container guidance-grid">
            <div>
              <p className="eyebrow eyebrow-light">Before you contact us</p>
              <h2>Three details help us understand your enquiry quickly.</h2>
            </div>
            <ol>
              <li><span>01</span><p><strong>The service</strong> you are interested in.</p></li>
              <li><span>02</span><p><strong>The result</strong> you want to achieve.</p></li>
              <li><span>03</span><p><strong>Your timing</strong> and relevant location.</p></li>
            </ol>
          </div>
        </section>

        <section className="closing-cta section-space">
          <div className="site-container closing-cta-inner">
            <p className="eyebrow">Ready when you are</p>
            <h2>Start with a call or send your brief by email.</h2>
            <div className="closing-actions">
              <a className="button button-coral" href="tel:+2347070927244">Call CSD Enterprise</a>
              <a className="text-link" href="mailto:consider8223@gmail.com">Send an email</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
