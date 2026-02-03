import ContactForm from './components/ContactForm'
import Category from './components/Home/Category'
import Hero from './components/Home/Hero'
import Pricing from './components/Home/Pricing'
import Project from './components/Home/Project'
import Records from './components/Home/Records'
import Review from './components/Home/Review'
import Specialize from './components/Home/Specialize'

export default function Home() {
  return (
    <main className="container pt-20 pb-20">
      <div className="mx-auto max-w-6xl">
        <Hero />
        <div className="h-1" />
        <Project />
        <div className="h-1" />
        <Records />
        <div className="h-1" />
        <Specialize />
        <div className="h-1" />
        <ContactForm />
      </div>
    </main>
  )
}
