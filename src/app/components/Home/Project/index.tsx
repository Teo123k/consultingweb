'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HOME_HIGHLIGHTS } from '@/app/api/homeImages'

const arrowStyles = `
  .slick-prev:before,
  .slick-next:before {
    color: #000;
    font-size: 24px;
    opacity: 0.8;
  }

  .dark .slick-prev:before,
  .dark .slick-next:before {
    color: #fff;
  }

  .slick-prev,
  .slick-next {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .dark .slick-prev,
  .dark .slick-next {
    background: rgba(0, 0, 0, 0.7);
  }

  .slick-prev:hover,
  .slick-next:hover {
    background: rgba(255, 255, 255, 1);
  }

  .dark .slick-prev:hover,
  .dark .slick-next:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`

const Project = () => {
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div id='project' className='scroll-mt-12'>
      <style>{arrowStyles}</style>
      <section className='mt-12 -mx-4 px-4 py-12 bg-neutral-50 dark:bg-neutral-950/30'>
        <div className='container relative'>
          <h2 className='text-4xl font-semibold'>Food highlights</h2>

          <div className='mt-6'>
            <Slider {...sliderSettings}>
              {HOME_HIGHLIGHTS.map((src, i) => (
                <div key={src} className='px-2'>
                  <div className='relative aspect-[4/3] w-full overflow-hidden rounded-2xl border shadow-sm'>
                    <Image
                      src={src}
                      alt={`Food highlight ${i + 1}`}
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, 33vw'
                      priority={i < 3}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <p className='mt-6 font-medium'>
            <a href='/work' className='underline'>
              View selected experience →
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Project
