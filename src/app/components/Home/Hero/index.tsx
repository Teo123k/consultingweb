'use client'

import Link from 'next/link'

const Hero = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          {/* Tagline */}
          <div className="mb-6 inline-block rounded-full bg-neutral-100 dark:bg-neutral-900 px-4 py-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Restaurant consulting & AI automation
            </p>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
            Restaurant consulting & AI automation
          </h1>

          {/* Description */}
          <p className="mt-8 text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            I help restaurants design better menus, improve daily operations, and implement practical AI automation — built from real kitchen experience.
          </p>

          {/* CTA Button */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/#contact">
              <button className="px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
                Book a consultation
              </button>
            </Link>
            <Link href="/services">
              <button className="px-8 py-3 border border-neutral-400 dark:border-neutral-600 text-neutral-900 dark:text-white font-semibold rounded-lg hover:border-neutral-600 dark:hover:border-neutral-400 transition-colors">
                Explore services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
