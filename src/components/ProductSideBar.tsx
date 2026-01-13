import { products } from "@/src/data/products/fitness/products"

export default function ProductSidebar() {
  return (
    <aside className="bg-white rounded-xl p-4">
      <h3 className="font-semibold mb-4">Recomendamos</h3>

      <div className="space-y-4">
        {products.map(p => (
          <div key={p.name} className="border rounded-lg p-3">
            <p className="font-medium">{p.name}</p>
            <p className="text-green-700 font-bold">{p.price}</p>
            <a
              href={p.link}
              target="_blank"
              className="block mt-2 text-center bg-green-600 text-white py-1 rounded"
            >
              Ver no Mercado Livre
            </a>
          </div>
        ))}
      </div>
    </aside>
  )
}