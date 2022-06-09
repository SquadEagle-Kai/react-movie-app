import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const headerNav = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Movies',
    path: '/movie'
  },
  {
    name: 'TV Show',
    path: '/tv'
  },
]

const Header = () => {

  const { pathname } = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.romove('shrink');
      }
    }
    window.addEventListener('scroll', shrinkHeader);
    return() => {
      window.removeEventListener('scroll', shrinkHeader);
    }
  }, []);

  const active = headerNav.findIndex(e => e.path === pathname )

  return (
    <div ref={headerRef} className="header">
      <div className="header-wrap container">
        <div className="logo">
          <Link to="/">
            <h2>KaiTV</h2>
          </Link>
        </div>
        <ul className="header-nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? 'active' : 'unactive'}`}>
              <Link to={e.path}>
                {e.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header