import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen pixel-art-bg">
      {/* Header Banner */}
      <section className="relative py-16 pixel-header">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-pixel mb-4 pixel-title">
            About CBTproduction
          </h1>
          <div className="w-24 h-2 bg-pixel-lime mx-auto mb-8 pixel-divider"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="pixel-card-about">
              <h2 className="text-3xl font-pixel mb-6 text-pixel-cyan">Our Story</h2>
              <p className="mb-4 text-lg">
                CBTproduction was born from a shared passion for creating unique gaming experiences 
                that blend retro aesthetics with modern gameplay mechanics.
              </p>
              <p className="mb-4 text-lg">
                Founded by a small team of indie developers, we focus on crafting games 
                with distinctive pixel art styles and engaging narratives.
              </p>
              <p className="text-lg">
                Our mission is to create memorable games that capture the charm of classic 
                pixel art while pushing the boundaries of what's possible in game design.
              </p>
            </div>
            <div className="pixel-art-container">
              <div className="pixel-art-frame">
                {/* Placeholder for pixel art image */}
                <div className="w-full h-64 bg-gradient-to-br from-pixel-blue to-pixel-magenta pixel-art-placeholder">
                  <div className="pixel-character"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 pixel-section-alt">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-pixel text-center mb-12 text-pixel-yellow">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="pixel-team-card">
              <div className="pixel-avatar bg-pixel-red"></div>
              <h3 className="text-xl font-pixel mt-4 mb-2">Pixel Master</h3>
              <p className="text-pixel-lime">Lead Artist</p>
              <p className="mt-3">Creates our distinctive pixel art style and character designs.</p>
            </div>
            {/* Team Member 2 */}
            <div className="pixel-team-card">
              <div className="pixel-avatar bg-pixel-blue"></div>
              <h3 className="text-xl font-pixel mt-4 mb-2">Code Wizard</h3>
              <p className="text-pixel-lime">Lead Developer</p>
              <p className="mt-3">Brings our game worlds to life with elegant code solutions.</p>
            </div>
            {/* Team Member 3 */}
            <div className="pixel-team-card">
              <div className="pixel-avatar bg-pixel-purple"></div>
              <h3 className="text-xl font-pixel mt-4 mb-2">Sound Crafter</h3>
              <p className="text-pixel-lime">Audio Designer</p>
              <p className="mt-3">Creates the retro-inspired soundtracks and effects for our games.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-pixel text-center mb-12 text-pixel-orange">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="pixel-value-card">
              <div className="pixel-icon creativity"></div>
              <h3 className="text-xl font-pixel mb-3">Creativity</h3>
              <p>We push boundaries and think outside the box in our game designs.</p>
            </div>
            <div className="pixel-value-card">
              <div className="pixel-icon quality"></div>
              <h3 className="text-xl font-pixel mb-3">Quality</h3>
              <p>We're committed to polished, bug-free experiences in every game we release.</p>
            </div>
            <div className="pixel-value-card">
              <div className="pixel-icon community"></div>
              <h3 className="text-xl font-pixel mb-3">Community</h3>
              <p>We value player feedback and build games with our community in mind.</p>
            </div>
            <div className="pixel-value-card">
              <div className="pixel-icon fun"></div>
              <h3 className="text-xl font-pixel mb-3">Fun</h3>
              <p>Above all, we believe games should be enjoyable and bring joy to players.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 pixel-cta-section">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-pixel mb-6">Join Our Adventure</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Want to collaborate or learn more about our upcoming projects? 
            We'd love to hear from you!
          </p>
          <a href="#contact" className="pixel-button-new">Contact Us</a>
        </div>
      </section>

      {/* Pixel Art Footer */}
      <footer className="pixel-footer">
        <div className="container mx-auto px-6 py-8">
          <div className="pixel-footer-border"></div>
          <div className="text-center mt-6">
            <p className="text-pixel-cyan">© 2025 CBTproduction. All rights reserved.</p>
            <p className="mt-2 text-sm">Crafted with ♥ and pixels</p>
          </div>
        </div>
      </footer>
    </div>
  );
}