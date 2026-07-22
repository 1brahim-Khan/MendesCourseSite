"use client";

import { useState } from "react";
import Image from "next/image";
import {
  siteConfig,
  type ClassExperience,
  type ClassId,
} from "../src/content/siteConfig";

const statusLabels = {
  open: "Registration open",
  waitlist: "Waitlist",
  closed: "Registration closed",
};

function getFormUrl(classId: ClassId | "both") {
  const registration = siteConfig.registration;
  const specific =
    classId === "marriage"
      ? registration.marriageGoogleFormUrl
      : classId === "mindfulness"
        ? registration.mindfulnessGoogleFormUrl
        : registration.bothClassesGoogleFormUrl;

  return specific || registration.generalGoogleFormUrl;
}

function PlaceholderImage({ label, compact = false }: { label: string; compact?: boolean }) {
  return (
    <div className={`image-placeholder${compact ? " image-placeholder--compact" : ""}`} aria-label={`${label} image placeholder`}>
      <span className="placeholder-mark" aria-hidden="true">M</span>
      <p>{label}</p>
      <small>Image coming soon</small>
    </div>
  );
}

function ConfigImage({ src, alt, className, placeholderLabel }: { src: string; alt: string; className?: string; placeholderLabel: string }) {
  if (!src) return <PlaceholderImage label={placeholderLabel} />;
  return <Image src={src} alt={alt} className={className} width={1200} height={1400} sizes="(max-width: 900px) 100vw, 50vw" />;
}

