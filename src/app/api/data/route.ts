import { NextResponse } from 'next/server'

const HeroData = [
  {
    imgSrc: '/images/banner/blogforgeCover.webp',
  },
  {
    imgSrc: '/images/banner/gleamerCover.webp',
  },
  {
    imgSrc: '/images/banner/learnaxisCover.webp',
  },
  {
    imgSrc: '/images/banner/studiovaCover.webp',
  },
]

const NavLinkData = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
]

const WorkItems = [
  {
    title: 'High-volume street food operations',
    desc: 'Multiple street food concepts, permanent venues, pop-ups, and major food festivals in London.',
    coverImg: '/images/work/streetfood/street-01.jpg',
    link: '/work',
  },
  {
    title: 'Restaurant concept & menu development',
    desc: 'Modern Korean restaurant concept in Vienna focused on menu structure and execution clarity.',
    coverImg: '/images/work/vienna/vienna-01.jpg',
    link: '/work',
  },
  {
    title: 'Touring & international catering',
    desc: 'Korean catering for international K-pop tours across multiple countries.',
    coverImg: '/images/work/touring/tour-01.jpg',
    link: '/work',
  },
]

const RecordData: any[] = []

const ReviewData: any[] = []

const SpecializeData: any[] = [
  {
    imgSrc: '/images/specialization/webdesign.svg',
    title: 'Restaurant menu design',
    desc: 'Menu structure, cost-efficient dishes, and kitchen-friendly execution that works in real service.',
  },
  {
    imgSrc: '/images/specialization/seooptimize.svg',
    title: 'Operations consulting',
    desc: 'Prep systems, workflow optimisation, SOPs, waste reduction, and consistency for daily operations.',
  },
  {
    imgSrc: '/images/specialization/digitalmarketing.svg',
    title: 'AI automation for restaurants',
    desc: 'Recipe costing, inventory workflows, purchasing support, and simple automation your team can use.',
  },
]


const PlanData: any[] = []

const CategoryData: any[] = [
  {
    imgSrc: '/images/category/webdev.webp',
    title: 'Web Design',
  },
  {
    imgSrc: '/images/category/logods.webp',
    title: 'Logo Design',
  },
  {
    imgSrc: '/images/category/mobileapp.webp',
    title: 'Mobile App Development',
  },
  {
    imgSrc: '/images/category/contentwrite.webp',
    title: 'Content Writing',
  },
  {
    imgSrc: '/images/category/digitalmarket.webp',
    title: 'Digital Marketing',
  },
]

const FooterLinkData = [
  {
    section: 'Company',
    links: [
      {
        label: 'Projects',
        href: '/#project',
      },
      {
        label: 'Expertise',
        href: '/#expertise',
      },
      {
        label: 'Pricing',
        href: '/#pricing',
      },
      {
        label: 'Categories',
        href: '/#categories',
      },
    ],
  },
  {
    section: 'Support',
    links: [
      { label: 'Help center', href: '/' },
      { label: 'Terms of service', href: '/' },
      { label: 'Legal', href: '/' },
      { label: 'Privacy Policy', href: '/' },
    ],
  },
]

export async function GET() {
  return NextResponse.json({
    hero: HeroData,
    NavLinkData: NavLinkData,
    ProjectData: WorkItems,
    RecordData: RecordData,
    ReviewData: ReviewData,
    SpecializeData: SpecializeData,
    FooterLinkData: FooterLinkData,
  })
}
