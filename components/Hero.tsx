export default function Hero() {
  return (
    <section className="bg-white rounded-xl p-8 flex flex-col md:flex-row items-center gap-6">
      <div>
        <h2 className="text-3xl font-bold mb-3">
          Produtos baratos que realmente valem a pena
        </h2>
        <p className="text-gray-600 mb-4">
          Testes e dicas práticas para gastar menos e comprar certo.
        </p>
        <button className="bg-green-700 text-white px-5 py-2 rounded-md">
          Saiba mais
        </button>
      </div>
    </section>
  )
}