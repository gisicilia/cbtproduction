import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen pixel-art-bg flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-pixel mb-12 pixel-title animate-pulse">
          CBTproduction
        </h1>
        <p className="text-xl md:text-2xl mb-16">
          Creating Unique Gaming Experiences
        </p>
        <Link href="/games" className="pixel-button-new text-xl px-10 py-4">
          ENTRA
        </Link>
      </div>
      
      {/* Pixel Art Footer */}
      <footer className="pixel-footer absolute bottom-0 left-0 right-0">
        <div className="container mx-auto px-6 py-4">
          <div className="pixel-footer-border"></div>
          <div className="text-center mt-4">
            <p className="text-pixel-cyan">© 2025 CBTproduction. All rights reserved.</p>
            <p className="mt-2 text-sm">Crafted with ♥ and pixels</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
