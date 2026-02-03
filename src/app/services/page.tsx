export default function ServicesPage() {
  return (
    <main className="container pt-20 pb-20">
      <h1 className="text-5xl font-bold">Services</h1>

      <p className="mt-6 max-w-2xl text-lg opacity-80">
        I help restaurants improve menus, streamline operations, and implement practical automation that saves time and reduces costs.
      </p>

      <p className="mt-4 max-w-2xl opacity-80">
        This work is best suited for independent restaurants, small groups,
        and food businesses that want clearer systems, better margins,
        and operations that actually work day to day.
      </p>

      <section className="mt-14 grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 hover:shadow-lg transition-shadow">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/20 dark:to-orange-800/10 flex items-center justify-center mb-6">
            <span className="text-xl">🍽️</span>
          </div>
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Menu design</h2>
          <ul className="mt-6 space-y-3">
            <li className="text-sm text-neutral-700 dark:text-neutral-300 flex gap-3">
              <span className="text-orange-500 font-semibold">→</span>
              Logical menu structure that drives sales
            </li>
            <li className="text-sm text-neutral-700 dark:text-neutral-300 flex gap-3">
              <span className="text-orange-500 font-semibold">→</span>
              Profitable margins without sacrificing quality
            </li>
            <li className="text-sm text-neutral-700 dark:text-neutral-300 flex gap-3">
              <span className="text-orange-500 font-semibold">→</span>
              Kitchens can actually execute it daily
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 hover:shadow-lg transition-shadow">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/10 flex items-center justify-center mb-6">
            <span className="text-xl">⚙️</span>
          </div>
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Operations</h2>
          <ul className="mt-6 space-y-3">
            <li className="text-sm text-neutral-700 dark:text-neutral-300 flex gap-3">
              <span className="text-blue-500 font-semibold">→</span>
              Clear workflows that reduce chaos and waste
            </li>
            <li className="text-sm text-neutral-700 dark:text-neutral-300 flex gap-3">
              <span className="text-blue-500 font-semibold">→</span>
              Staff systems and SOPs teams actually follow
            </li>
            <li className="text-sm text-neutral-700 dark:text-neutral-300 flex gap-3">
              <span className="text-blue-500 font-semibold">→</span>
              Consistency that builds customer loyalty
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 hover:shadow-lg transition-shadow">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-800/10 flex items-center justify-center mb-6">
            <span className="text-xl">⚡</span>
          </div>
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">AI automation</h2>
          <ul className="mt-6 space-y-3">
            <li className="text-sm text-neutral-700 dark:text-neutral-300 flex gap-3">
              <span className="text-purple-500 font-semibold">→</span>
              Recipe costing automation for instant margins
            </li>
            <li className="text-sm text-neutral-700 dark:text-neutral-300 flex gap-3">
              <span className="text-purple-500 font-semibold">→</span>
              Smart inventory & purchasing workflows
            </li>
            <li className="text-sm text-neutral-700 dark:text-neutral-300 flex gap-3">
              <span className="text-purple-500 font-semibold">→</span>
              Simple tools your team will actually use
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-16 -mx-4 px-4 py-12 bg-neutral-50 dark:bg-neutral-950/20">
        <div className="container">
          <h2 className="text-2xl font-semibold">How I work</h2>

          <ol className="mt-6 grid gap-4 md:grid-cols-2 opacity-80">
          <li className="rounded-xl border p-4">
            <strong>1. Understand the reality</strong>
            <p className="mt-1">
              Review menu, workflow, team structure, and daily constraints.
            </p>
          </li>

          <li className="rounded-xl border p-4">
            <strong>2. Identify bottlenecks</strong>
            <p className="mt-1">
              Find where time, money, or energy is being wasted.
            </p>
          </li>

          <li className="rounded-xl border p-4">
            <strong>3. Design practical solutions</strong>
            <p className="mt-1">
              Menu adjustments, workflow changes, or simple automation.
            </p>
          </li>

          <li className="rounded-xl border p-4">
            <strong>4. Support implementation</strong>
            <p className="mt-1">
              Ensure systems are usable by the team, not just on paper.
            </p>
          </li>
          </ol>
        </div>
      </section>

      <section className="mt-16 rounded-2xl border p-8">
        <h2 className="text-2xl font-semibold">Let's talk</h2>

        <p className="mt-3 max-w-2xl opacity-80">
          If you want to improve menu structure, operational clarity,
          or introduce automation into your restaurant,
          we can start with a simple conversation.
        </p>

        <p className="mt-4 font-medium">
          Contact me to discuss your situation.
        </p>
      </section>
    </main>
  )
}