function RegistrationLink({
  href,
  children,
  className = "button button--primary",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (!href) {
    return (
      <span className={`${className} button--disabled`} aria-disabled="true" title="Add the Google Form URL in siteConfig.ts">
        Form link coming soon
      </span>
    );
  }

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

function ClassCard({ classInfo, index }: { classInfo: ClassExperience; index: number }) {
  const formUrl = getFormUrl(classInfo.id);
  const isClosed = classInfo.status === "closed";
  const buttonText =
    classInfo.status === "waitlist"
      ? "Join the Waitlist"
      : isClosed
        ? "Registration Closed"
        : classInfo.id === "marriage"
          ? "Register for the Marriage Class"
          : "Register for the Mindfulness Class";
  const closedUrl = siteConfig.registration.futureAnnouncementsUrl;

  return (
    <article className="class-card">
      <div className="class-card__visual">
        <ConfigImage src={classInfo.image} alt={classInfo.imageAlt} placeholderLabel={classInfo.id === "marriage" ? "Marriage class flyer" : "Mindfulness class flyer"} />
      </div>
      <div className="class-card__body">
        <div className="class-card__topline">
          <span>Experience {String(index + 1).padStart(2, "0")}</span>
          <span className={`status status--${classInfo.status}`}>{statusLabels[classInfo.status]}</span>
        </div>
        <h3>{classInfo.title}</h3>
        <p className="class-subtitle">{classInfo.subtitle}</p>
        <p>{classInfo.description}</p>

        <dl className="event-grid">
          <div><dt>Date</dt><dd>{classInfo.date}</dd></div>
          <div><dt>Time</dt><dd>{classInfo.time}</dd></div>
          <div><dt>Format</dt><dd>{classInfo.format}</dd></div>
          <div><dt>Registration</dt><dd>${classInfo.price}</dd></div>
          <div><dt>Instructor</dt><dd>{classInfo.instructor}</dd></div>
          <div><dt>Capacity</dt><dd>{classInfo.capacity} participants</dd></div>
        </dl>

        <div className="class-lists">
          <div>
            <h4>We will explore</h4>
            <ul>{classInfo.themes.map((theme) => <li key={theme}>{theme}</li>)}</ul>
          </div>
          <div>
            <h4>Participants receive</h4>
            <ul>{classInfo.receives.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>

        {isClosed ? (
          <>
            <RegistrationLink href={closedUrl}>{buttonText}</RegistrationLink>
            <p className="closed-note">Registration for this class is currently closed. You may still sign up to receive the replay or future class announcements if a form link is available.</p>
          </>
        ) : (
          <RegistrationLink href={formUrl}>{buttonText}</RegistrationLink>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const visibleMedia = siteConfig.media.filter((item) => item.visible).sort((a, b) => a.sortOrder - b.sortOrder);
  const payment = siteConfig.payment;

  async function copyPaymentDetails() {
    const details = `Zelle recipient: ${payment.zelleRecipient}\nRecipient name: ${payment.zelleRecipientName}\nAmount: $${payment.amountPerClass} per class\nMemo format: ${payment.memoFormat}`;
    await navigator.clipboard.writeText(details);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Marhama Institute home">
          <span className="brand-mark" aria-hidden="true">M</span>
          <span>{siteConfig.brand.name}</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#classes">Classes</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#register">Register</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__content">
          <p className="eyebrow">{siteConfig.hero.eyebrow}</p>
          <h1>{siteConfig.hero.title}</h1>
          <p className="hero__description">{siteConfig.hero.description}</p>
          <div className="button-row">
            <a className="button button--primary" href="#classes">View the Classes</a>
            <a className="button button--secondary" href="#register">Register Now</a>
          </div>
          <p className="hero__meta"><span>July 25–26, 2026</span><span>Live online</span><span>Replay included</span></p>
        </div>
        <div className="hero__visual">
          <div className="arch-frame">
            <ConfigImage src={siteConfig.hero.image} alt={siteConfig.hero.imageAlt} placeholderLabel="Shaykh Adeyinka Mendes" />
          </div>
          <p>Teacher · Spiritual guide · Community leader</p>
        </div>
      </section>

      <section className="intro-strip" aria-label="Program introduction">
        <p>Two focused gatherings</p><span aria-hidden="true">✦</span><p>One weekend of formation</p><span aria-hidden="true">✦</span><p>Rooted in sacred tradition</p>
      </section>

      <section className="section section--classes" id="classes">
        <div className="section-heading">
          <p className="eyebrow">The experiences</p>
          <h2>Choose the gathering that speaks to your season.</h2>
          <p>Attend either two-hour class individually, or join us for both across one intentional weekend.</p>
        </div>
        <div className="class-stack">
          {siteConfig.classes.map((classInfo, index) => <ClassCard key={classInfo.id} classInfo={classInfo} index={index} />)}
        </div>
      </section>

      <section className="section registration-section" id="register">
        <div className="section-heading section-heading--light">
          <p className="eyebrow">Reserve your place</p>
          <h2>Registration is simple.</h2>
          <p>Choose your class, complete the Google Form, then send your Zelle payment using the instructions below. Your place will be confirmed by email after payment is manually verified.</p>
        </div>
        <div className="registration-options">
          {[
            { id: "marriage" as const, number: "01", title: "The Prophetic Art of Marriage", detail: "$100 · July 25" },
            { id: "mindfulness" as const, number: "02", title: "Returning to the True You", detail: "$100 · July 26" },
            { id: "both" as const, number: "01 + 02", title: "Both classes", detail: "$200 · Full weekend" },
          ].map((option) => (
            <div className="registration-option" key={option.id}>
              <span>{option.number}</span><div><h3>{option.title}</h3><p>{option.detail}</p></div>
              <RegistrationLink href={getFormUrl(option.id)} className="text-link">Open form</RegistrationLink>
            </div>
          ))}
        </div>
        <p className="form-note">{siteConfig.registration.note}</p>
        <div className="confirmation-note">
          <span aria-hidden="true">✦</span>
          <p>Jazakum Allahu khayran. After you submit your registration form, please complete your Zelle payment to reserve your place. You will receive final confirmation and online access details by email after payment is verified.</p>
        </div>
      </section>

      <section className="section payment-section" id="payment">
        <div className="payment-copy">
          <p className="eyebrow">Step two</p>
          <h2>Complete Your Registration</h2>
          <p>After submitting the registration form, send your registration payment through Zelle using the information below. Your place will be confirmed after the payment is received and matched to your registration.</p>
          <dl className="payment-details">
            <div><dt>Zelle recipient</dt><dd>{payment.zelleRecipient}</dd></div>
            <div><dt>Recipient name</dt><dd>{payment.zelleRecipientName}</dd></div>
            <div><dt>Amount</dt><dd>${payment.amountPerClass} per class</dd></div>
            <div><dt>Payment memo</dt><dd>{payment.memoFormat}</dd></div>
          </dl>
          <button className="button button--primary" type="button" onClick={copyPaymentDetails}>{copied ? "Copied to clipboard" : "Copy Zelle Information"}</button>
        </div>
        <aside className="payment-card" aria-label="Payment memo examples">
          {payment.qrCodeImage ? <Image src={payment.qrCodeImage} alt={payment.qrCodeAlt} width={720} height={720} /> : <PlaceholderImage label="Zelle QR code" compact />}
          <h3>Memo examples</h3>
          <code>MENDEZ-AHMED-MARRIAGE</code>
          <code>MENDEZ-AHMED-MINDFULNESS</code>
          <code>MENDEZ-AHMED-BOTH</code>
          <p>Payment is verified manually. Zoom and access details are sent privately after verification.</p>
        </aside>
      </section>

      <section className="section about-section" id="about">
        <div className="about-portrait">
          <ConfigImage src={siteConfig.instructor.portrait} alt={siteConfig.instructor.portraitAlt} placeholderLabel="Instructor portrait" />
        </div>
        <div className="about-copy">
          <p className="eyebrow">Your teacher</p>
          <h2>About {siteConfig.instructor.name}</h2>
          <p>{siteConfig.instructor.bio}</p>
          {siteConfig.instructor.videoUrl && <a className="button button--secondary" href={siteConfig.instructor.videoUrl} target="_blank" rel="noreferrer">Watch an invitation <span aria-hidden="true">↗</span></a>}
          {siteConfig.instructor.socialLinks.length > 0 && <div className="social-links">{siteConfig.instructor.socialLinks.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>)}</div>}
        </div>
      </section>

      {visibleMedia.length > 0 && (
        <section className="section media-section" id="media">
          <div className="section-heading"><p className="eyebrow">Resources</p><h2>Media &amp; Class Flyers</h2></div>
          <div className="media-grid">
            {visibleMedia.map((item) => (
              <article className="media-item" key={`${item.title}-${item.sortOrder}`}>
                {item.type === "image" ? <Image src={item.url} alt={item.title} width={900} height={1100} /> : <div className="media-link-mark" aria-hidden="true">↗</div>}
                <div><p>{item.classId}</p><h3>{item.title}</h3>{item.type !== "image" && <a href={item.url} target="_blank" rel="noreferrer">Open {item.type}</a>}</div>
              </article>
            ))}
          </div>
        </section>
      )}

      <footer>
        <div><a className="brand brand--footer" href="#top"><span className="brand-mark" aria-hidden="true">M</span><span>{siteConfig.brand.name}</span></a><p>{siteConfig.brand.tagline}</p></div>
        <div><p>{siteConfig.brand.legalText}</p><a href={`mailto:${siteConfig.brand.contactEmail}`}>{siteConfig.brand.contactEmail}</a></div>
        <p className="footer-private">Class access details are sent privately after payment verification.</p>
      </footer>

      <a className="mobile-cta" href="#register">Register now <span aria-hidden="true">→</span></a>
    </main>
  );
}
