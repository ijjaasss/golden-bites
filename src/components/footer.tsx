
export default function Footer() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-black border-t-2 border-yellow-400 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-yellow-400 font-bold">© Golden Bites 2025</p>
          <nav className="flex gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-yellow-400 hover:text-yellow-300 transition font-bold"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-yellow-400 hover:text-yellow-300 transition font-bold"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-yellow-400 hover:text-yellow-300 transition font-bold"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </footer>
  )
}
