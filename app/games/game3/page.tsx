import Link from 'next/link';

export default function Game3() {
  return (
    <div className="min-h-screen pixel-art-bg">
      {/* Header Banner */}
      <section className="relative py-16 pixel-header mt-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-pixel mb-4 pixel-title">
            Game Title 3
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
                <div className="w-full h-96 bg-gradient-to-br from-neon-pink to-pixel-magenta rounded-md relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="pixel-character game3 scale-150"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pixel-card-about">
              <h2 className="text-3xl font-pixel mb-6 text-pixel-cyan">Mind-Bending Puzzles</h2>
              <p className="mb-4 text-lg">
                Game Title 3 is an innovative puzzle game that challenges your problem-solving skills
                with increasingly complex and creative puzzles.
              </p>
              <p className="mb-4 text-lg">
                Each level introduces new mechanics and concepts that build upon previous challenges.
              </p>
              <p className="mb-6 text-lg">
                With a relaxing atmosphere and brain-teasing puzzles, this game offers a perfect balance of challenge and satisfaction.
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
              <div className="pixel-icon brain"></div>
              <h3 className="text-xl font-pixel mt-4 mb-2">Brain Teasers</h3>
              <p>Challenge your mind with increasingly complex puzzles and riddles.</p>
            </div>
            <div className="pixel-feature-card">
              <div className="pixel-icon mechanics"></div>
              <h3 className="text-xl font-pixel mt-4 mb-2">Unique Mechanics</h3>
              <p>Discover new puzzle mechanics that evolve as you progress through the game.</p>
            </div>
            <div className="pixel-feature-card">
              <div className="pixel-icon atmosphere"></div>
              <h3 className="text-xl font-pixel mt-4 mb-2">Relaxing Atmosphere</h3>
              <p>Enjoy a calming environment with soothing visuals and ambient soundtrack.</p>
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