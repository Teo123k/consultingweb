import Image from 'next/image'

type WorkItem = {
  img: string
  title: string
  desc: string
}

function WorkGallery({ items }: { items: WorkItem[] }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <div key={i} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
            <Image
              src={p.img}
              alt={p.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority={i === 0}
            />
          </div>

          <div className="p-5">
            <div className="font-semibold text-neutral-900 dark:text-white">{p.title}</div>
            <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{p.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function WorkPage() {
  // ✅ IMPORTANT:
  // These paths MUST match real files inside /public exactly (including extension).
  const streetFood: WorkItem[] = [
    {
      img: '/images/work/streetfood/street-01.jpg',
      title: 'High-volume street food service',
      desc: 'Built for speed, consistency, and strong sales performance.',
    },
    {
      img: '/images/work/streetfood/street-02.jpg',
      title: 'Pop-ups & venue operations',
      desc: 'Systems that work under pressure and tight timelines.',
    },
    {
      img: '/images/work/streetfood/street-03.jpg',
      title: 'Festival-ready menus',
      desc: 'Fast service menus designed for throughput and quality.',
    },
  ]

  const vienna: WorkItem[] = [
    {
      img: '/images/work/vienna/vienna-01.jpg',
      title: 'Korean concept menu development',
      desc: 'Modern Korean dining with concept clarity and execution consistency.',
    },
    {
      img: '/images/work/vienna/vienna-02.jpg',
      title: 'Menu structure & flow',
      desc: 'Balanced dishes, kitchen-friendly prep, and repeatable execution.',
    },
    {
      img: '/images/work/vienna/vienna-03.jpg',
      title: 'Experience-led dining',
      desc: 'A concept built around food identity and pairing-driven dining.',
    },
  ]

  const touring: WorkItem[] = [
    {
      img: '/images/work/touring/tour-01.jpg',
      title: 'Tour catering operations',
      desc: 'Korean buffet-style catering delivered across multiple countries.',
    },
    {
      img: '/images/work/touring/tour-02.jpg',
      title: 'Logistics & consistency',
      desc: 'Planning, coordination, and consistency under changing conditions.',
    },
    {
      img: '/images/work/touring/tour-03.jpg',
      title: 'Large-scale prep & service',
      desc: 'Reliable food delivery for high-pressure touring schedules.',
    },
  ]

  return (
    <main className="container pt-60 pb-20">
      <h1 className="text-5xl font-bold text-neutral-900 dark:text-white">Work</h1>

      <p className="mt-6 max-w-3xl text-lg text-neutral-700 dark:text-neutral-300">
        A selection of my work across high-volume street food, restaurant concept development,
        and international touring catering — with a focus on systems that work in real kitchens.
      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          High-volume street food & festival operations (London)
        </h2>

        <p className="mt-3 max-w-3xl text-neutral-700 dark:text-neutral-300">
          I built and operated multiple street food concepts in London, focusing on speed, consistency,
          and systems that work under pressure.
        </p>

        <WorkGallery items={streetFood} />

        <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400">
          Selected archive from Instagram:{' '}
          <a
            href="https://www.instagram.com/anju_restaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-900 dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 underline transition-colors"
          >
            @anju_restaurant
          </a>
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Restaurant concept & menu development (Vienna)</h2>

        <p className="mt-3 max-w-3xl text-neutral-700 dark:text-neutral-300">
          I developed and operated a restaurant concept in Vienna focused on modern Korean cuisine
          paired with natural wines.
        </p>

        <WorkGallery items={vienna} />

        <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400">
          Restaurant concept archive:{' '}
          <a
            href="https://www.instagram.com/halmi1080"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-900 dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 underline transition-colors"
          >
            @halmi1080
          </a>
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Touring & international catering operations (K-pop)</h2>

        <p className="mt-3 max-w-3xl text-neutral-700 dark:text-neutral-300">
          I worked as a catering chef and organiser for international tours, delivering Korean buffet-style catering
          across multiple countries. This work was delivered as part of touring operations and managed personally, without a public-facing brand.
        </p>

        <WorkGallery items={touring} />
      </section>
    </main>
  )
}
