import { useMemo, useState } from "react";

export default function App() {
  const images = useMemo(
    () => [
      "/Shady and Leo 1.webp",
      "/Shady and Leo 2.jpeg",
      "/Shady and Leo 3.jpeg",
      "/Shady and Leo 4.jpeg",
      "/Shady and Leo 5.jpeg",
    ],
    []
  );

  const donationLinks = {
    venmo: "https://venmo.com/your-venmo-handle",
    zelle: "mailto:yourzelle@email.com?subject=Support%20for%20Leo",
    gofundme:
      "https://www.gofundme.com/f/support-little-leo-after-the-loss-of-his-mother",
  };

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [animating, setAnimating] = useState(false);

  const goTo = (nextIndex) => {
    if (nextIndex === current || animating) return;
    setDirection(nextIndex > current ? 1 : -1);
    setAnimating(true);
    setCurrent(nextIndex);
    window.setTimeout(() => setAnimating(false), 420);
  };

  const next = () => {
    if (animating) return;
    setDirection(1);
    setAnimating(true);
    setCurrent((prev) => (prev + 1) % images.length);
    window.setTimeout(() => setAnimating(false), 420);
  };

  const prev = () => {
    if (animating) return;
    setDirection(-1);
    setAnimating(true);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    window.setTimeout(() => setAnimating(false), 420);
  };

  return (
    <div className="page-shell">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />
      <div className="background-glow glow-three" />

      <main className="page">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">Supporting Leo and his family</div>
            <h1>Support Little Leo After the Loss of His Mother</h1>

            <div className="hero-text">
              <p>
                At just 4 years old, Leo has experienced a heartbreaking loss
                after the passing of his mother, Shady. This page was created
                to help support Leo and his family during this incredibly
                difficult time.
              </p>
              <p>
                Shady was the kind of person who truly lived life to the fullest,
                embracing every moment with energy, love, and a deep appreciation
                for adventure.
              </p>
              <p>
                Together with her wife, Giselle, she built a beautiful life
                centered around family, joy, and exploration. Whether it was
                traveling, discovering new places, or simply making everyday
                moments special, Shady and Giselle made sure Leo’s world was
                filled with love, laughter, and unforgettable experiences.
              </p>
              <p>
                Now, as Leo and Giselle navigate this heartbreaking loss, we are
                coming together to help ease the financial burden of daily living
                expenses, childcare, and future needs, allowing Giselle to focus
                on providing stability, love, and care for Leo as he grows.
              </p>
              <p>
                Any contribution, big or small, will make a meaningful difference
                in Leo’s life and help honor Shady’s legacy of love and
                adventure. If you are unable to donate, sharing this page and
                keeping Leo and Giselle in your thoughts means just as much.
              </p>
            </div>

            <div className="button-row">
              <a className="button button-primary" href={donationLinks.venmo}>
                Donate by Venmo
              </a>
              <a className="button button-secondary" href={donationLinks.zelle}>
                Donate by Zelle
              </a>
            </div>

            <p className="donation-note">
              Venmo and Zelle are listed first so more of every gift can go
              directly to the family.
            </p>
          </div>

          <div className="hero-media">
            <div className="carousel-card">
              <div className="carousel-window">
                {images.map((src, index) => {
                  const isActive = index === current;
                  const isBefore = direction === 1;
                  const classes = [
                    "slide",
                    isActive ? "slide-active" : "slide-inactive",
                    animating && isActive ? (direction === 1 ? "slide-enter-right" : "slide-enter-left") : "",
                  ]
                    .filter(Boolean)
                    .join(" ");

                  return (
                    <img
                      key={src}
                      src={src}
                      alt={`Shady and Leo photo ${index + 1}`}
                      className={classes}
                      draggable="false"
                    />
                  );
                })}
              </div>

              <button className="carousel-arrow left" onClick={prev} aria-label="Previous photo">
                ‹
              </button>
              <button className="carousel-arrow right" onClick={next} aria-label="Next photo">
                ›
              </button>

              <div className="carousel-dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={index === current ? "dot dot-active" : "dot"}
                    aria-label={`Go to photo ${index + 1}`}
                    onClick={() => goTo(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="info-grid">
          <article className="info-card">
            <h3>Why this page was created</h3>
            <p>
              This page was made to give friends and family a simple way to
              support Leo and Giselle directly, with the most direct donation
              methods placed first.
            </p>
          </article>
          <article className="info-card">
            <h3>What donations will help with</h3>
            <p>
              Donations will help with funeral expenses, childcare, monthly
              living costs, and future needs as Leo and Giselle move through
              this difficult year and beyond.
            </p>
          </article>
          <article className="info-card">
            <h3>A lasting way to honor Shady</h3>
            <p>
              Supporting Leo is also a way to carry forward the love,
              generosity, and adventurous spirit that Shady brought into the
              lives of the people around her.
            </p>
          </article>
        </section>

        <section className="gofundme-section">
          <div className="gofundme-copy">
            <p className="section-kicker">Also available</p>
            <h2>Donate through GoFundMe</h2>
            <p>
              A GoFundMe is also available for those who prefer using a
              fundraising platform. The fundraiser shares more of Leo’s story
              and the support needed for Leo’s care and stability moving
              forward.
            </p>
            <p>
              Leo will be turning 5 on May 16, and the collection is intended
              to remain ongoing through the year as friends, family, and the
              wider community come together around him.
            </p>
          </div>

          <a className="button button-light" href={donationLinks.gofundme}>
            Open GoFundMe
          </a>
        </section>

        <footer className="footer">
          Built in loving memory of Shady, with support centered on Leo and Giselle.
        </footer>
      </main>
    </div>
  );
}
