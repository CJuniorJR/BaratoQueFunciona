import Hero from "@/components/Hero"
import CategoryGrid from "@/components/CategoryGrid"
import ArticleList from "@/components/ArticleList"
import ProductSidebar from "@/components/ProductSideBar"

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