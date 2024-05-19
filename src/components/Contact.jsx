
import '../App.css'
const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className=" mx-auto font-semibold flex flex-col items-center justify-center"
      >
        <div className=" flex justify-center items-center flex-col ">
          <h3 className="mt-20 text-3xl text-center font-bold text-btnColor flex items-center justify-center relative">
            CONTACT US
          </h3>
          <p className="flex text-center mx-auto sm:max-w-lg my-10 px-4">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical at Hampden-Sydney College
          </p>
        </div>
        
        <div className=" flex flex-wrap flex-col sm:flex-row justify-center items-center w-full max-w-6xl mx-auto">
          {/* <!-- Sol taraftaki iletişim bilgileri --> */}
          <div className="sm:w-1/2 p-6">
            <div className="flex gap-4 sm:gap-16">
              <div>
                <h2 className="sm:text-xl ">Mobile Number</h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  +135 773 321 4442
                </p>
              </div>
              <div>
                <h2 className="sm:text-xl ">Email Address</h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  demo@demo.com
                </p>
              </div>
            </div>

            <div className="sm:text-3xl text-wrap mt-6">
              <p>Make An Aponintment</p>
            </div>

            {/* <!-- Randevu formu --> */}
            <form className="mt-6" />
            <label className="block text-sm font-medium text-gray-700"></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="mt-1 p-2 w-full border rounded-md"
            />

            <label className="block mt-4 text-sm font-medium text-gray-700"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Mail"
              className="mt-1 p-2 w-full border rounded-md"
            />

            <label className="block mt-4 text-sm font-medium text-gray-700"></label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>

          {/* <!-- (Sağ taraftaki Google Haritası) Değerlendirme Formu 13 --> */}
          <div className="sm:w-1/2 p-6">
            {/* <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200065.48497216703!2d26.914910413170876!3d38.417828663862814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWly!5e0!3m2!1str!2str!4v1714068322771!5m2!1str!2str"
              width="100%"
              height="400"
              style="border:0;"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            /> */}
          </div>
        </div>
      </section>
    </div>
  )
}
export default Contact
