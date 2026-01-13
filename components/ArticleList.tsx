import { articles } from "@/data/articles/fitness/articles"

export default function ArticleList() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">
        Últimos Artigos
      </h2>

      <div className="space-y-6 text-green-700">
        {articles.map((article) => (
          <a href={`/fitness/${article.slug}`}>
            <article className="bg-white rounded-xl p-4 flex gap-4 hover:shadow-md transition">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover object-center rounded-t-xl"
              />

              <div>
                <h3 className="font-semibold text-lg">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {article.excerpt}
                </p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  )
}