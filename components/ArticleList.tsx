import { articles } from "@/data/articles/fitness/articles"

export default function ArticleList() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">
        Últimos Artigos
      </h2>

      <div className="space-y-6">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="bg-white rounded-xl p-4 flex gap-4"
          >
            <img
              // src={article.image}
              alt={article.title}
              className="w-32 h-24 object-cover rounded-lg"
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
        ))}
      </div>
    </section>
  )
}