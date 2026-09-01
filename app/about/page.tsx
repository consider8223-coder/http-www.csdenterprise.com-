import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About Us | CSD Enterprise",
  description: "Learn about CSD Enterprise, a Nigerian multidisciplinary company based in Port Harcourt.",
};

const values = [
  { number: "01", title: "Practicality", text: "We focus on useful solutions, clear next steps, and work that can be applied in the real world." },
  { number: "02", title: "Creativity", text: "We approach ideas with curiosity and shape them into distinctive, audience-ready outcomes." },
  { number: "03", title: "Reliability", text: "We value clear communication, responsible coordination, and consistent delivery." },
  { number: "04", title: "Integrity", text: "We treat each engagement with honesty, respect, and accountability." },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero page-hero-about">
          <div className="site-container page-hero-content">
            <p className="breadcrumb"><Link href="/">Home</Link><span>/</span>About Us</p>
            <p className="eyebrow eyebrow-coral">Who we are</p>
            <h1>A multidisciplinary Nigerian company built for practical impact.</h1>
          </div>
        </section>

        <section className="section-space">
          <div className="site-container intro-grid">
            <div>
              <p className="eyebrow">About CSD Enterprise</p>
              <h2 className="section-title">Where skills, creativity, and dependable execution meet.</h2>
            </div>
            <div className="rich-copy">
              <p className="lead-paragraph">
                CSD Enterprise is a Nigerian-based company operating from New Road, Borikiri, Port Harcourt, Rivers State.
              </p>
              <p>
                Our work spans industrial training, AI generative solutions, graphic design, video and music generation, and general contracting. This combination enables us to support both people developing practical skills and organisations that need creative or project-based solutions.
              </p>
              <p>
                We believe strong work begins with understanding the objective, communicating clearly, and applying the right mix of skill and creativity to deliver a useful result.
              </p>
            </div>
          </div>
        </section>

        <section className="mission-section section-space">
          <div className="site-container mission-grid">
            <article>
              <span className="mission-label">Our mission</span>
              <h2>To turn learning, ideas, and project needs into practical outcomes.</h2>
              <p>We deliver accessible training, purposeful creative work, and dependable project support with clarity and commitment.</p>
            </article>
            <article className="vision-card">
              <span className="mission-label">Our vision</span>
              <h2>To become a trusted Nigerian partner for skills, creativity, and delivery.</h2>
              <p>We aim to help more people and organisations grow through relevant capabilities and reliable service.</p>
            </article>
          </div>
        </section>

        <section className="values-section section-space">
          <div className="site-container">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow">Our values</p>
                <h2 className="section-title compact-title">Principles that guide how we work.</h2>
              </div>
            </div>
            <div className="values-grid">
              {values.map((value) => (
                <article key={value.title}>
                  <span>{value.number}</span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-section section-space">
          <div className="site-container approach-grid">
            <div>
              <p className="eyebrow eyebrow-light">Our approach</p>
              <h2>Simple process. Clear responsibility.</h2>
            </div>
            <ol className="approach-list">
              <li><span>01</span><div><strong>Understand</strong><p>We begin with your objective, audience, scope, and expected outcome.</p></div></li>
              <li><span>02</span><div><strong>Plan</strong><p>We define the practical direction, resources, and path to delivery.</p></div></li>
              <li><span>03</span><div><strong>Execute</strong><p>We apply the appropriate skill, creative thinking, and coordination.</p></div></li>
              <li><span>04</span><div><strong>Deliver</strong><p>We complete the work and keep communication direct throughout.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="inline-cta">
          <div className="site-container inline-cta-inner">
            <div><p className="eyebrow">Work with us</p><h2>Ready to discuss what CSD Enterprise can do for you?</h2></div>
            <Link className="button button-coral" href="/contact">Contact our team</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
