
export default function Hero() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu")
    menuSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative bg-gradient-to-b from-black to-gray-900 py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black text-yellow-400 mb-4 text-balance">Taste the Golden Bite</h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 text-balance">
          Experience culinary excellence with every bite
        </p>
        <button
          onClick={scrollToMenu}
          className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition text-lg"
        >
          View Menu
        </button>
      </div>
    </section>
  )
}
