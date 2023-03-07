import Link from "next/link";
import Image from "next/image";
export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image src={'/images/logo.png'} width={100} height={100} alt='logo' />
          <nav className='nav-bar'>
            <ul>
              <li>
                <Link href={'/'} passHref>
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href={'/events'} passHref>
                  <p>Events</p>
                </Link>
              </li>
              <li>
                <Link href={'/about-us'} passHref>
                  <p>About us</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">Events near you</p>
      </div>
    </header>
  )
}