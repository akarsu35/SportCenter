import OurClassesBtn from "./OurClassesBtn"
import '../App.css'

const OurClasses = () => {
  return (
    <div>
      <section id="classes" className="mt-10  max-w-6xl mx-auto">
        <div className="text-3xl font-bold text-btnColor text-center flex items-center justify-center relative">
          <h3>OUR CLASSES </h3>
        </div>

        <div className="flex mt-10 justify-center  max-w-4xl mx-auto text-center font-semibold">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            esse provident eius? Voluptatem delectus necessitatibus qui
            laudantium possimus voluptatum inrum, repellat eos?
          </p>
        </div>

        <div className="relative flex-wrap">
          <div className="clip-padding absolute h-full w-full "></div>

          {/* <!-- buttons --> */}
          <div
            id="btns-div"
            className="flex gap-6 -z-0 text-white flex-wrap max-w-sm sm:max-w-5xl  px-4 mx-auto justify-center items-center py-12 sm:gap-20 font-semibold"
          >
            <div className="flex items-center justify-center flex-col ">
              <button
                id="yoga"
                className="focused flex justify-center relative bg-btnColor  hover:bg-hoverColor  rounded-sm px-8 py-2 w-40"
              >
                Yoga
              </button>
            </div>
            <div className="flex items-center justify-center flex-col">
              <button
                id="group"
                className="focused relative bg-btnColor  hover:bg-hoverColor  rounded-sm px-8 py-2 w-40"
              >
                Group
              </button>
            </div>
            <div className="flex items-center justify-center flex-col">
              <button
                id="solo"
                className="focused relative bg-btnColor  hover:bg-hoverColor  rounded-sm px-8 py-2 w-40"
              >
                Solo
              </button>
            </div>
            <div className="flex items-center justify-center flex-col">
              <button
                id="stretching"
                className="focused relative bg-btnColor  hover:bg-hoverColor  rounded-sm px-8 py-2 w-40"
              >
                Strecthing
              </button>
            </div>
           
          </div>

          {/* <!-- details --> */}
          <div
            id="feat-content"
            className="max-w-[80%] flex-wrap flex mt-10 flex-col justify-center gap-6 mx-auto font-semibold sm:flex-row "
          >
            <div className="flex items-center flex-col sm:max-w-[45%]">
              <h4 className="text-2xl font-bold">Why are your Yoga?</h4>
              <p id="feat-parag" className="text-wrap">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                quibusdam distinctio corrupti itaque dolorem quod minus, quae
                beatae nulla sapiente, earum ea accusantium impedit id, delectus
                omnis? Rem culpa consequatur fugit voluptatum, facere sequi
                totam esse blanditiis deleniti perspiciatis eaque repudiandae
                quis inventore placeat nisi accusantium, quod cum provident
                atque.
              </p>

              <p className="text-2xl font-bold mt-6">
                When comes Yoga Your Time
              </p>
              <p className="mt-5 ">Saturday-Sunday: 8:00am – 10:00am</p>
              <p className="mt-5 ">Monday-Tuesday: 10:00am – 12:00pm</p>
              <p className="mt-5 ">Wednesday-Friday: 3:00pm – 6:00pm</p>
            </div>

            <div className="sm:max-w-[45%]">
              <img id="feat-img" src="./images/yoga.jpg" alt="" />
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}
export default OurClasses
