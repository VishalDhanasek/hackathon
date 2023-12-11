export const metadata = {
    title: 'Bill Smart',
    description: 'Page description',
  }
  
  import Link from 'next/link'
  import Image from 'next/image';
  import Footer from '@/components/ui/footer';
  import Team from '@/components/our-team';
  import Banner1 from '@/components/banner1';
  import FeaturesBlocks from '@/components/features-blocks'

  
  export default function BillSmart() {
    return (
      <section className="relative">


              {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[1100px] pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>





        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">


        {/* Section header */}
          <div className="text-center pb-12 md:pb-19">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Revolutionize Self-Service Billing using<br></br> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Bill Smart</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8"  data-aos="zoom-y-out" data-aos-delay="150">Unleash the Future of Seamless Self-Service Billing: Elevate Customer Engagement, Boost Operational Efficiency, and Foster Growth Across Diverse Industries with Bill Smart's Cutting-Edge Smart Billing Software</p>
            </div>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="/contactus">Start free trial</a>
                </div>
              </div>
          </div>


          <div className="w-full mx-auto mt-30 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8 shadow hover:shadow-2xl" data-aos="zoom-y-out">
                <div className="relative overflow-hidden shadow-2xl">
                    <div className="flex items-center flex-none px-4 bg-purple rounded-b-none h-11 rounded-xl">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                        </div>
                    </div>
                    <img src="./herobill1.png" alt="image" width='full' height='full' />
                </div>
            </div>
        </div>
        
        <div className="pt-12 md:pt-20 md:pt-40" data-aos="zoom-y-out">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Why Choose Bill Smart?</h1>
          </div>




    <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div>
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Customizable Product Selection</h2>
      <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
      Tailor the interface to expertly showcase your diverse range of products or services, skillfully enhancing the customer experience and decisively amplifying sales in a harmonious fusion of innovation and engagement.
      </p>
    </div>
    <div className="w-full h-full py-38 bg-white-200">
    <div className="relative z-0 w-full mt-8 shadow hover:shadow-2xl" data-aos="zoom-y-out">
                <div className="relative overflow-hidden shadow-2xl">
                    <div className="flex items-center flex-none px-4 bg-purple rounded-b-none h-11 rounded-xl">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                        </div>
                    </div>
                    <img src="/Product.png" alt="image" width='full' height='full' />
                </div>
            </div>
    </div>
  </div>

  <div className="grid flex-col-reverse items-center mb-24 grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div className="order-none md:order-2">
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Analytics Dashboard</h2>
      <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
      Gain invaluable and actionable insights into intricate customer preferences, real-time trends encompassing popular products, and meticulously identified peak operational hours.
      </p>
    </div>
    <div className="w-full h-full py-38 bg-white-200">
    <div className="relative z-0 w-full mt-8 shadow hover:shadow-2xl" data-aos="zoom-y-out">
                <div className="relative overflow-hidden shadow-2xl">
                    <div className="flex items-center flex-none px-4 bg-purple rounded-b-none h-11 rounded-xl">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                        </div>
                    </div>
                    <img src="/Product1.png" alt="image" width='full' height='full' />
                </div>
            </div>
    </div>
  </div>

  <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div>
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Remote Management</h2>
      <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
      Effortlessly monitor and expertly manage all facets of your operations remotely, thereby ensuring unparalleled operational smoothness and efficiency, while effectively minimizing any potential downtime.
      </p>
    </div>
    <div className="w-full h-full py-38 bg-white-200 sm:items-center">
    <div className="relative z-0 w-full mt-8 shadow hover:shadow-2xl" data-aos="zoom-y-out">
                <div className="relative overflow-hidden shadow-2xl">
                    <div className="flex items-center flex-none px-4 bg-purple rounded-b-none h-11 rounded-xl">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                        </div>
                    </div>
                    <img src="/Product2.png" alt="image" width='full' height='full' />
                </div>
            </div>
    </div>
  </div>


          






          
        </div>
          
  
          </div>

          

          
        </div>
        

      </section>
    )
  }
  