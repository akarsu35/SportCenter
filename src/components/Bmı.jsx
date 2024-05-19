import '../App.css'
const Bmı = () => {
  return (
    <div>
      <section
        id="calculator"
        className=" flex mt-10 flex-col flex-wrap items-center justify-center gap-6 mx-auto font-semibold sm:flex-row "
      >
        <div className="flex flex-wrap gap-1 justify-between flex-col sm:flex-row max-w-6xl mx-auto">
          <div className="calculator sm:max-w-[40%] px-4">
            <h4 className="sm:text-3xl font-bold text-btnColor">
              BMI Calculator
            </h4>
            <div className="min-w-90">
              <p className="my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                dolores ex et sequi porro facere, enim dolorum dolore, iure
                libero in voluptate itaque? Dignissimos sunt deleniti eligendi
                at similique totam.
                <br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates officia cumque neque magnam ipsam voluptas qui,
                voluptate eveniet quae, veniam corrupti maiores itaque sint.
                Earum, dolor iure! Delectus, libero. Non.
              </p>
            </div>

            {/* <!-- height and weight input --> */}
            <div className="inputsContainer flex flex-wrap gap-4">
              <div className="inputContainer my-0">
                <input
                  type="number"
                  name=""
                  id="height"
                  placeholder="Your Height"
                  className="w-full border-2 border-gray-700 rounded-sm"
                />
                <label>cm</label>
              </div>

              <div className="inputContainer">
                <input
                  type="number"
                  name=""
                  id="weight"
                  placeholder="Your Weight"
                  className="w-full border-2 border-gray-700 rounded-sm"
                />
                <label>kg</label>
              </div>
            </div>
            <span className="warning"></span>
            <span className="bmireport"></span>
          </div>
          <div className="calculatorResult flex flex-col ">
            <p className="flex justify-center text-2xl my-2">
              Your BMI: <span className="bmiResult"></span>
            </p>
            <div className="image relative">
              <img src="./images/bmi-index.jpg" alt="BMI Index" />
              <span className="calculatorCaret">
                <i id="bmıCaret" className="fa-solid fa-caret-up"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Bmı
