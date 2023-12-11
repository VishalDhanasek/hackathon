export const metadata = {
    title: 'About Us',
    description: 'Page description',
  }
  
  import Link from 'next/link'
  import Image from 'next/image';
  import Footer from '@/components/ui/footer';
  import Team from '@/components/our-team';
  import Banner1 from '@/components/banner1';

  
  export default function AboutUs() {
    return (
      <section className="relative">
        





        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="">
            



        {/* Section header */}
        <section className="overflow-hidden  pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]  " data-aos="zoom-y-out">

          
        

        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl "
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl "
                    />
                  </div>
                </div>
              </div>
            </div>
            
        
                   

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
              <div className="relative inline-flex text-indigo-500 font-semibold">
                            About Us
                            <svg className="fill-indigo-300 absolute top-full w-full" xmlns="http://www.w3.org/2000/svg" width="166" height="4">
                                <path d="M98.865 1.961c-8.893.024-17.475.085-25.716.182-2.812.019-5.023.083-7.622.116l-6.554.067a2910.9 2910.9 0 0 0-25.989.38c-4.04.067-7.709.167-11.292.27l-1.34.038c-2.587.073-4.924.168-7.762.22-2.838.051-6.054.079-9.363.095-1.994.007-2.91-.08-3.106-.225l-.028-.028c-.325-.253.203-.463 1.559-.62l.618-.059c.206-.02.42-.038.665-.054l1.502-.089 3.257-.17 2.677-.132c.902-.043 1.814-.085 2.744-.126l1.408-.06c4.688-.205 10.095-.353 16.167-.444C37.413 1.22 42.753.98 49.12.824l1.614-.037C54.041.707 57.588.647 61.27.6l1.586-.02c4.25-.051 8.53-.1 12.872-.14C80.266.4 84.912.373 89.667.354l2.866-.01c8.639-.034 17.996 0 27.322.03 6.413.006 13.168.046 20.237.12l2.368.027c1.733.014 3.653.05 5.712.105l2.068.064c5.89.191 9.025.377 11.823.64l.924.09c.802.078 1.541.156 2.21.233 1.892.233.29.343-3.235.364l-3.057.02c-.446.003-.89.008-1.33.014a305.77 305.77 0 0 1-4.33-.004c-2.917-.005-5.864-.018-8.783-.019l-4.982.003a447.91 447.91 0 0 1-3.932-.02l-4.644-.023-4.647-.014c-9.167-.026-18.341-.028-26.923.03l-.469-.043Z" />
                            </svg>
                        </div>
                <h2 className="h2 mb-9 mt-2 " data-aos="zoom-y-out">Our Story</h2>
                <p className="mb-7 text-lg text-gray-600">
                Welcome to the collaborative hackathon brought to you by the dynamic alliance of three visionary companies
                 – Innovation Geeks, StartNet, and Growbinar. Together, we are igniting the spark of innovation, fostering 
                 entrepreneurial spirit, and creating a platform where groundbreaking ideas come to life.
                </p>
                <p className="mb-7 text-lg text-gray-600">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
                <p className="mb-0 text-lg text-gray-600">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Brands Section Start */}

      
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4" data-aos="zoom-y-out">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
              <a href="https://www.innovationgeeks.in/" className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px] mt-5 mb-5">
                <img src="/ig.png" alt="brand" className="w-full h-10" />
              </a>
              <a href="#" className="mx-0 flex w-[250px] items-center justify-center 2xl:w-[180px] mb-5  ">
                <img src="/x.png" alt="brand" className="w-10 h-10" />
              </a>
              <a href="https://startnet.in/" className="mx-4 flex w-[150px] items-center justify-center mb-5 2xl:w-[180px]">
                <img src="startnet.png" alt="brand" className="w-full h-full" />
              </a>
              <a href="#" className="mx-0 flex w-[250px] items-center justify-center mb-5  ">
                <img src="/x.png" alt="brand" className="w-10 h-10" />
              </a>
              <a href="#" className="mx-4 flex w-[150px] items-center justify-center mb-5 2xl:w-[180px]">
                <img src="/growbinar.png" alt="brand" className="w-full h-full" />
              </a>
              </div>
            </div>
          </div>
        </div>
     
      {/* ====== Brands Section End */}


          <Team />

          
  
          </div>


        </div>

      </section>
    )
  }
  