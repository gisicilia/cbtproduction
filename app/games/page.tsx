import Link from 'next/link';

export default function Games() {
  return (
    <div className="min-h-screen pixel-art-bg">
      {/* Header Banner */}
      <section className="relative py-16 pixel-header mt-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-pixel mb-4 pixel-title">
            Our Games
          </h1>
          <div className="w-24 h-2 bg-pixel-lime mx-auto mb-8 pixel-divider"></div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Game 1 */}
            <Link href="/games/game1" className="block">
              <div className="pixel-game-card hover:transform hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-pixel-blue to-pixel-purple rounded-t-md relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="pixel-character game1"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-pixel mb-2 text-pixel-yellow">Game Title 1</h3>
                  <p>A thrilling adventure game that takes you through mysterious worlds.</p>
                </div>
              </div>
            </Link>

            {/* Game 2 */}
            <Link href="/games/game2" className="block">
              <div className="pixel-game-card hover:transform hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-pixel-green to-pixel-cyan rounded-t-md relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="pixel-character game2"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-pixel mb-2 text-pixel-yellow">Game Title 2</h3>
                  <p>An action-packed platformer with unique mechanics.</p>
                </div>
              </div>
            </Link>

            {/* Game 3 */}
            <Link href="/games/game3" className="block">
              <div className="pixel-game-card hover:transform hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-neon-pink to-pixel-magenta rounded-t-md relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="pixel-character game3"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-pixel mb-2 text-pixel-yellow">Game Title 3</h3>
                  <p>A puzzle game that challenges your mind.</p>
                </div>
              </div>
            </Link>
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