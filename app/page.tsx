import Hero from "@/src/components/Hero"
import CategoryGrid from "@/src/components/CategoryGrid"
import ArticleList from "@/src/components/ArticleList"
import ProductSidebar from "@/src/components/ProductSidebar"

export default function Home() {
  return (
    <>
      <Hero />

      <CategoryGrid />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        <div className="lg:col-span-2">
          <ArticleList />
        </div>

        <ProductSidebar />
      </div>
    </>
  )
}