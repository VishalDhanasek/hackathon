export const metadata = {
  title: 'Home',
  description: 'Innovation Geeks - Unlocking Your Digital Potential',
  kewwords: 'Innovation Geeks, IG'
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import FancyTestimonialSliderPage from '@/app/fancy-testimonials-slider/page'
import Team from '@/components/our-team'
import Timeline from '@/components/timeline'
import Themes from '@/components/themes'
import Banner123 from '@/components/banner123'
import Takeaway from '@/components/takeaway'
import New from '@/components/ui/new'




export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Themes/>
      <New/>
      <Testimonials />
      <Timeline/>
      <Takeaway/>
      <Banner123/>
      

      
      
    </>
  )
}
