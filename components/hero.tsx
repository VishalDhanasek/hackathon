import VideoThumb from '@/public/images/hero-image.png'
import Group from '@/public/images/group.png'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute bottom-0 pointer-events-none " aria-hidden="true">
      <img className="max-w-full fill-current opacity-[0.06]" src="/black1.png" >
    
    </img>
        
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 content-center">


{/* Items */}
<div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-4">

{/* Item */}
<div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
  <img className="max-w-full fill-current text-gray-400" src="/ig.png" width="124" height="24">
    
  </img>
</div>

{/* Item */}
<div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
  <img className="max-w-full fill-current text-gray-400" src="/startnet.png" width="124" height="24">
    
  </img>
</div>

{/* Item */}
<div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
  <img className="max-w-full fill-current text-gray-400" src="/startuptn.png" width="174" height="24">
    
  </img>
</div>

{/* Item */}
<div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
  <img className="max-w-full fill-current text-gray-400" src="/growbinar.png" width="174" height="24">
    
  </img>
</div>


</div>
          
        


          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Tamilnadu's Most Awaited Hackathon<br></br> <span className="text-4xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">SparkX 2024</span></h1>
            <div className="max-w-3xl mx-auto mt-10 mb-12">
            <div className="max-w-xl mx-auto content-center">
        <div className="text-center mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 px-4 mt-1 mb-10  text-lg text-gray-600" data-svelte-h="svelte-p2unhs"><p><time dateTime="01-09-2024">01</time>-<time dateTime="02-09-2024">02 of Sept, 2024</time></p> <svg aria-hidden="true" viewBox="0 0 6 6" className="h-1.5 w-1.5 overflow-visible fill-current stroke-current hidden sm:block"><path d="M3 0L6 3L3 6L0 3Z" stroke-width="2" stroke-linejoin="round"></path></svg> <p>Codissia, Coimbatore</p></div>
        </div>
              
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto sm:ml-4" href="/register">Register Now</a>
                </div>
              </div>
            </div>
          </div>

          
        </div>

      </div>
    </section>
  )
}