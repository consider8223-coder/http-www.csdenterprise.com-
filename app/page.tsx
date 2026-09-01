import Link from "next/link";
import { CsdLogo } from "@/components/csd-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services = [
  {
    number: "01",
    title: "Industrial Training",
    text: "Practical learning and workplace exposure designed to help students, graduates, and early-career professionals build useful skills.",
  },
  {
    number: "02",
    title: "AI Generative",
    text: "Practical generative AI support for content, ideas, workflows, and digital solutions that help people and organisations work smarter.",
  },
  {
    number: "03",
    title: "Graphic Design",
    text: "Clear, memorable visual communication for brands, campaigns, social media, presentations, and business materials.",
  },
  {
    number: "04",
    title: "Video & Music Generation",
    text: "Creative visual and audio production that turns ideas into engaging promotional, educational, and entertainment content.",
  },
  {
    number: "05",
    title: "General Contracting",
    text: "Dependable project support, sourcing, coordination, and delivery for organisations that need one accountable partner.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="site-container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">Nigeria-based. Multidisciplinary. Ready to deliver.</p>
              <h1>Skills, creativity, and project delivery—under one roof.</h1>
              <p className="hero-lead">
                CSD Enterprise helps individuals and organisations move from ideas to practical outcomes through training, generative AI, design, media production, and contracting support.
              </p>
              <div className="hero-actions">
                <Link className="button button-coral" href="/services">
                  Explore our services <span aria-hidden="true">↗</span>
                </Link>
                <Link className="text-link text-link-light" href="/contact">
                  Discuss a project <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-service-strip">
            <div className="site-container service-strip-grid">
              <span>Industrial training</span>
              <span>AI Generative</span>
              <span>Graphic design</span>
              <span>Video & music</span>
              <span>General contracting</span>
            </div>
          </div>
        </section>

        <section className="purpose-section section-space">
          <div className="site-container purpose-grid">
            <div>
              <p className="eyebrow">Why CSD Enterprise exists</p>
              <h2 className="section-title">Practical support for people and businesses that want to move forward.</h2>
            </div>
            <div className="purpose-copy">
              <p>
                From career-building exposure to polished brand communication and dependable project coordination, we bring different capabilities together around one simple goal: helping you get meaningful work done.
              </p>
              <Link className="text-link" href="/about">
                Learn about CSD Enterprise <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="services-preview section-space">
          <div className="site-container">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow">What we do</p>
                <h2 className="section-title compact-title">Five service lines. One committed team.</h2>
              </div>
              <Link className="button button-outline" href="/services">
                View all services
              </Link>
            </div>

            <div className="service-card-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <Link href="/services" aria-label={`Learn more about ${service.title}`}>
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="capability-band">
          <div className="site-container capability-grid">
            <div className="capability-mark" aria-hidden="true"><CsdLogo className="capability-logo" /></div>
            <div>
              <p className="eyebrow eyebrow-coral">Built around your outcome</p>
              <h2>Local understanding. Broad capability. Direct communication.</h2>
              <p>
                Based in Borikiri, Port Harcourt, we work with a practical mindset, clear communication, and respect for every client’s objective.
              </p>
            </div>
            <Link className="button button-white" href="/contact">
              Contact our team
            </Link>
          </div>
        </section>

        <section className="closing-cta section-space">
          <div className="site-container closing-cta-inner">
            <p className="eyebrow">Let’s work together</p>
            <h2>Have a training need, creative brief, or project to deliver?</h2>
            <div className="closing-actions">
              <Link className="button button-coral" href="/contact">Start a conversation</Link>
              <a className="text-link" href="tel:+2347070927244">Call 0707 092 7244</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
