import { notFound } from "next/navigation"
import { articles } from "@/data/articles/fitness/articles"
import ArticleList from "@/components/ArticleList"
import ProductSidebar from "@/components/ProductSideBar"


type Props = {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params

  const article = articles.find(a => a.slug === slug)

  if (!article) return notFound()

  return (
    <section>
    <article className="max-w-3xl mx-auto">
      <img
        src={article.image}
        alt={article.title}
        className="w-full rounded-xl mb-8"
      />

      <h1 className="text-4xl font-bold mb-4">
        {article.title}
      </h1>

      <p className="text-gray-600 mb-8">
        {article.excerpt}
      </p>

      <div className="prose prose-lg max-w-none">
            {article.content.split("\n").map((line, i) => {
                if (line.startsWith("## ")) {
                return <h2 key={i}>{line.replace("## ", "")}</h2>
                }

                if (line.startsWith("### ")) {
                return <h3 key={i}>{line.replace("### ", "")}</h3>
                }

                return <p key={i}>{line}</p>
            })}
        </div>
    </article>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        <div className="lg:col-span-2">
          <ArticleList />
        </div>

        <ProductSidebar />
    </div>

    </section>
  )
}