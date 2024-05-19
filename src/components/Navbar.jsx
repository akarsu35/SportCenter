import React, { useState, useEffect } from 'react'
import '../App.css'

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup işlemi
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // Boş array vererek sadece component monte edildiğinde bir kez çalışmasını sağlarız.

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: scrollPosition > 10 ? 'blue' : 'transparent',
    zIndex: 1000, // Diğer elemanların üzerinde olması için z-index ekledik
    // Diğer navbar stillerini burada da tanımlayabilirsiniz
  }
  return (
    <div>
      <div style={navbarStyle}>
        <header className="fixed z-20 min-w-full hidden sm:block" id="navbar">
          <nav className="max-w-6xl mx-auto h-16 flex items-center justify-between p-6 w-4/5">
            <div className="flex items-center  max-w-[225px]">
              <img src="./image/logo.png" alt="logo" />
            </div>
            <div className="flex flex-wrap gap-1 items-center text-xl ">
              <div>
                <a
                  href="#home"
                  className="text-white mx-2 hover:bg-hoverColor focus:bg-hoverColor rounded-lg p-1 transition ease-linear delay-150"
                >
                  Home
                </a>
                <a
                  href="#classes"
                  className="text-white mx-2 hover:bg-hoverColor focus:bg-hoverColor rounded-lg p-1 transition ease-linear delay-150"
                >
                  Classes
                </a>
                <a
                  href="#trainers"
                  className="text-white mx-2 hover:bg-hoverColor focus:bg-hoverColor rounded-lg p-1 transition ease-linear delay-150"
                >
                  Trainer
                </a>
              </div>
              <div>
                <a
                  href="#review"
                  className="text-white mx-2 hover:bg-hoverColor focus:bg-hoverColor rounded-lg p-1 transition ease-linear delay-150"
                >
                  Review
                </a>
                <a
                  href="#contact"
                  className="text-white mx-2 hover:bg-hoverColor focus:bg-hoverColor rounded-lg p-1 transition ease-linear delay-150"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="text-white text-nowrap mx-2 hover:bg-hoverColor focus:bg-hoverColor rounded-lg p-1 transition ease-linear delay-150 bg-hoverColor "
                >
                  JOIN US
                </a>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Navbar
