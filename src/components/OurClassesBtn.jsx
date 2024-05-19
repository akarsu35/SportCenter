import ourClasses from '../data/ourClasses'
import '../App.css'
const OurClassesBtn = () => {
    console.log(ourClasses[0].desc)
  return (
    <div className="flex gap-6 -z-0 text-white flex-wrap max-w-sm sm:max-w-5xl  px-4 mx-auto justify-center items-center py-12 sm:gap-20 font-semibold">
      {ourClasses.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex ">
              <button
                id="yoga"
                className="focused flex justify-center relative bg-btnColor  hover:bg-hoverColor  rounded-sm px-8 py-2 w-40"
              >
                {item.name}
              </button>
            </div>
            <div
              id="feat-content"
              className="max-w-[80%] flex-wrap flex mt-10 flex-col justify-center gap-6 mx-auto font-semibold sm:flex-row "
            >
              <div className="flex items-center flex-col sm:max-w-[45%]">
                <h4 className="">
                  Why are your {item.name}?
                </h4>
                <p id="feat-parag" className="">
                  {item.desc}
                </p>

                <p className="text-2xl font-bold mt-6">
                  When comes {item.name} Your Time
                </p>
                <p className="mt-5 ">Saturday-Sunday: 8:00am – 10:00am</p>
                <p className="mt-5 ">Monday-Tuesday: 10:00am – 12:00pm</p>
                <p className="mt-5 ">Wednesday-Friday: 3:00pm – 6:00pm</p>
              </div>

              <div className="sm:max-w-[45%]">
                <img id="feat-img" src={item.img} alt="" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default OurClassesBtn
