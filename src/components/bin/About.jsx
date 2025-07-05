
import "./About.css";

const About = () => {
  return (
    <div className="About theme-section-padding">
      <div className="sectionRow">
        <div className="sectionCol">
          <h2>Mancherial Interior Design Studio</h2>
          <p>
            Welcome to Mancherial Interiors, your trusted interior design partner in Mancherial, Telangana. With a passion for aesthetic excellence and a deep understanding of functionality, we specialize in creating spaces that reflect your personality, lifestyle, and vision.
          </p>
          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-icon">🏠</span>
              <span>Residential Design</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏢</span>
              <span>Commercial Spaces</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <span>Luxury Interiors</span>
            </div>
          </div>
          <div className="actionControllers">
            <button className="btn-secondary bg-theme text-white">Explore Now</button>
          </div>
        </div>
        <div className="sectionCol">
          <p>
        With years of experience and a network of skilled local craftsmen, we ensure high-quality finishes, timely project delivery, and complete client satisfaction.

At UrbanNest, we don’t just decorate spaces—we design experiences.
          </p>
          <div className="stats-container">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved Image Section */}
      {/* <div className="curved-image-container">
        <div className="curved-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Beautiful interior design showcase" 
            className="curved-image"
          />
          <div className="image-overlay">
            <h3>Transform Your Space</h3>
            <p>Experience the perfect blend of comfort and style</p>
          </div>
        </div>
      </div> */}
      
      {/* Additional Content Section */}
      {/* <div className="additional-content">
        <div className="content-grid">
          <div className="content-card">
            <div className="card-icon">🎨</div>
            <h4>Creative Design</h4>
            <p>Our innovative approach ensures each space tells a unique story while maintaining functionality.</p>
          </div>
          <div className="content-card">
            <div className="card-icon">🔧</div>
            <h4>Expert Execution</h4>
            <p>Professional installation and project management from concept to completion.</p>
          </div>
          <div className="content-card">
            <div className="card-icon">💡</div>
            <h4>Smart Solutions</h4>
            <p>Integrating modern technology with timeless design for intelligent living spaces.</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
