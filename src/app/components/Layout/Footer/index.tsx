'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {

  return (
    <footer className="border-t">
      <div className="container py-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <div className="flex flex-col items-start -ml-10">
              <Link href='/'>
                <Image
                  src='/images/brand/logo.png'
                  alt='Cabij & co'
                  width={140}
                  height={140}
                  className='h-auto'
                />
              </Link>
              <p className="text-sm opacity-70 max-w-xs -mt-10">
                Restaurant consulting for menu clarity, operational systems, and practical automation.
              </p>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Navigation</div>
            <ul className="mt-3 space-y-2 text-sm opacity-80">
              <li><a className="hover:underline" href="/">Home</a></li>
              <li><a className="hover:underline" href="/services">Services</a></li>
              <li><a className="hover:underline" href="/work">Work</a></li>
              <li><a className="hover:underline" href="/about">About</a></li>
              <li><a className="hover:underline" href="/#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Contact</div>
            <ul className="mt-3 space-y-2 text-sm opacity-80">
              <li>
                <a className="hover:underline" href="/#contact">
                  Use the contact form →
                </a>
              </li>

              <li className="pt-2 text-xs opacity-70">
                <div className="font-medium">Registered office</div>
                <a
                  className="hover:underline"
                  href="https://www.google.com/maps/search/?api=1&query=86-90+Paul+Street+London+EC2A+4NE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  86–90 Paul Street, London, England, EC2A 4NE
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-xs opacity-60">
          © {new Date().getFullYear()} Cabij &amp; Co. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
