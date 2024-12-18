import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero-section" data-testid="hero-section">
        <div className="hero-content">
          <h1>Make a Difference with IKSHANA CHARITABLE TRUST</h1>
          <p>
            Empowering communities with education, healthcare, and support to
            build a brighter future.
          </p>
          <div className="cta-buttons">
            <Link to="/about" className="btn" data-testid="learn-more-btn">
              Learn More About Us
            </Link>
            <Link to="/donate" className="btn" data-testid="donate-now-btn">
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section" data-testid="stats-section">
        <h2>Our Impact</h2>
        <div className="stats">
          <div className="stat">
            <h3>500+</h3>
            <p>Children Educated</p>
          </div>
          <div className="stat">
            <h3>2000+</h3>
            <p>Meals Served</p>
          </div>
          <div className="stat">
            <h3>150+</h3>
            <p>Volunteers Worldwide</p>
          </div>
        </div>
      </section>

      <section className="projects-section" data-testid="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects">
          <div className="project">
            <h3>Project One</h3>
            <p>Helping children with education in rural areas.</p>
            <Link to="/about" className="btn" data-testid="view-project-one">
              View Project
            </Link>
          </div>
          <div className="project">
            <h3>Project Two</h3>
            <p>Providing free healthcare to communities in need.</p>
            <Link to="/about" className="btn" data-testid="view-project-two">
              View Project
            </Link>
          </div>
        </div>
      </section>

      <section className="volunteer-section" data-testid="volunteer-section">
        <h2>Get Involved</h2>
        <p>
          Join our community of passionate volunteers to make a lasting impact
          on society.
        </p>
        <Link to="/get-involved" className="btn" data-testid="volunteer-btn">
          Become a Volunteer
        </Link>
      </section>

      <section
        className="testimonials-section"
        data-testid="testimonials-section"
      >
        <h2>What People Are Saying</h2>
        <div className="testimonials">
          <blockquote>
            "IKSHANA Trust has truly transformed my community with its efforts
            in education."
          </blockquote>
          <p>- John Doe, Volunteer</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
