import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header cartCount={0} onCartClick={() => {}} onCategoriesClick={() => {}} />
      <main className="container mx-auto">
        <h1 className="text-3xl font-bold my-4">Café Magnolia</h1>
      </main>
    </>
  )
}