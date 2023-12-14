import AboutMe from '@/components/main/Aboutme'
import Contact from '@/components/main/Contact'
import Encryption from '@/components/main/Encryption'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col  gap-20'>
        <Hero />
        <AboutMe/>
        <Skills/>
        <Encryption />
        <Projects />
      </div>      
    </main>
  )
}
