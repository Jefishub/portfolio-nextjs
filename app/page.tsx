import Image from 'next/image'
import myImage from '../public/img/JereWSP.jpg'
import { MainText } from './components/mainText'
import { JobsWrapper } from './components/jobs/JobsWrapper'

export default function Page() {
  return (
    <main className='flex flex-col gap-4'>
      <div>
        <h1 className="text-2xl font-semibold tracking-tighter">
          Jere Manni
        </h1>
        <div className='text-xs'>MSc. Physics</div>
        <div className='text-xs'>BBA Information Technology</div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <Image src={myImage} alt={'My image'} className='rounded-lg w-full max-w-80 order-1 sm:order-3' />
        <MainText />
      </div>
      <div className='mt-8'>
        <JobsWrapper />
      </div>
    </main>
  )
}
