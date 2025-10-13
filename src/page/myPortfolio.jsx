import AboutMe from "../components/aboutMe";

import FeedBackForm from "../components/feedBackForm";
import Navbar from "../components/navBar";



const Myportfolio = () => {



  return (
    <div>
      <div class="flex min-h-screen ">
        <div class="w-1/2 bg-gray-300 lg:w-3/5 xl:w-2/3">
          {/* profile */}
          <div className="flex flex-col pt-10 mb-6 ml-4">
            <div className="relative w-10 h-10 ">
              <img src="/src/assets/Amphai.jpg" alt="Amphai" className="object-cover w-full h-full rounded-full " />
            </div>

          </div>
          <div className="pt-20 ml-12">
            <div className="text-sm font-bold text-black">
              Hi, I am

            </div>
            <h1 className="font-bold sm:pt-10 text-md">Amphai Khammanyvong</h1>
            <h1 className="text-sm">Frontend Developer</h1>
          </div>
          <div className="relative pt-10">
            <div className="flex not-even:space-x-2.5 ml-12 mr-5 w-18">
              <div className="w-20">
                <img src="/public/facebook.png" alt="facebook" className="w-full h-full rounded-full" />
              </div>
              <div className="w-20">
                <img src="/public/githup.png" alt="githup" className="w-full h-full rounded-full" />
              </div>
              <div className="w-20">
                <img src="/public/ig.jpeg" alt="ig" className="h-full rounded-full w-md " />
              </div>
            </div>
          </div>
        </div>
      
        <div class="w-1/2 bg-gray-900 lg:w-3/5 xl:w-2/3">
          <div className="p-3 border-b border-gray-700 lg:p-4">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="bg-black rounded-sm ">
        <div className="ml-10 text-red-50">About me</div>
        <div className="pt-5 ml-12 text-sm text-gray-500">I am a fresh graduate with a Bachelor’s degree in Computer Engineering. I have basic knowledge of computer systems, installing Os, programming,
          web development and problem-solving. I can communicate in general English and I am eager to learn, gain experience, and grow in a professional working environment. I am looking for job opportunities where I can contribute and develop my skills further.</div>

      </div>
      <div className="mt-8 bg-gray-300">
        <FeedBackForm />
      </div>
    </div>





  );

};
export default Myportfolio;