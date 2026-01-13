import { categories } from "@/data/categories/fitness/categories"

export default function CategoryGrid() {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-black">
        {categories.map((cat) => (
          <a
            key={cat.slug}
            href={cat.link}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-56 object-cover object-center rounded-t-xl"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">
                {cat.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}