"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main>
      {/* ===== HEADER ===== */}
      <header className="site-header">
        {/* Mobile backdrop overlay */}
        {isMenuOpen && (
          <div
            className="mobile-overlay"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        <a href="/" className="header-logo" onClick={closeMenu}>
          <span className="header-logo-title">Dr. Maya Reynolds, PsyD</span>
          <span className="header-logo-subtitle">Licensed Clinical Psychologist</span>
        </a>

        <nav className={`header-nav ${isMenuOpen ? "nav-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#who-we-help" onClick={closeMenu}>Who We Help</a>
          <a href="#specialties" onClick={closeMenu}>Specialties</a>
          <a href="#our-office" onClick={closeMenu}>Our Office</a>
          <a href="#how-we-work" onClick={closeMenu}>Approach</a>
          <a href="#faqs" onClick={closeMenu}>FAQs</a>
          <a href="#contact" className="header-contact-btn" onClick={closeMenu}>Contact</a>
        </nav>

        <button
          className={`mobile-menu-btn ${isMenuOpen ? "menu-open" : ""}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-image-wrapper">
          <Image
            src="/images/office1.jpeg"
            alt="Dr. Maya Reynolds Santa Monica therapy office"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="hero-content">
          <p className="uppercase-label hero-label">
            Online &amp; In-Person Counseling in Santa Monica &amp; Across CA
          </p>

          <h1 className="hero-heading">
            Anxiety &amp; Trauma Therapy for{" "}
            <span className="script-text">High-Achievers</span> in Santa Monica, CA
          </h1>

          <p className="hero-subtext">
            You don&apos;t have to carry anxiety, old trauma, or constant burnout
            alone. Dr. Maya Reynolds offers warm, collaborative therapy in Santa
            Monica for adults ready to feel steadier and more like themselves.
            Whether you meet in person or by secure California telehealth, you&apos;ll
            be met with care, not judgment.
          </p>

          <a href="#contact" className="underline-link hero-cta">
            Schedule Your Free Consult
          </a>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="intro-section">
        <div className="intro-inner">
          <div className="intro-text-area">
            <h2 className="intro-heading">
              You&rsquo;re holding onto hope that life can be better than it is
              right now.
            </h2>

            <div className="intro-columns">
              <div>
                <p className="uppercase-label intro-col-label">
                  At Dr. Maya Reynolds Psychological Services, we want to make that hope a
                  reality.
                </p>
                <p className="intro-col-text">
                  Whether you&rsquo;re an adult seeking personal growth, looking
                  to work through your trauma, navigating chronic panic, or feeling
                  exhausted by relentless burnout and perfectionism, I provide a
                  compassionate, grounded, and safe space to help you navigate
                  all of life&rsquo;s ups and downs.
                </p>
              </div>

              <div>
                <p className="intro-col-text">
                  First and foremost, I believe what you&rsquo;re going through
                  is real, valid, and worthy of support. I offer clients in the
                  Santa Monica area and across California an environment to
                  discover a new life and a deeper sense of self in the midst of
                  their struggles. As we tap into the power of connection and
                  evidence-based tools, you can find your footing again and take a
                  transformative path forward.
                </p>
              </div>
            </div>
          </div>

          <div className="intro-image-wrapper">
            <Image
              src="/images/office2.jpeg"
              alt="Quiet, private Santa Monica counseling room"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* ===== WHO WE HELP ===== */}
      <section id="who-we-help" className="who-we-help-section">
        <div className="who-we-help-inner">
          <h2 className="who-we-help-heading">
            Who we <span className="script-text">help</span>
          </h2>

          <div className="who-we-help-grid">
            {/* Card 1: Adults */}
            <div className="who-we-help-card">
              <div className="who-we-help-card-image">
                <Image
                  src="/images/office1.jpeg"
                  alt="High-achieving adults in Santa Monica"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="who-we-help-card-title">Adults &amp; High-Achievers</h3>
              <p className="who-we-help-card-text">
                Feeling stuck or overwhelmed? Many of the people I work with are
                high-achieving, thoughtful, and self-aware—but internally feel
                exhausted, stuck in overthinking, or emotionally on edge. We help
                you find clarity, build resilience, and move forward.
              </p>
            </div>

            {/* Card 2: Anxiety & Panic */}
            <div className="who-we-help-card">
              <div className="who-we-help-card-image">
                <Image
                  src="/images/office2.jpeg"
                  alt="Anxiety and panic support in Santa Monica"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="who-we-help-card-title">Anxiety &amp; Panic</h3>
              <p className="who-we-help-card-text">
                Clients frequently come to me feeling &ldquo;functional&rdquo; on the
                outside while quietly struggling with constant worry, physical
                tension, difficulty sleeping, or bracing for something to go wrong.
                We help quiet racing thoughts and restore calm.
              </p>
            </div>

            {/* Card 3: Trauma & Burnout */}
            <div className="who-we-help-card">
              <div className="who-we-help-card-image">
                <Image
                  src="/images/dr-maya-reynolds.png"
                  alt="Dr. Maya Reynolds, PsyD"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="who-we-help-card-title">Trauma &amp; Burnout</h3>
              <p className="who-we-help-card-text">
                Navigating the lingering impact of past experiences or
                professional exhaustion? Using paced EMDR and body-based
                stabilization, we process single-incident or complex trauma while
                helping you set sustainable boundaries for your well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUOTE BANNER ===== */}
      <section className="quote-banner">
        <div className="quote-banner-image">
          <Image
            src="/images/office2.jpeg"
            alt="Santa Monica therapy sanctuary background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="quote-banner-overlay"></div>
        <p className="quote-banner-text">
          You deserve a place where your story is heard, valued, and understood.{" "}
          <em>Nothing will be too heavy for us to carry together.</em>
        </p>
      </section>

      {/* ===== OUR AREAS OF EXPERTISE ===== */}
      <section className="expertise-section">
        <div className="expertise-inner">
          <div>
            <h2 className="expertise-heading">
              Our areas of
              <br />
              <span className="script-text">expertise</span>
            </h2>
          </div>

          <div className="expertise-list">
            <div className="expertise-item">
              <span className="expertise-item-text">Anxiety &amp; Panic</span>
            </div>
            <div className="expertise-item">
              <span className="expertise-item-text">Trauma &amp; PTSD</span>
            </div>
            <div className="expertise-item">
              <span className="expertise-item-text">EMDR Therapy</span>
            </div>
            <div className="expertise-item">
              <span className="expertise-item-text">Professional Burnout</span>
            </div>
            <div className="expertise-item">
              <span className="expertise-item-text">Perfectionism</span>
            </div>
            <div className="expertise-item">
              <span className="expertise-item-text">High Internal Pressure</span>
            </div>
            <div className="expertise-item">
              <span className="expertise-item-text">Chronic Worry</span>
            </div>
            <div className="expertise-item">
              <span className="expertise-item-text">Sleep &amp; Body Tension</span>
            </div>
            <div className="expertise-item">
              <span className="expertise-item-text">Somatic Regulation</span>
            </div>
            <div className="expertise-item">
              <span className="expertise-item-text">Boundary Architecture</span>
            </div>
            <div className="expertise-item">
              <span className="expertise-item-text">Mindfulness Practices</span>
            </div>
            <div className="expertise-item">
              <span className="expertise-item-text">&hellip;And More.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK (About Dr. Maya Reynolds, PsyD) ===== */}
      <section id="about" className="how-we-work-section">
        <div className="how-we-work-inner">
          <div className="how-we-work-content">
            <p className="uppercase-label how-we-work-label">About Dr. Maya Reynolds, PsyD</p>

            <h2 className="how-we-work-heading">
              About Dr. Maya Reynolds, PsyD
            </h2>

            <div className="how-we-work-columns">
              <div>
                <p className="uppercase-label how-we-work-col-label">
                  I’m a licensed clinical psychologist based in Santa Monica, California.
                </p>
                <p className="how-we-work-col-text">
                  I’m a licensed clinical psychologist based in Santa Monica,
                  California, offering therapy for adults who feel overwhelmed by
                  anxiety, stress, or the lingering effects of past experiences.
                  Many of the people I work with are high-achieving, thoughtful,
                  and self-aware—but internally feel exhausted, stuck in
                  overthinking, or emotionally on edge.
                </p>
                <p className="how-we-work-col-text">
                  My work often focuses on anxiety, panic, trauma, and burnout.
                  Clients frequently come to me feeling “functional” on the
                  outside while quietly struggling with constant worry, tension in
                  their body, difficulty sleeping, or a sense that they’re always
                  bracing for something to go wrong. Others are navigating the
                  impact of earlier life experiences that continue to affect their
                  relationships, confidence, or sense of safety.
                </p>
                <p className="how-we-work-col-text">
                  I take a warm, collaborative, and grounded approach to therapy.
                  Sessions are structured enough to feel supportive, while still
                  leaving space for reflection and depth. I integrate evidence-based
                  methods such as cognitive-behavioral therapy (CBT), EMDR,
                  mindfulness-based practices, and body-oriented techniques to
                  help clients understand both the emotional and physiological
                  sides of what they’re experiencing.
                </p>
                <p className="how-we-work-col-text">
                  Trauma work is an important part of my practice. I work with
                  adults who have experienced single-incident trauma as well as
                  more complex, long-standing patterns that may stem from
                  childhood, relationships, or chronic stress. My approach is
                  paced carefully, with an emphasis on safety, stabilization, and
                  helping clients feel more regulated in their daily lives—not
                  just during sessions.
                </p>
              </div>

              <div>
                <p className="how-we-work-col-text">
                  In addition to trauma and anxiety, I frequently support
                  clients dealing with professional burnout, perfectionism, and
                  high internal pressure. Many are entrepreneurs, creatives, or
                  professionals who feel disconnected from themselves after years
                  of pushing through stress. Therapy can become a space to slow
                  down, reconnect, and develop more sustainable ways of living
                  and working.
                </p>
                <p className="how-we-work-col-text">
                  I offer both in-person therapy from my Santa Monica office and
                  secure telehealth sessions for clients located in California.
                  My office is a quiet, private space designed to feel calm and
                  grounding, with natural light and a comfortable, uncluttered
                  environment. Clients often share that the space itself helps
                  them feel more at ease when they arrive.
                </p>
                <p className="how-we-work-col-text">
                  I believe therapy works best when clients feel respected,
                  understood, and actively involved in the process. My goal is
                  not just symptom relief, but helping clients develop insight,
                  resilience, and a stronger relationship with themselves over
                  time.
                </p>
                <p className="how-we-work-col-text">
                  <em>
                    If you’re looking for a therapist who combines practical
                    tools with depth-oriented work—and who understands the
                    realities of living and working in a fast-paced environment—I
                    may be a good fit.
                  </em>
                </p>
              </div>
            </div>

            <a href="#contact" className="underline-link">
              Schedule a Consultation
            </a>
          </div>

          <div className="how-we-work-image">
            <Image
              src="/images/dr-maya-reynolds.png"
              alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* ===== HONORING SECTION ===== */}
      <section className="honoring-section">
        <div className="honoring-inner">
          <div className="honoring-image-wrapper">
            <Image
              src="/images/office1.jpeg"
              alt="Dr. Maya Reynolds Santa Monica Office Interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="honoring-content">
            <h2 className="honoring-heading">
              Honoring where you&rsquo;ve been{" "}
              <span className="script-text">&amp;</span> helping shape where
              you&rsquo;re headed.
            </h2>
          </div>
        </div>
      </section>

      {/* ===== OUR SPECIALTIES INCLUDE ===== */}
      <section id="specialties" className="specialties-section">
        <div className="specialties-inner">
          {/* Top row: heading + 2 cards */}
          <div className="specialties-top">
            <div className="specialties-heading-col">
              <h2 className="specialties-heading">
                Our <span className="script-text">specialties</span>{" "}
                include&hellip;
              </h2>
            </div>

            <div className="specialty-card">
              <h3 className="specialty-card-title">Anxiety Therapy in Santa Monica</h3>
              <p className="specialty-card-text">
                Using CBT and mindfulness-based tools, anxiety therapy helps you
                quiet racing thoughts, ease physical tension, and feel grounded
                again. We address chronic worry, sleep disruptions, and anticipatory
                dread so you can feel steadier in your daily life.
              </p>
              <a href="#contact" className="underline-link">
                Learn More
              </a>
            </div>

            <div className="specialty-card">
              <h3 className="specialty-card-title">Trauma Therapy &amp; EMDR in Santa Monica</h3>
              <p className="specialty-card-text">
                Trauma therapy sessions combine EMDR with body-based approaches,
                helping you process painful experiences at a pace that feels safe.
                We focus on safety, stabilization, and helping your nervous system
                feel regulated without becoming overwhelmed.
              </p>
              <a href="#contact" className="underline-link">
                Learn More
              </a>
            </div>
          </div>

          {/* Bottom row: empty col + 2 cards */}
          <div className="specialties-bottom">
            <div>{/* Empty column to align with heading above */}</div>

            <div className="specialty-card">
              <h3 className="specialty-card-title">Burnout &amp; Perfectionism Support</h3>
              <p className="specialty-card-text">
                If burnout and perfectionism have left you exhausted, this work
                helps you rebuild healthy boundaries and reconnect with what
                matters. We support entrepreneurs, creatives, and professionals
                trading relentless pressure for sustainable clarity and balance.
              </p>
              <a href="#contact" className="underline-link">
                Learn More
              </a>
            </div>

            <div className="specialty-card">
              <h3 className="specialty-card-title">Somatic &amp; Nervous System Grounding</h3>
              <p className="specialty-card-text">
                Body-oriented techniques to help clients understand both the
                emotional and physiological sides of what they&rsquo;re experiencing.
                Release physical tension, settle an overactive nervous system, and
                cultivate lasting inner calm.
              </p>
              <a href="#contact" className="underline-link">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR OFFICE SECTION ===== */}
      <section id="our-office" className="office-section">
        <div className="office-inner">
          <div className="office-header">
            <p className="uppercase-label office-label">Our Practice Space</p>
            <h2 className="office-heading">
              A Calm Space for <span className="script-text">Healing</span>
            </h2>
            <p className="office-description">
              Step away from the rush of daily life into a quiet, private Santa Monica sanctuary. Designed with abundant natural light, comfortable seating, and an uncluttered aesthetic, our office provides a grounded, confidential space where you can exhale, reflect, and do meaningful therapeutic work.
            </p>
          </div>

          <div className="office-gallery">
            <div className="office-gallery-main">
              <Image
                src="/images/office1.jpeg"
                alt="Dr. Maya Reynolds serene Santa Monica therapy office with natural light and comfortable seating"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
            <div className="office-gallery-side">
              <Image
                src="/images/office2.jpeg"
                alt="Intimate, warm consultation area with thoughtful grounding decor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="office-details">
            <div className="office-detail-item">
              <h3 className="office-detail-title">Santa Monica Sanctuary</h3>
              <p className="office-detail-text">
                Conveniently located at 123th Street 45 W in Santa Monica, CA, with accessible parking and complete confidentiality from the moment you step through the door.
              </p>
            </div>

            <div className="office-detail-item">
              <h3 className="office-detail-title">In-Person &amp; Telehealth</h3>
              <p className="office-detail-text">
                Whether you prefer quiet face-to-face sessions in our Santa Monica office or the convenience of secure HIPAA-compliant telehealth throughout California, care adapts to your needs.
              </p>
            </div>

            <div className="office-detail-item">
              <h3 className="office-detail-title">Grounded in Comfort &amp; Safety</h3>
              <p className="office-detail-text">
                Every detail of our space is curated to support nervous system regulation—soft lighting, organic textures, and peaceful privacy to help you feel safe and supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQS SECTION ===== */}
      <section id="faqs" className="faqs-section">
        <div className="faqs-inner">
          <h2 className="faqs-heading">
            Frequently Asked <span className="script-text">questions</span>
          </h2>

          <div className="faqs-list">
            {[
              {
                q: "Do you offer in-person sessions or telehealth?",
                a: "I offer both in-person therapy from my private Santa Monica office (located at 123th Street 45 W) and secure, HIPAA-compliant telehealth sessions for clients located across California. My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.",
              },
              {
                q: "Who do you typically work with?",
                a: "Many of the people I work with are high-achieving, thoughtful, and self-aware adults—frequently entrepreneurs, creatives, or professionals—who feel “functional” on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong.",
              },
              {
                q: "What therapeutic modalities do you integrate?",
                a: "I take a warm, collaborative, and grounded approach. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented somatic techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.",
              },
              {
                q: "How do you approach trauma and EMDR work?",
                a: "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.",
              },
              {
                q: "How does therapy help with burnout and perfectionism?",
                a: "Many professionals feel disconnected from themselves after years of pushing through stress. Therapy becomes a space to slow down, reconnect, and develop more sustainable ways of living and working by dismantling high internal pressure and building healthy boundaries.",
              },
              {
                q: "How do I schedule an initial consultation?",
                a: "You can schedule an appointment by calling 310.555.0199 or sending an email to contact@drmayareynolds.com. We will arrange a consultation to discuss what brings you to therapy and ensure my approach is a supportive fit for your goals.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${activeFaq === idx ? "active" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                {activeFaq === idx && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA / SCHEDULE SECTION ===== */}
      <section id="contact" className="cta-section">
        <div className="cta-inner">
          <div className="cta-image-left">
            <Image
              src="/images/office2.jpeg"
              alt="Santa Monica Therapy Office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0vw, 25vw"
            />
          </div>

          <div className="cta-content">
            <p className="uppercase-label cta-label">Schedule an Appointment</p>

            <h2 className="cta-heading">
              Find a therapist who is the right fit for{" "}
              <span className="script-text">you</span>.
            </h2>

            <p className="cta-text">
              Coming to therapy is a courageous decision, and connecting with the
              right kind of therapist makes all the difference. I understand
              that your journey is personal, and I&rsquo;m here to support you
              with care and understanding every step of the way.
            </p>

            <p className="cta-text">
              Click the button below to schedule a complimentary 15-minute consultation.
            </p>

            <div className="cta-button-wrapper">
              <a href="mailto:contact@drmayareynolds.com?subject=Consultation%20Request%20-%20Dr.%20Maya%20Reynolds" className="pill-button">
                Book Now
              </a>
            </div>
          </div>

          <div className="cta-image-right">
            <Image
              src="/images/dr-maya-reynolds.png"
              alt="Dr. Maya Reynolds, PsyD"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 0vw, 25vw"
            />
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="site-footer">
        <div className="footer-inner">
          {/* Col 1: Logo + Blurb */}
          <div>
            <div className="footer-logo-title">Dr. Maya Reynolds, PsyD</div>
            <div className="footer-logo-subtitle">Licensed Clinical Psychologist</div>
            <p className="footer-blurb">
              I want to make getting started simple. You&rsquo;re welcome to
              come into my office in Santa Monica or schedule virtual
              appointments from anywhere in California&mdash;whatever works best for you.
            </p>
          </div>

          {/* Col 2: Navigate */}
          <div>
            <h3 className="footer-col-title">Navigate</h3>
            <ul className="footer-col-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#who-we-help">Who We Help</a>
              </li>
              <li>
                <a href="#specialties">Specialties</a>
              </li>
              <li>
                <a href="#our-office">Our Office</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialties */}
          <div>
            <h3 className="footer-col-title">Specialties</h3>
            <ul className="footer-col-list">
              <li>
                <a href="#specialties">Anxiety Therapy</a>
              </li>
              <li>
                <a href="#specialties">Trauma &amp; EMDR</a>
              </li>
              <li>
                <a href="#specialties">Burnout &amp; Perfectionism</a>
              </li>
              <li>
                <a href="#specialties">Somatic Grounding</a>
              </li>
              <li>
                <a href="#specialties">California Telehealth</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="footer-col-title">Contact</h3>
            <p className="footer-contact-text">
              123th Street 45 W
              <br />
              Santa Monica, CA 90401
            </p>
            <p className="footer-contact-text">
              <a href="mailto:contact@drmayareynolds.com">
                contact@drmayareynolds.com
              </a>
              <br />
              <a href="tel:3105550199">310.555.0199</a>
            </p>
            <p className="footer-contact-text">
              Serving Santa Monica, West Los Angeles, &amp; Across California via Telehealth
            </p>
          </div>
        </div>
      </footer>

      {/* ===== FOOTER BOTTOM BAR ===== */}
      <div className="footer-bar">
        <div className="footer-bar-inner">
          <a href="/terms">Terms</a>
          <span className="footer-bar-separator">|</span>
          <a href="/privacy-policy">Privacy Policy</a>
          <span className="footer-bar-separator">|</span>
          <a href="/disclaimer">Disclaimer</a>
          <span className="footer-bar-separator">|</span>
          <span>Dr. Maya Reynolds, PsyD • Santa Monica, CA</span>
        </div>
      </div>
    </main>);
}