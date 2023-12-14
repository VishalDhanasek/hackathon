import Link from 'next/link'
import Image from 'next/image'
import Logomain from '@/public/images/1.png'



export default function Logo() {
  return (
    
    <Link href="/" className="block" aria-label="Cruip">
      <Image
      src={Logomain}
      width={140}
      height={75}
      alt="Innovation Geeks - Unlocking Your Digital Potential"
        />
    </Link>
  )
}
