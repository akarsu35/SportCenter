import review from "../data/review"
import '../App.css'

const ReviewCards = () => {
  return (
    <div
      id="clients"
      className="flex flex-col flex-wrap justify-center items-center mx-auto gap-20 sm:flex-row px-4"
    >
      {review.map((item, idx) => {
        return (
          <div key={idx} id="client1" className="max-w-[500px]">
            <div className="flex items-center gap-4 my-8">
              <img
                src={item.img}
                alt="client"
                className="border rounded-full"
              />
              <p className="flex flex-col">
                {item.works}{' '}
                <span className="text-gray-400 my-4">{item.Stat}</span>
              </p>
            </div>
            <div className="bg-bgNavbar relative text-white">
              <p className="p-8">{item.desc}</p>
              <div className="client-clip-l">
                <p></p>
              </div>
              <div className="client-clip-r">
                <p></p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default ReviewCards