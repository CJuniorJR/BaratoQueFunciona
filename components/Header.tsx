export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">
          BARATO<span className="text-gray-700">QUEFUNCIONA</span>
        </h1>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#">Fitness</a>
          <a href="#">Casa</a>
          <a href="#">Carros</a>
          <a href="#">Reviews</a>
        </nav>
      </div>
    </header>
  )
}