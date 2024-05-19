import trainers from "../data/trainers"
import '../App.css'

const TrainerCards = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center gap-12 items-center mx-auto  mb-20  sm:flex-row ">
      {trainers.map((item, idx) => {
        return (
          <div
            key={idx}
            className="trainerCard flex relative z-10 items-center justify-center "
          >
            <img
              src={item.img}
              alt="trainer-jpeg"
              className="border-2 border-border-color rounded-lg z-0"
            />
            <div className="cardClip absolute bg-[#355592] -z-10"></div>
            <div className="trainerName text-white flex items-center justify-center flex-col absolute bottom-0  bg-[#355592] p-3 -z-10">
              <h2 className="text-3xl ">{item.name}</h2>
              <p>{item.designation}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default TrainerCards