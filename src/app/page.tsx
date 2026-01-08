"use client"

import { useState, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Lenis from "lenis"

import HeroLogo from "@/components/HeroLogo"
import Loader from "@/components/Loading"
import Hero from "@/sections/Hero"
import Numbers from "@/sections/Numbers"
import Viral from "@/sections/Viral"
import About from "@/sections/About"
import Services from "@/sections/Services"
import Originals from "@/sections/Originals"
import Clients from "@/sections/Clients"
import BarAnimation from "@/sections/BarAnimation"
import Footer from "@/sections/Footer"
import Form from "@/sections/Form"
import Clipsnreels from "@/sections/Clipsnreels"
import OurClientSays from "@/sections/OurClientSays"
import NavBar from "@/components/NavBar"

gsap.registerPlugin(ScrollTrigger)

const Page = () => {
  const [logoColor, setLogoColor] = useState("#F5FF8C")
  const pageRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      ScrollTrigger.clearScrollMemory()

      // LENIS
      const lenis = new Lenis({
        autoRaf: false,
        lerp: 0.01,
        duration: 3,
        smoothWheel: true,
        wheelMultiplier: 1,
      })

      let rafId: number

      const raf = (time: number) => {
        lenis.raf(time)
        ScrollTrigger.update()
        rafId = requestAnimationFrame(raf)
      }

      rafId = requestAnimationFrame(raf)

      const colorMap = {
        Yellow: "#F5FF8C",
        Dark: "#1A2027",
        Green: "#1F9270",
      }

      const sections = [
        { id: "#hero", color: colorMap.Yellow },
        { id: "#numbers-section", color: colorMap.Yellow },
        { id: "#bar-section", color: colorMap.Dark },
        { id: "#viral-section", color: colorMap.Dark },
        { id: "#about-section", color: colorMap.Green },
        { id: "#services-section", color: colorMap.Yellow },
        { id: "#client-section", color: colorMap.Green },
        { id: "#ourclientsays-section", color: colorMap.Green },
        { id: "#originals-section", color: colorMap.Yellow },
        { id: "#Clipsnreels", color: colorMap.Yellow },
        { id: "#form-section", color: colorMap.Green },
        { id: "#footer-section", color: colorMap.Yellow },
      ]

      sections.forEach((s) => {
        ScrollTrigger.create({
          trigger: s.id,
          start: "top 15%",
          end: "bottom 15%",
          onToggle: (self) => {
            if (self.isActive) setLogoColor(s.color)
          },
        })
      })

      return () => {
        cancelAnimationFrame(rafId)
        lenis.destroy()
      }
    },
    {
      scope: pageRef,
      revertOnUpdate: true,
    }
  )

  return (
    <div ref={pageRef}>
      <Loader />

      <div className="h-screen">
        <HeroLogo color={logoColor} />
        <Hero id="hero" themeColor="Yellow" />
        <NavBar themeColor="Yellow" />
      </div>

      <Numbers id="numbers-section" />
      <BarAnimation id="bar-section" />
      <Viral id="viral-section" />
      <About id="about-section" />
      <Services id="services-section" />
      <OurClientSays id="ourclientsays-section" />
      <Clients id="client-section" />
      <Originals id="originals-section" />
      <Clipsnreels id="Clipsnreels" />
      <Form id="form-section" />
      <Footer id="footer-section" />
    </div>
  )
}

export default Page
