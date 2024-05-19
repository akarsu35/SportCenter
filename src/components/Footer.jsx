import '../App.css'
const Footer = () => {
  return (
    <div>
      <footer
        id="footer"
        className="flex justify-center bg-bgNavbar text-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className=" mb-5">
            <div className="px-4">
              <img src="./image/logo.png" alt="" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt numquam rerum repellendus. Doloribus molestias ad eaque
                quaerat nostrum alias quia commodi quidem. Dolores pariatur
                earum fuga similique neque aliquid culpa!
              </p>
            </div>

            <div
              id="footer-links"
              className="flex flex-row flex-wrap mt-5 px-8 justify-center items-center gap-4 sm:gap-80"
            >
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl sm:text-3xl">Information</h4>
                <a href="#">About Us</a>
                <a href="#">Classes</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl sm:text-3xl">Helpful Links</h4>
                <a href="#">Services</a>
                <a href="#">Supports</a>
                <a href="#">Terms & Condition</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer
