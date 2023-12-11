'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'
import Ballet from '@/public/images/BalletDoodle.png'
import Bg1 from '@/public/images/Frame.png'
import image1 from '@/public/images/Frame13.png'
import image2 from '@/public/images/Frame14.png'
import image3 from '@/public/images/Frame16.png'
import Slider from './slider'

export default function Features() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-1 md:pb-1">
            <h1 className="h2 mb-4">Why attend SparkX?</h1>
            <p className="text-xl text-gray-600">Whether you're a startup with a groundbreaking concept or an established business seeking to modernize, our team of talented developers is ready to bring your vision to life.</p>
          </div>

          <Slider />

        </div>
      </div>
    </section>
  )
}