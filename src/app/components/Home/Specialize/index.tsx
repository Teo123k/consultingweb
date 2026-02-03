'use client'

import { SpecializeType } from '@/app/types/specialize'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import SpecializeSkeleton from '../../Skeleton/Specialize'

const Specialize = () => {
  const [specialization, setSpecialization] = useState<SpecializeType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setSpecialization(data.SpecializeData)
      } catch (error) {
        console.error('Error fetching service', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='expertise' className='scroll-mt-12 mt-12 -mx-4 px-4 py-12 bg-neutral-50 dark:bg-neutral-950/20'>
      <div className='container'>
        <div className='text-center mb-8'>
          <h2 className='text-4xl font-semibold mb-6'>What I offer</h2>
          <p className='text-lg font-normal max-w-2xl mx-auto'>
            Three core areas of restaurant consulting, grounded in real kitchen experience.
          </p>
        </div>
        {/*  */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <SpecializeSkeleton key={i} />
              ))
            : specialization.map((item, i) => (
                <div key={i}>
                  <div className='rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 p-7 transition-all hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-600'>
                    <div className='p-3 rounded-lg bg-primary w-fit mb-8 shadow-lg shadow-primary/30'>
                      <Image
                        src={item.imgSrc}
                        alt={item.title}
                        width={24}
                        height={24}
                      />
                    </div>
                    <div>
                      <h5 className='font-bold mb-2'>{item.title}</h5>
                      <p className='text-base font-normal max-w-xs'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Specialize
