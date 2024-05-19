import homecards from '../data/homecards'
import '../App.css'
const HomeCards = () => {
    

  return (
    <div className="flex justify-around bg-heroBottom  min-h-48 font-bold py-12">
      {homecards.map((card, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col gap-4 items-center w-48 h-48 p-4 justify-center bg-white"
          >
            <p className="text-btnColor font-extrabold text-3xl">{card.num}</p>

            <p className="font-extrabold text-2xl">{card.title}</p>
          </div>
        )
      })}
    </div>
  )
     
}
export default HomeCards