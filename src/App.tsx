import About from "./components/about"
import Footer from "./components/footer"
import Header from "./components/header"
import Hero from "./components/hero"
import Menu from "./components/menu"


function App() {


  return (
    <>
      <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Footer />
    </div>
    </>
  )
}

export default App
