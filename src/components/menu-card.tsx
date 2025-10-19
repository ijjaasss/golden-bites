


interface MenuItem {
  id: number
  category: string
  name: string
  type: string
  price: string
  description: string
  image: string
}

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex gap-4 p-4 border-b border-gray-700 hover:bg-gray-900/50 transition">
      {/* Image on the left */}
      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-800">
        <img
          src={item.image || "/placeholder.svg?height=96&width=96&query=food"}
          alt={item.name}
         
          className="object-cover"
        />
      </div>

      {/* Content on the right */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-1">{item.name}</h3>
          <p className="text-sm text-gray-400">{item.description}</p>
        </div>
        <div className="flex justify-between items-center">
          <span
            className={`text-xs font-bold px-2 py-1 rounded ${
              item.type === "Veg" ? "bg-green-900 text-green-300" : "bg-red-900 text-red-300"
            }`}
          >
            {item.type}
          </span>
          <span className="text-lg font-bold text-yellow-400">{item.price}</span>
        </div>
      </div>
    </div>
  )
}
