import Link from "next/link";
import Image from "next/image";
export const Header = () => {
  return (
    <header>
      <div className="topNav">
        <Image src={'/images/logo.png'} width={100} height={100} alt='logo' />
        <nav className='nav-bar'>
          <Link href={'/'} passHref>
            <p>Home</p>
          </Link>
          <Link href={'/events'} passHref>
            <p>Events</p>
          </Link>
          <Link href={'/about-us'} passHref>
            <p>About us</p>
          </Link>
        </nav>
      </div>
      <h1>This is a mah pageee</h1>
    </header>
  )
}