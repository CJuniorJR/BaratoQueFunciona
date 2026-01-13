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
    <article className="max-w-3xl mx-auto px-4">

  {/* Categoria */}
  <span className="text-sm uppercase text-green-600 font-semibold">
    Fitness
  </span>

  {/* Título */}
  <h1 className="text-4xl font-bold mt-2 leading-tight">
    {article.title}
  </h1>

  {/* Subtítulo */}
  <p className="text-lg text-gray-600 mt-3">
    {article.subtitle}
  </p>

  {/* Imagem */}
  <div className="my-10 flex justify-center">
  <img
    src={article.image}
    alt={article.title}
    className="
      max-w-[200px]
    "
  />
</div>

  {/* Conteúdo */}
  <div className="prose prose-lg md:prose-xl max-w-none">
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