'use client'

import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="container pt-20 pb-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-neutral-900 dark:text-white">About Cabij & Co</h1>
          <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">
            Restaurant consulting grounded in real kitchen experience.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid gap-12 md:grid-cols-12">
          {/* Left: Text content */}
          <div className="md:col-span-7">
            {/* Who I am */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Who I Am</h2>
              <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                I'm Teo, founder of Cabij & Co. My work focuses on helping restaurants improve menus, streamline operations, and implement practical automation.
              </p>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                Everything I recommend comes from hands-on experience running kitchens under pressure—where small inefficiencies become real losses.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Experience</h2>
              <ul className="mt-4 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li>
                  <strong className="text-neutral-900 dark:text-white">London:</strong> Built and operated street food concepts across venues, pop-ups, and festivals.
                </li>
                <li>
                  <strong className="text-neutral-900 dark:text-white">Vienna:</strong> Developed a restaurant concept focused on Korean cuisine, menu structure, and operational systems.
                </li>
                <li>
                  <strong className="text-neutral-900 dark:text-white">International:</strong> Managed catering logistics for touring operations across multiple countries.
                </li>
              </ul>
            </section>

            {/* What I do */}
            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">What I Offer</h2>
              <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                Menu design that drives margins. Operations that actually work. Automation that teams use.
              </p>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                I don't apply generic frameworks. Every recommendation is shaped by how real kitchens operate.
              </p>
            </section>
          </div>

          {/* Right: Portrait */}
          <div className="md:col-span-5">
            <div className="sticky top-32">
              <div className="overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800">
                <Image
                  src="/images/about/teo.jpg"
                  alt="Teo, founder of Cabij & Co"
                  width={500}
                  height={667}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-8 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Let's work together</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            Whether it's menu clarity, operational systems, or automation, let's start with a conversation.
          </p>
          <p className="mt-4 font-medium">
            <a href="/#contact" className="text-neutral-900 dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 underline transition-colors">
              Start a conversation →
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
