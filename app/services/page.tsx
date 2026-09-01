import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Services | CSD Enterprise",
  description: "Explore industrial training, AI generative, graphic design, video and music generation, and general contracting services from CSD Enterprise.",
};

const services = [
  {
    id: "industrial-training",
    number: "01",
    title: "Industrial Training",
    kicker: "Practical exposure for career development",
    description: "We support practical learning and workplace exposure for students, graduates, and early-career professionals who want to strengthen their readiness for the world of work.",
    points: ["Practical skills development", "Workplace readiness", "Guided learning support"],
  },
  {
    id: "ai-generative",
    number: "02",
    title: "AI Generative",
    kicker: "Smarter creation and digital workflows",
    description: "We apply generative AI to help individuals and organisations develop content, shape ideas, improve workflows, and create practical digital solutions with greater speed and clarity.",
    points: ["AI-assisted content creation", "Prompt and workflow development", "Generative AI creative support"],
  },
  {
    id: "graphic-design",
    number: "03",
    title: "Graphic Design",
    kicker: "Visual communication with purpose",
    description: "We create polished designs that help businesses, organisations, and creators communicate clearly and present their ideas with confidence.",
    points: ["Brand and campaign materials", "Social media graphics", "Presentation and promotional design"],
  },
  {
    id: "video-music",
    number: "04",
    title: "Video & Music Generation",
    kicker: "Content designed to hold attention",
    description: "We turn concepts into engaging visual and audio content for promotion, education, entertainment, and digital storytelling.",
    points: ["Video concepts and generation", "Promotional and social content", "Music and audio creative support"],
  },
  {
    id: "contracting",
    number: "05",
    title: "General Contracting",
    kicker: "Coordinated support from brief to delivery",
    description: "We provide flexible project support, sourcing, coordination, and general contracting services tailored to the needs of businesses and organisations.",
    points: ["Project support and coordination", "Sourcing and procurement assistance", "General service delivery"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero page-hero-services">
          <div className="site-container page-hero-content">
            <p className="breadcrumb"><Link href="/">Home</Link><span>/</span>Services</p>
            <p className="eyebrow eyebrow-coral">Our capabilities</p>
            <h1>Different services. One standard of commitment.</h1>
            <p>Explore how CSD Enterprise can support your development, communication, content, or project delivery needs.</p>
          </div>
        </section>

        <section className="services-detail-section section-space">
          <div className="site-container service-detail-list">
            {services.map((service) => (
              <article className="service-detail" id={service.id} key={service.id}>
                <div className="service-detail-number">{service.number}</div>
                <div className="service-detail-main">
                  <p className="eyebrow">{service.kicker}</p>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
                <ul>
                  {service.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="service-promise section-space">
          <div className="site-container promise-grid">
            <div>
              <p className="eyebrow eyebrow-coral">The CSD promise</p>
              <h2>We keep the objective visible from the first conversation to final delivery.</h2>
            </div>
            <div className="promise-points">
              <div><strong>Clear communication</strong><p>Direct conversations about scope, direction, and expectations.</p></div>
              <div><strong>Practical thinking</strong><p>Solutions shaped around what the work needs to achieve.</p></div>
              <div><strong>Responsive support</strong><p>A reachable team based in Port Harcourt, Nigeria.</p></div>
            </div>
          </div>
        </section>

        <section className="inline-cta">
          <div className="site-container inline-cta-inner">
            <div><p className="eyebrow">Need a tailored solution?</p><h2>Tell us the service you need and the outcome you have in mind.</h2></div>
            <Link className="button button-coral" href="/contact">Discuss your project</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
