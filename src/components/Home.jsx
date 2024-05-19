import HomeCards from './HomeCards'
import Navbar from './Navbar'
import '../App.css'

const Home = () => {
  return (
    <div>
      <section
        id="home"
        className="relative  flex bg-hero-pattern bg-cover bg-center h-bgHeight font-bold "
      >
        {/* <!-- mobile navbar start --> */}
        <nav className="absolute w-[100%] sm:hidden ">
          <div id="hamburger" className="flex w-[100%] justify-between z-50 ">
            <div className="mt-0 ml-5 w-[40%]">
              <img src="./images/logo.png" alt="" />
            </div>

            <div className="flex flex-col mt-4 mr-1 ">
              {/* <!-- X Button --> */}
              <div id="xButton" className="flex ">
                <button className="group ml-6">
                  <div className="mr-16">
                    <div
                      id="down"
                      className="hidden transition-all duration-150  absolute flex flex-col items-center  justify-center rounded-full w-[40px] h-[40px]  bg-hoverColor ring-4  hover:ring-8  ring-opacity-80  shadow-md "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-1 h-6 w-6h-6 w-6 animate-bounce text-btnColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    <div
                      id="three"
                      className="mr-16 flex flex-col items-center transform transition-all duration-300 absolute  justify-center rounded-full w-[40px] h-[40px]  bg-hoverColor ring-4  hover:ring-8  ring-opacity-80  shadow-md "
                    >
                      <div className=" bg-btnColor h-[2px] w-7 transform transition-all duration-300  "></div>
                      <div className=" bg-btnColor mt-1.5 h-[2px] w-7 rounded transform transition-all duration-300  delay-75"></div>
                      <div className=" bg-btnColor mt-1.5 h-[2px] w-7 transform transition-all duration-300   delay-100"></div>
                    </div>
                  </div>
                </button>
              </div>
              {/* <!-- X Button--> */}

              <div
                id="hamMenu"
                className="bg-bgNavbar hidden rounded-lg mt-10 "
              >
                <div className="flex flex-col  items-center text-center relative text-white p-2">
                  <a
                    href="#home"
                    className=" hover:bg-hoverColor focus:bg-hoverColor rounded-lg p-1 transition-all duration-1000 hover:ring-8  ring-opacity-80 "
                  >
                    Home
                  </a>
                  <a
                    href="#classes"
                    className="hover:bg-hoverColor focus:bg-hoverColor rounded-lg p-1 transition-all duration-1000 hover:ring-8  ring-opacity-80"
                  >
                    Classes
                  </a>
                  <a
                    href="#trainers"
                    className="hover:bg-hoverColor focus:bg-hoverColor rounded-lg p-1 transition-all duration-1000 hover:ring-8  ring-opacity-80"
                  >
                    Trainers
                  </a>
                  <a
                    href="#review"
                    className="hover:bg-hoverColor focus:bg-hoverColor rounded-lg p-1 transition-all duration-1000 hover:ring-8  ring-opacity-80"
                  >
                    Review
                  </a>
                  <a
                    href="#contact"
                    className="hover:bg-hoverColor focus:bg-hoverColor rounded-lg p-1 transition-all duration-1000 hover:ring-8  ring-opacity-80"
                  >
                    Contact
                  </a>
                  <a
                    href="#"
                    className="  hover:bg-hoverColor focus:bg-hoverColor rounded-lg p-1 transition-all duration-1000 hover:ring-8  ring-opacity-80 "
                  >
                    JOIN US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* <!-- mobile navbar end--> */}

        {/* <header className="fixed z-20 min-w-full hidden sm:block" id="navbar">
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
        </header> */}
        {/* <!-- navbar finish --> */}
        <Navbar />

        <div className=" flex items-center justify-center mx-auto mb-16 max-w-6xl">
          <div className="flex gap-2 text-white flex-col mx-auto mt-8 px-4 sm:px-6">
            <div className="mt-16">
              <p className="bg-btnColor w-32 py-2 px-4 rounded-lg text-sm sm:text-base">
                POWERFULL
              </p>
            </div>

            <h2 className="text-4xl sm:text-6xl max-w-[22rem] sm:leading-normal">
              Group Practice With Trainer
            </h2>

            <div
              className="sm:flex sm:w-[72%] my-6 bg-black/80 rounded-md
          p-2"
            >
              <p className="tex-sm sm:text-xl tracking-wider">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Distinctio adipisci, at officiis quisquam ad sed illum
                consequuntur libero aperiam vel, repellat cupiditate fugit
                asperiores facere deleniti quos. Quo aliquid adipisci harum
                quidem. Saepe, repellat sunt!
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:gap-8 sm:flex-row">
              <button className="px-6 py-3  bg-btnColor flex rounded-md  hover:bg-hoverColor transition ease-linear delay-150">
                Sign Up
              </button>

              <button className="px-6 py-3 bg-gray-500 bg-opacity-60 flex rounded-md  hover:bg-hoverColor transition ease-linear delay-150">
                Details
              </button>
            </div>
          </div>
        </div>
      </section>
      <HomeCards />
    </div>
  )
}
export default Home
