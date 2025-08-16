import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { Testimonials } from "@/components/testimonials"
import { OrderForm } from "@/components/order-form"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">
        {" "}
        {/* Add padding for fixed header */}
        <Hero />
        <MenuSection />
        <Testimonials />
        <OrderForm />
        <About />
      </div>
      <Footer />
    </main>
  )
}
