import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'
import TestimonialImage1 from '@/public/images/testimonial1.jpg'
import Hari from '@/public/images/hari.jpeg'
import Hari1 from '@/public/images/hari1.jpeg'
import Gaj from '@/public/images/gajendar.jpg'
import Gaj1 from '@/public/images/gajendar1.jpg'
import Sab from '@/public/images/sabaree.jpg'
import Sab1 from '@/public/images/sabaree1.jpg'
import Vish from '@/public/images/vishnu.jpg'
import Vish1 from '@/public/images/vishnu1.jpg'
import Sam from '@/public/images/sampathsir.jpg'
import Sam1 from '@/public/images/sampathsir1.jpg'
import Mam from '@/public/images/summiamam.jpg'
import Mam1 from '@/public/images/summiamam1.jpg'
import Viv from '@/public/images/viveksir.png'
import Viv1 from '@/public/images/viveksir1.png'
import Adi from '@/public/images/adhi.jpg'
import Adi1 from '@/public/images/adhi1.jpg'
import TestimonialImg01 from '@/public/images/testimonial-01.jpg'
import TestimonialImg02 from '@/public/images/testimonial-02.jpg'
import TestimonialImg03 from '@/public/images/testimonial-03.jpg'
import FancyTestimonialsSlider from '@/components/fancy-testimonials-slider'

export default function Team(){

    return(
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-20">
               <div className="py-12 md:py-20">

               <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4 " data-aos="zoom-y-out">Our Team</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out" >Meet Our Stellar Team: Trailblazers in Tech, Innovators at Heart.</p>
          </div>

          <div className="items-center w-full px-5 py-4 mb-20 mx-auto md:px-12 lg:px-16 max-w-7xl">
                  <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                    <li>
                      <div className="space-y-4">
                        <div className="aspect-[3/2] overflow-hidden ">
                          <img className="object-cover w-full h-full transition-transform duration-300 transform-gpu hover:scale-110" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                        </div>
                        <div className="inline-flex items-start justify-between w-full">
                          <div className="space-y-1">
                            <h3 className="text-lg font-medium leading-6 text-black">
                              Annur Flint
                            </h3>
                            <p className="text-base text-gray-500">
                              CEO at Flint LLC
                            </p>
                          </div>
                          <div>
                            <ul role="list" className="flex space-x-5">
                              <li>
                              <a href="https://www.linkedin.com/company/innovation-geeks-private-ltd" className="flex justify-center items-center text-gray-600 hover:text-blue-500   transition duration-150 ease-in-out" aria-label="LinkedIn" target="_blank">
                                <svg className="w-8 h-8 fill-current" viewBox="-8 -8 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg>
                               </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="space-y-4">
                        <div className="aspect-[3/2] overflow-hidden">
                          <img className="object-cover w-full h-full transition-transform duration-300 transform-gpu hover:scale-110" src="https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                        </div>
                        <div className="inline-flex items-start justify-between w-full">
                          <div className="space-y-1">
                            <h3 className="text-lg font-medium leading-6 text-black">
                              Annur Flint
                            </h3>
                            <p className="text-base text-gray-500">
                              CEO at Flint LLC
                            </p>
                          </div>
                          <div>
                            <ul role="list" className="flex space-x-5">
                              <li>
                              <a href="https://www.linkedin.com/company/innovation-geeks-private-ltd" className="flex justify-center items-center text-gray-600 hover:text-blue-500   transition duration-150 ease-in-out" aria-label="LinkedIn" target="_blank">
                                <svg className="w-8 h-8 fill-current" viewBox="-8 -8 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg>
                               </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="space-y-4">
                        <div className="aspect-[3/2] overflow-hidden">
                          <img className="object-cover w-full h-full transition-transform duration-300 transform-gpu hover:scale-110" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
                        </div>
                        <div className="inline-flex items-start justify-between w-full">
                          <div className="space-y-1">
                            <h3 className="text-lg font-medium leading-6 text-black">
                              Annur Flint
                            </h3>
                            <p className="text-base text-gray-500">
                              CEO at Flint LLC
                            </p>
                          </div>
                          <div>
                            <ul role="list" className="flex space-x-5">
                              <li>
                              <a href="https://www.linkedin.com/company/innovation-geeks-private-ltd" className="flex justify-center items-center text-gray-600 hover:text-blue-500   transition duration-150 ease-in-out" aria-label="LinkedIn" target="_blank">
                                <svg className="w-8 h-8 fill-current" viewBox="-8 -8 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg>
                               </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="space-y-4">
                        <div className="aspect-[3/2] overflow-hidden">
                          <img className="object-cover w-full h-full transition-transform duration-300 transform-gpu hover:scale-110" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                        </div>
                        <div className="inline-flex items-start justify-between w-full">
                          <div className="space-y-1">
                            <h3 className="text-lg font-medium leading-6 text-black">
                              Annur Flint
                            </h3>
                            <p className="text-base text-gray-500">
                              CEO at Flint LLC
                            </p>
                          </div>
                          <div>
                            <ul role="list" className="flex space-x-5">
                              <li>
                              <a href="https://www.linkedin.com/company/innovation-geeks-private-ltd" className="flex justify-center items-center text-gray-600 hover:text-blue-500   transition duration-150 ease-in-out" aria-label="LinkedIn" target="_blank">
                                <svg className="w-8 h-8 fill-current" viewBox="-8 -8 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg>
                               </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>                    
                    <li>
                      <div className="space-y-4">
                        <div className="aspect-[3/2] overflow-hidden">
                          <img className="object-cover w-full h-full transition-transform duration-300 transform-gpu hover:scale-110" src="https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                        </div>
                        <div className="inline-flex items-start justify-between w-full">
                          <div className="space-y-1">
                            <h3 className="text-lg font-medium leading-6 text-black">
                              Annur Flint
                            </h3>
                            <p className="text-base text-gray-500">
                              CEO at Flint LLC
                            </p>
                          </div>
                          <div>
                            <ul role="list" className="flex space-x-5">
                              <li>
                              <a href="https://www.linkedin.com/company/innovation-geeks-private-ltd" className="flex justify-center items-center text-gray-600 hover:text-blue-500   transition duration-150 ease-in-out" aria-label="LinkedIn" target="_blank">
                                <svg className="w-8 h-8 fill-current" viewBox="-8 -8 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg>
                               </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="space-y-4">
                        <div className="aspect-[3/2] overflow-hidden">
                          <img className="object-cover w-full h-full transition-transform duration-300 transform-gpu hover:scale-110" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
                        </div>
                        <div className="inline-flex items-start justify-between w-full">
                          <div className="space-y-1">
                            <h3 className="text-lg font-medium leading-6 text-black">
                              Annur Flint
                            </h3>
                            <p className="text-base text-gray-500">
                              CEO at Flint LLC
                            </p>
                          </div>
                          <div>
                            <ul role="list" className="flex space-x-5">
                              <li>
                              <a href="https://www.linkedin.com/company/innovation-geeks-private-ltd" className="flex justify-center items-center text-gray-600 hover:text-blue-500   transition duration-150 ease-in-out" aria-label="LinkedIn" target="_blank">
                                <svg className="w-8 h-8 fill-current" viewBox="-8 -8 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg>
                               </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>                                       
                  </ul>
                </div>



        
            </div>
            </div>
            
            

        </section>
    )
}