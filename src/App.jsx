import { BsInstagram, BsLinkedin, BsFacebook, BsTwitterX } from "react-icons/bs";
import './App.css';

function App() {
  return (
    <>
      <footer className="p-4 md:p-8">
        <div className="flex flex-col md:flex-row  text-white  bg-black backdrop-blur-lg">

          <div className="w-full md:w-1/4 mb-4 md:mb-0 border-r">
            <h1 className="font-extrabold text-xl mt-4">ASK US</h1>
            <div className="flex flex-col gap-1 mt-3">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email ..."
                className="bg-transparent px-2 py-2 w-full md:w-72 my-4 focus:outline-none shadow-md rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="query">Query</label>
              <input
                id="query"
                type="text"
                placeholder="Queries ..."
                className="bg-transparent px-2 py-2 w-full md:w-72 my-4 focus:outline-none shadow-md rounded-lg"
              />
            </div>
            <button className="rounded-lg py-2 mx-5 px-8 border border-yellow-600 text-yellow-600 font-semibold">
              Submit Query
            </button>
          </div>
          <div class="w-full md:w-1/4  mb-4 md:mb-0 ">
                <div class="flex justify-center items-center py-8">
                    <img src="C:\Users\ADMIN\Desktop\bluebit.jpg" class="h-28 w-28 md:h-auto md:w-auto bg-white"/>
                </div>
                
                <div class="md:h-auto md:px-6 md:py-10">
                    <h1 class="font-extrabold text-xl my-4 text-white">Quick Links</h1>
                    <div class="flex text-white justify-center">
                        <div class="flex flex-col mx-4">
                            <div class="hover:underline hover:text-cyan-400 ">Sponsors</div>
                            <div class="hover:underline hover:text-cyan-400">Prizes</div>
                            <div class="hover:underline hover:text-cyan-400">Timeline</div>
                            <div class="hover:underline hover:text-cyan-400">AboutUs</div>
                        </div>
                        <div class="flex flex-col mx-4">
                            <div class="hover:underline hover:text-cyan-400">Contact</div>
                            <div class="hover:underline hover:text-cyan-400">FAQs</div>
                            <div class="hover:underline hover:text-cyan-400">Details</div>
                            <div class="hover:underline hover:text-cyan-400">Rules</div>
                        </div>
                    </div>
                </div>
            </div>
        
        <div className=" w-full md:w-1/2 flex flex-col border-l">
          <div className=" h-1/2 w-full px-6">
            <h1 className="font-extrabold text-xl my-4">Get in Touch</h1>
            <a href="xyz@gmail.com" class="text-white font-mono text-xl my-6 underline hover:text-cyan-400">xyz@gmail.com</a>
            <div className="flex items-center justify-center space-x-8 text-4xl my-6 ">
              <a className="px-2 hover:transition ease-in-out hover:text-cyan-400">
                <BsInstagram />
              </a>
              <a className="px-2 hover:transition ease-in-out hover:text-cyan-400">
                <BsFacebook />
              </a>
              <a className="px-2 hover:transition ease-in-out hover:text-cyan-400">
                <BsTwitterX />
              </a>
              <a className="px-2 hover:transition ease-in-out  hover:text-cyan-400">
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div class="md:text-white md:px-6 md:py-6 ">
  <h3 className="text-lg font-bold mb-4 md:mb-6 mt-6">Contact Details</h3>
  <div className="flex flex-col md:space-y-4 ">
    <div className="flex flex-col  ">
     
      
      <div className=" mt-3  text-gray-300 hover:text-white"><a href="tel:1234567">1234567890</a></div>
      <p className="text-center">xyz</p>
      <div className="  mt-3  text-gray-300 hover:text-white"><a href="tel:1234567">1234567890</a></div>
      <p className="text-center">lmn</p>
      <div className="  mt-3  text-gray-300 hover:text-white"><a href="tel:1234567">1234567890</a></div>
      <p className="text-center">abc</p>
    </div>
  </div>
</div>

        </div>
        </div>
      </footer>
    </>
  );
}

export default App;