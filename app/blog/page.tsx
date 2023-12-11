export const metadata = {
    title: 'Blog',
    description: 'Page description',
  }
  
  import Link from 'next/link'
  import Image from 'next/image';
  import Footer from '@/components/ui/footer';
  import Team from '@/components/our-team';
  import Newsletter1 from '@/components/newsletter1';
  import FeaturesBlocks from '@/components/features-blocks'


  
  export default function Blog() {
    return (
      <section className="relative">


        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-20 md:pb-20">

    <div className="mt-12">
      {/*featured section */}
      <div className="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16" data-aos="zoom-y-out">
         {/* main post */}
        <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
          <img src="/blog1.jpeg" className="rounded-md object-cover w-full h-64 "/>
          <span className="text-gray-600 mb-2 text-sm hidden md:block mt-4"> Technology </span>
          <h1 className="text-gray-800 text-4xl font-extrabold leading-tighter tracking-tighter mt-2 mb-2 leading-tight">
          Understanding YOLO Algorithm: Revolutionizing Object Detection in Machine Learning
          </h1>
          <p className="text-gray-600 mb-4">
          In the realm of machine learning, object detection has always posed a significant challenge. 
          The ability to not only identify objects within an image but also accurately locate them is a fundamental task with a multitude of real-world applications. 
          </p>
          <a href="/blog/yolo" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800">
          <span>Read More</span>
          </a>
        </div>


      </div>
       {/* end featured section */}


       {/* recent posts */}
      <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between" data-aos="zoom-y-out">
        <h2 className="font-extrabold leading-tighter tracking-tighter text-3xl">Latest Blogs</h2>
        <a className="hover:underline text-black-800 px-3 py-1 rounded cursor-pointer">
          View all
        </a>
      </div>
      <div className="block space-x-0 lg:flex lg:space-x-6" data-aos="zoom-y-out">

        <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img src="/blog2.jpg" className="rounded " alt="technology" />
          <div className="p-4 pl-0">
            <h2 className="font-extrabold leading-tighter tracking-tighter text-2xl text-gray-800">The Julia Language: Unleashing Speed and Productivity in Scientific Computing</h2>
            <p className="text-gray-700 mt-2">
            In the ever-evolving landscape of programming languages, a relatively new entrant has been gaining momentum and turning heads....
            </p>

            <a href="/blog/julia" className="inline-block py-2 rounded text-black-900 mt-2 ml-auto hover:underline"> Read more </a>
          </div>
        </div>

        <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded" alt="technology" />
          <div className="p-4 pl-0">
            <h2 className="font-extrabold leading-tighter tracking-tighter text-2xl text-gray-800">Is at purse tried jokes china ready decay an. </h2>
            <p className="text-gray-700 mt-2">
              Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in. 
              Procured shutters mr it feelings. To or three offer house begin taken am at. 
            </p>

            <a href="#" className="inline-block py-2 rounded text-black-900 mt-2 ml-auto hover:underline"> Read more </a>
          </div>
        </div>

        <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="rounded" alt="technology" />
          <div className="p-4 pl-0">
            <h2 className="font-extrabold leading-tighter tracking-tighter text-2xl text-gray-800">As dissuade cheerful overcame so of friendly he indulged unpacked.</h2>
            <p className="text-gray-700 mt-2">
              Alteration connection to so as collecting me. 
              Difficult in delivered extensive at direction allowance. 
              Alteration put use diminution can considered sentiments interested discretion.
            </p>

            <a href="#" className="inline-block py-2 rounded text-black-900 mt-2 ml-auto hover:underline"> Read more </a>
          </div>
        </div>

      </div>
       {/*end recent posts*/}

       {/* subscribe */}
      
       {/* ens subscribe section */}



       {/* popular posts */}
      <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between" data-aos="zoom-y-out">
        <h2 className="font-extrabold leading-tighter tracking-tighter text-3xl">Popular Blogs</h2>
        <a className="hover:underline text-black-800 px-3 py-1 rounded cursor-pointer">
          View all
        </a>
      </div>
      <div className="block space-x-0 lg:flex lg:space-x-6" data-aos="zoom-y-out">

        <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded" alt="technology" />
          <div className="p-4 pl-0">
            <h2 className="font-extrabold leading-tighter tracking-tighter text-2xl text-gray-800">Put all speaking her delicate recurred possible.</h2>
            <p className="text-gray-600 mt-2">
              Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
              So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
            </p>

            <a href="#" className="inline-block py-2 rounded text-black-900 mt-2 ml-auto hover:underline"> Read more </a>
          </div>
        </div>

        <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded" alt="technology" />
          <div className="p-4 pl-0">
            <h2 className="font-extrabold leading-tighter tracking-tighter text-2xl text-gray-800">Is at purse tried jokes china ready decay an. </h2>
            <p className="text-gray-600 mt-2">
              Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in. 
              Procured shutters mr it feelings. To or three offer house begin taken am at. 
            </p>

            <a href="#" className="inline-block py-2 rounded text-black-900 mt-2 ml-auto hover:underline"> Read more </a>
          </div>
        </div>

        <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="rounded" alt="technology" />
          <div className="p-4 pl-0">
            <h2 className="font-extrabold leading-tighter tracking-tighter text-2xl text-gray-800">As dissuade cheerful overcame so of friendly he indulged unpacked.</h2>
            <p className="text-gray-600 mt-2">
              Alteration connection to so as collecting me. 
              Difficult in delivered extensive at direction allowance. 
              Alteration put use diminution can considered sentiments interested discretion.
            </p>

            <a href="#" className="inline-block py-2 rounded text-black-900 mt-2 ml-auto hover:underline"> Read more </a>
          </div>
        </div>

      </div>
      

    </div>
  

  </div>


       
          
  
          </div>
          <Newsletter1 />

          

          
        
        

      </section>
    )
  }
  