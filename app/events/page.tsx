export const metadata = {
    title: 'Events',
    description: 'Page description',
  }
  
  import Link from 'next/link'
  import Image from 'next/image';
  import Footer from '@/components/ui/footer';
  import Team from '@/components/our-team';
  import Newsletter1 from '@/components/newsletter1';
  import FeaturesBlocks from '@/components/features-blocks'


  
  export default function Events() {
    return (
      <section className="relative">


        <div className="max-w-6xl  mx-auto px-4 sm:px-6">

        <div className="mt-[150px] max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4 " data-aos="zoom-y-out">Events</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out" >Explore the future at the intersection of innovation and inspiration with our Tech Events – where cutting-edge technology meets limitless possibilities.</p>
          </div>


          
        <section className="mb-[200px]">
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
                  <ol className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-3 sm:grid-cols-2" role="list">
                    <li className="lgcol-span-2" data-aos="zoom-y-out">
                      <a href="#">
                        <div className="flex items-end justify-center ">
                          <div className="flex overflow-hidden  ">
                            <img alt="#" decoding="async" loading="lazy" src="/open.png" className=' transform transition duration-300 hover:scale-110'/>
                          </div>
                        </div>
                        <p className="mt-8">
                          <time className="text-xs text-gray-500" dateTime="2023-03-16">
                            March 16, 2023
                          </time>
                        </p>
                        <h3 className="h2 mt-2 text-xl font-bold leading-6 text-black">
                          Opening Cermony
                        </h3>
                        <p className="mt-2 text-base  font-semibold text-blue-500 ">
                          Mr. Patrik Gauri
                        </p>
                        <p className="mt-0 text-sm text-gray-500 ">
                          TedX Speaker
                        </p>
                      </a>
                    </li>
                    <li  data-aos="zoom-y-out">
                      <a href="#">
                        <div className="flex items-end justify-center">
                          <div className="flex overflow-hidden">
                            <img alt="#" decoding="async" loading="lazy" src="webinar.png" className=' transform transition duration-300 hover:scale-110'/>
                          </div>
                        </div>
                        <p className="mt-8">
                          <time className="text-xs text-gray-500" dateTime="2023-03-16">
                            March 16, 2023
                          </time>
                        </p>
                        <h3 className="h2 mt-2 text-xl font-bold leading-6 text-black">
                          Machine Learning Webinar
                        </h3>
                        <p className="mt-2 text-base font-semibold text-blue-500 ">
                          Mr. Anuj Garg
                        </p>
                        <p className="mt-0 text-sm text-gray-500 ">
                          Founder - Code for Cause
                        </p>
                      </a>
                    </li>
                    <li  data-aos="zoom-y-out">
                      <a href="#">
                        <div className="flex items-end justify-center">
                          <div className="flex overflow-hidden">
                            <img alt="#" decoding="async" loading="lazy" src="/Paypal.png" className=' transform transition duration-300 hover:scale-110'/>
                          </div>
                        </div>
                        <p className="mt-8">
                          <time className="text-xs text-gray-500" dateTime="2023-03-16">
                            March 16, 2023
                          </time>
                        </p>
                        <h3 className="h2 mt-2 text-xl font-bold leading-6 text-black">
                          Opening Cermony
                        </h3>
                        <p className="mt-2 text-base font-semibold text-blue-500 ">
                          Mrs. Bhaduri Saravanakumar
                        </p>
                        <p className="mt-0 text-sm text-gray-500 ">
                          Founder - Shevolve
                        </p>
                      </a>
                    </li>
                    <li  data-aos="zoom-y-out">
                      <a href="#">
                        <div className="flex items-end justify-center">
                          <div className="flex overflow-hidden">
                            <img alt="#" decoding="async" loading="lazy" src="/Paypal.png" className=' transform transition duration-300 hover:scale-110'/>
                          </div>
                        </div>
                        <p className="mt-8">
                          <time className="text-xs text-gray-500" dateTime="2023-03-16">
                            March 16, 2023
                          </time>
                        </p>
                        <h3 className="h2 mt-2 text-xl font-bold leading-6 text-black">
                          Opening Cermony
                        </h3>
                        <p className="mt-2 text-base font-semibold text-blue-500 ">
                          Mrs. Bhaduri Saravanakumar
                        </p>
                        <p className="mt-0 text-sm text-gray-500 ">
                          Founder - Shevolve
                        </p>
                      </a>
                    </li>
                    <li className="lgcol-span-2"  data-aos="zoom-y-out">
                      <a href="#">
                        <div className="flex items-end justify-center">
                          <div className="flex overflow-hidden">
                            <img alt="#" decoding="async" loading="lazy" src="/open.png" className=' transform transition duration-300 hover:scale-110'/>
                          </div>
                        </div>
                        <p className="mt-8">
                          <time className="text-xs text-gray-500" dateTime="2023-03-16">
                            March 16, 2023
                          </time>
                        </p>
                        <h3 className="h2 mt-2 text-xl font-bold leading-6 text-black">
                          Opening Cermony
                        </h3>
                        <p className="mt-2 text-base  font-semibold text-blue-500 ">
                          Mr. Patrik Gauri
                        </p>
                        <p className="mt-0 text-sm text-gray-500 ">
                          TedX Speaker
                        </p>
                      </a>
                    </li>
                    <li  data-aos="zoom-y-out">
                      <a href="#">
                        <div className="flex items-end justify-center">
                          <div className="flex overflow-hidden">
                            <img alt="#" decoding="async" loading="lazy" src="webinar.png" className=' transform transition duration-300 hover:scale-110'/>
                          </div>
                        </div>
                        <p className="mt-8">
                          <time className="text-xs text-gray-500" dateTime="2023-03-16">
                            March 16, 2023
                          </time>
                        </p>
                        <h3 className="h2 mt-2 text-xl font-bold leading-6 text-black">
                          Machine Learning Webinar
                        </h3>
                        <p className="mt-2 text-base font-semibold text-blue-500 ">
                          Mr. Anuj Garg
                        </p>
                        <p className="mt-0 text-sm text-gray-500 ">
                          Founder - Code for Cause
                        </p>
                      </a>
                    </li>
                  </ol>
                </div>
              </section>            
          


       
          
  
          </div>
          

          

          
        
        

      </section>
    )
  }
  