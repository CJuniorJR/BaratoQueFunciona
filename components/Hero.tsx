export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-10 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-black">
        
        {/* Texto */}
        <div>
          <h1 className="text-4xl font-extrabold leading-tight">
            Produtos Baratos Que <br /> Realmente Valem a Pena
          </h1>

          <p className="text-gray-600 mb-6">
            Testes e dicas práticas para gastar menos e comprar certo.
          </p>

          {/* <button className="bg-green-700 hover:bg-green-800 transition text-white px-6 py-3 rounded-md font-medium">
            Saiba mais
          </button> */}
        </div>

        {/* Imagem */}
        <div className="hidden md:flex justify-end">
          <img
            src="/images/hero.png"
            alt="Produtos baratos"
            className="w-full h-56 object-cover object-center rounded-t-xl"
          />
        </div>
      </div>
    </section>
  )
}