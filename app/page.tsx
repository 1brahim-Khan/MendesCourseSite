"use client";

import Image from "next/image";
import { siteConfig, type ClassExperience, type ClassId } from "../src/content/siteConfig";

const statusLabels = {
  open: "Registration open",
  waitlist: "Waitlist",
  closed: "Registration closed",
};

function formUrl(classId: ClassId) {
  const specific = classId === "marriage"
    ? siteConfig.registration.marriageGoogleFormUrl
    : siteConfig.registration.mindfulnessGoogleFormUrl;
  return specific || siteConfig.registration.generalGoogleFormUrl;
}

function RegistrationButton({ classInfo }: { classInfo: ClassExperience }) {
  const href = formUrl(classInfo.id);
  const label = classInfo.status === "waitlist"
    ? "Join the Waitlist"
    : classInfo.status === "closed"
      ? "Registration Closed"
      : classInfo.id === "marriage"
        ? "Register for the Marriage Class"
        : "Register for the Mindfulness Class";

  return (
    <a
      className={`button button--primary ${classInfo.status === "closed" ? "button--disabled" : ""}`}
      href={classInfo.status === "closed" ? undefined : href || undefined}
      aria-disabled={classInfo.status === "closed" || !href}
      target={href && classInfo.status !== "closed" ? "_blank" : undefined}
      rel={href && classInfo.status !== "closed" ? "noreferrer" : undefined}
    >
      {href || classInfo.status === "closed" ? label : "Form link coming soon"}
      {href && classInfo.status !== "closed" && <span aria-hidden="true">↗</span>}
    </a>
  );
}

function ClassCard({ classInfo }: { classInfo: ClassExperience }) {
  return (
    <article className="class-card">
      <div className="class-card__visual">
        {classInfo.image ? (
          <Image
            className="flyer-image"
            src={classInfo.image}
            alt={classInfo.imageAlt}
            width={1288}
            height={1610}
            sizes="(max-width: 720px) 100vw, 38vw"
          />
        ) : (
          <div className="image-placeholder">Add this class flyer in <code>siteConfig.ts</code></div>
        )}
      </div>
      <div className="class-card__body">
        <div className="class-card__topline">
          <span className={`status status--${classInfo.status}`}>{statusLabels[classInfo.status]}</span>
          <span>{classInfo.format}</span>
        </div>
        <h2>{classInfo.title}</h2>
        <p className="class-subtitle">{classInfo.subtitle}</p>
        <p className="class-description">{classInfo.description}</p>

        <dl className="event-grid">
          <div><dt>Date</dt><dd>{classInfo.date}</dd></div>
          <div><dt>Time</dt><dd>{classInfo.time}</dd></div>
          <div><dt>Registration</dt><dd>${classInfo.price}</dd></div>
        </dl>

        <div className="class-lists">
          <div>
            <h3>Key themes</h3>
            <ul>{classInfo.themes.map((theme) => <li key={theme}>{theme}</li>)}</ul>
          </div>
          <div>
            <h3>Included</h3>
            <ul>{classInfo.receives.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>

        <RegistrationButton classInfo={classInfo} />
        {classInfo.status === "closed" && (
          <p className="closed-note">Registration for this class is currently closed. Check back for future announcements.</p>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <p className="eyebrow">{siteConfig.hero.eyebrow}</p>
        <h1>{siteConfig.hero.title}</h1>
        <p className="hero__description">{siteConfig.hero.description}</p>
        <div className="button-row">
          <a className="button button--primary" href="#classes">View the Classes</a>
          <a className="button button--secondary" href={siteConfig.registration.generalGoogleFormUrl} target="_blank" rel="noreferrer">Register Now <span aria-hidden="true">↗</span></a>
        </div>
        <p className="hero__meta">July 25–26, 2026 <span aria-hidden="true">·</span> Live online <span aria-hidden="true">·</span> Replay included</p>
      </section>

      <section className="section section--classes" id="classes">
        <div className="section-heading">
          <p className="eyebrow">The experiences</p>
          <h2>Two focused classes for one intentional weekend.</h2>
        </div>
        <div className="class-stack">
          {siteConfig.classes.map((classInfo) => <ClassCard key={classInfo.id} classInfo={classInfo} />)}
        </div>
        <p className="form-note">{siteConfig.registration.note} Choose a class on the form, submit your details, and watch for confirmation by email.</p>
      </section>

      <section className="section about-section" id="about">
        <div className="about-copy">
          <p className="eyebrow">Your teacher</p>
          <h2>About {siteConfig.instructor.name}</h2>
          <p>{siteConfig.instructor.bio}</p>
          <a className="text-link" href={siteConfig.instructor.sourceUrl} target="_blank" rel="noreferrer">Read more about Marhama Village <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer>
        <div>
          <p className="footer-brand">{siteConfig.brand.name}</p>
          <p>{siteConfig.brand.legalText}</p>
        </div>
        <div>
          <a href={`mailto:${siteConfig.brand.contactEmail}`}>{siteConfig.brand.contactEmail}</a>
          <p>Class access details are sent privately after registration confirmation.</p>
        </div>
      </footer>

      <a className="mobile-cta" href={siteConfig.registration.generalGoogleFormUrl} target="_blank" rel="noreferrer">Register now <span aria-hidden="true">↗</span></a>
    </main>
  );
}
