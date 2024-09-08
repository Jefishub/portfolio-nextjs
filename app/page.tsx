'use client'
import Image from 'next/image'
import myImage from '../public/img/JereWSP.jpg'
import { MainText } from './components/mainText'
import { JobsWrapper } from './components/jobs/JobsWrapper'

export default function Page() {
  return (
    <section className='flex flex-col gap-4'>
      <div>
        <h1 className="text-2xl font-semibold tracking-tighter">
          Jere Manni
        </h1>
        <div>MSc Physics, BBA (Information Technology)</div>
      </div>
      <Image src={myImage} alt={'My image'} className='rounded-lg' />
      <MainText />
      <div className='mt-8'>        
        <JobsWrapper />
      </div>
    </section>
  )
}
