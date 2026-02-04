import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src='/images/brand/logo.png'
        alt='Cabij & co'
        width={150}
        height={150}
        priority
        className='h-auto'
      />
    </Link>
  )
}

export default Logo
