import TrainerCards from "./TrainerCards"

const Trainers = () => {
  return (
    <div>
      <section
        id="trainers"
        className=" bg-heroBottom font-bold flex mt-10 flex-col justify-center "
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 ">
            <h3 className="mt-10 text-3xl font-bold text-btnColor flex text-center items-center justify-center relative">
              OUR BEST TRAINERS
            </h3>
            <p className="flex text-center mx-auto max-w-xs sm:max-w-lg my-8">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical at Hampden-Sydney College
            </p>
          </div>

          <div
            id="trainer-pict"
            className="flex flex-col flex-wrap justify-center gap-12 items-center mx-auto  mb-20  sm:flex-row "
          >
            <TrainerCards/>
            {/* <div className="trainerCard flex relative z-10 items-center justify-center ">
              <img
                src="./images/trainer1.jpg"
                alt="trainer-jpeg"
                className="border-2 border-border-color rounded-lg z-0"
              />
              <div className="cardClip absolute bg-[#355592] -z-10"></div>
              <div className="trainerName text-white flex items-center justify-center flex-col absolute bottom-0  bg-[#355592] p-3 -z-10">
                <h2 className="text-3xl ">Jane Doe</h2>
                <p>Cardio Trainer</p>
              </div>
            </div>
            <div className="trainerCard flex relative z-10 items-center justify-center ">
              <img
                src="./images/trainer2.jpg"
                alt="trainer-jpeg"
                className="border-2 border-border-color rounded-lg z-0"
              />
              <div className="cardClip absolute bg-[#355592] -z-10"></div>
              <div className="trainerName text-white flex items-center justify-center flex-col absolute bottom-0  bg-[#355592] p-3 -z-10">
                <h2 className="text-3xl ">Jane Doe</h2>
                <p>Body Builder</p>
              </div>
            </div>
            <div className="trainerCard flex relative z-10 items-center justify-center ">
              <img
                src="./images/trainer3.jpg"
                alt="trainer-jpeg"
                className="border-2 border-border-color rounded-lg z-0"
              />
              <div className="cardClip absolute bg-[#355592] -z-10"></div>
              <div className="trainerName text-white flex items-center justify-center flex-col absolute bottom-0  bg-[#355592] p-3 -z-10">
                <h2 className="text-3xl ">Jane Doe</h2>
                <p>Personel Trainer</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}
export default Trainers
