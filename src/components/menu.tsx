
import { useState, useEffect } from "react"
import MenuCard from "./menu-card"

interface MenuItem {
  id: number
  category: string
  name: string
  type: string
  price: string
  description: string
  image: string
}

export default function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    // Fetch menu data from JSON
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data)
        const uniqueCategories = ["All", ...new Set(data.map((item: MenuItem) => item.category))]
        setCategories(uniqueCategories as string[])
      })
  }, [])

  const filteredItems =
    selectedCategory === "All" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="menu" className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-12 text-center text-balance">Our Menu</h2>

        <div className="flex gap-3 mb-12 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-3 flex-nowrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-bold transition whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === category
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col divide-y divide-gray-700 bg-gray-950 rounded-lg overflow-hidden">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
