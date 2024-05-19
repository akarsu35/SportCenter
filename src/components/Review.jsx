import ReviewCards from "./ReviewCards"
import '../App.css'

const Review = () => {
  return (
    <div>
        <section id="review" className=" bg-heroBottom font-semibold pb-40">
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-center items-center flex-col ">
        <h3 className="mt-20 text-3xl font-bold text-btnColor text-center flex items-center justify-center relative">REVIEW CLIENT</h3>
        <p className="flex text-center mx-auto max-w-xs sm:max-w-lg my-10">
          Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College
        </p>
      </div>
      {/* <div id="clients" className="flex flex-col flex-wrap justify-center items-center mx-auto gap-20 sm:flex-row px-4">
        <div id="client1" className="max-w-[500px]">
          <div className="flex items-center gap-4 my-8">
            <img src="./images/client1.jpg" alt="client" className="border rounded-full"/>
            <p className="flex flex-col">Diet Expert <span className="text-gray-400 my-4">CFO</span></p>

          </div>
          <div className="bg-bgNavbar relative text-white">
            <p className="p-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laboriosam modi tempora
              nihil excepturi. Voluptatibus, sunt! Magni quidem alias, adipisci nihil illo, quis eveniet, quae ut veniam
              explicabo cupiditate minus!</p>
            <div className="client-clip-l">
              <p></p>
            </div>
            <div className="client-clip-r">
              <p></p>
            </div>

          </div>

        </div>

        <div id="client2" className="max-w-[500px]">
          <div className="flex items-center gap-4 my-8">
            <img src="./images/client2.jpg" alt="client" className="border rounded-full"/>
            <p className="flex flex-col">Diet Expert <span className="text-gray-400 my-4">CFO</span></p>

          </div>
          <div className="bg-bgNavbar relative text-white">
            <p className="p-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae similique cum, molestiae quo
              cumque laborum fugit maxime iste unde tempora, quos ea architecto, neque nesciunt.
            </p>
            <div className="client-clip-l">
              <p></p>
            </div>
            <div className="client-clip-r">
              <p></p>
            </div>
          </div>

        </div>

      </div> */}
      <ReviewCards/>
    </div>
    
 

    
  </section>
    </div>
  )
}
export default Review