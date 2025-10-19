



export default function Header() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu")
    menuSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 bg-black border-b-2 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-zcQV8cGVwARR0yEyvj0gsgNHR6mu2k.png"
            alt="Golden Bites Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-yellow-400">Golden Bites</h1>
            <p className="text-xs text-yellow-400">Love at First Bite</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="#home" className="text-yellow-400 font-bold hover:text-yellow-300 transition">
            Home
          </a>
          <button onClick={scrollToMenu} className="text-yellow-400 font-bold hover:text-yellow-300 transition">
            Menu
          </button>
          <a href="#contact" className="text-yellow-400 font-bold hover:text-yellow-300 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
