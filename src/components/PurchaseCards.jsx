import purchase from "../data/purchase"
import '../App.css'

const PurchaseCards = () => {
  return (
    <div className=" flex flex-col flex-wrap justify-center items-center gap-2 sm:flex-row ">
      {purchase.map((item, idx) => {
        return (
          <div
            key={idx}
            className="group max-w-[300px] shadow-2xl shadow-slate-700 rounded-md cursor-pointer hover: "
          >
            <div>
              <img
                alt="purchase1"
                loading="lazy"
                src={item.img}
                className="rounded-t-md"
              />
            </div>
            <div className="flex gap-1 flex-col">
              <h5 className="text-base font-semibold text-center">
                Kettlebell / 5kg
              </h5>
              <p className="text-size text-center gap-1 font-semibold flex justify-center">
                <del>{item.price}$</del>/<span>{item.oldPrice}$</span>
              </p>
            </div>
            <div className=" w-full h-10 text-xs flex flex-row justify-around items-center rounded-b-md relative transition delay-150 duration-700 ease-in-out group-hover:bg-hoverColor ">
              <div className=" flex flex-row justify-center absolute left-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  witdh="1em"
                  height="1em"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
              </div>
              <div>
                <p>Add To Cart </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default PurchaseCards