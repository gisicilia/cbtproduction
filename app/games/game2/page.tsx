import Link from 'next/link';

export default function Game2() {
  return (
    <div className="min-h-screen pixel-art-bg">
      {/* Header Banner */}
      <section className="relative py-16 pixel-header mt-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-pixel mb-4 pixel-title">
            Game Title 2
          </h1>
          <div className="w-24 h-2 bg-pixel-lime mx-auto mb-8 pixel-divider"></div>
        </div>
      </section>

      {/* Game Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="pixel-game-showcase">
              <div className="pixel-art-frame">
                <div className="w-full h-96 bg-gradient-to-br from-pixel-green to-pixel-cyan rounded-md relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="pixel-character game2 scale-150"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pixel-card-about">
              <h2 className="text-3xl font-pixel mb-6 text-pixel-cyan">Action-Packed Platformer</h2>
              <p className="mb-4 text-lg">
                Game Title 2 is an exciting platformer that combines fast-paced action with unique mechanics
                that will test your reflexes and timing.
              </p>
              <p className="mb-4 text-lg">
                Jump, dash, and battle your way through challenging levels with increasing difficulty.
              </p>
              <p className="mb-6 text-lg">
                With colorful environments and responsive controls, this game delivers a satisfying platforming experience.
              </p>
              <div className="mt-8">
                <Link href="/games" className="pixel-button-new mr-4">Back to Games</Link>
                <a href="#" className="pixel-button-alt">Play Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section className="py-16 pixel-section-alt">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-pixel text-center mb-12 text-pixel-yellow">Game Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pixel-feature-card">
              <div className="pixel-icon speed"></div>
              <h3 className="text-xl font-pixel mt-4 mb-2">Fast-Paced Action</h3>
              <p>Test your reflexes with quick movements and split-second decisions.</p>
            </div>
            <div className="pixel-feature-card">
              <div className="pixel-icon levels"></div>
              <h3 className="text-xl font-pixel mt-4 mb-2">Challenging Levels</h3>
              <p>Progress through increasingly difficult stages with unique obstacles.</p>
            </div>
            <div className="pixel-feature-card">
              <div className="pixel-icon powerups"></div>
              <h3 className="text-xl font-pixel mt-4 mb-2">Power-Ups</h3>
              <p>Collect special items that grant temporary abilities and advantages.</p>
            </div>
          </div>
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