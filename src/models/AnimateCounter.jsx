import React from 'react'
import CountUp from 'react-countup'


const AnimateCounter = () => {
  return (
    <div className='flex flex-wrap my-40 mr-auto ml-auto w-[var(--container-width)] h-full gap-8 justify-between'>
        <div className='flex flex-col p-16 rounded-xl text-[var(--color-base-content)] bg-[var(--color-base-200)]'>
            <CountUp className='text-5xl' end={2} enableScrollSpy scrollSpyOnce />
            <p className='text px-2 -ml-2'>Years of Experience</p>
            
        </div>
        <div className='flex flex-col p-16 rounded-xl text-[var(--color-base-content)] bg-[var(--color-base-200)]'>
            
            <CountUp className='text-5xl' suffix='+' end={200} enableScrollSpy scrollSpyOnce ></CountUp>
            <p className='px-2 -ml-2'>Satisfied Clients</p>
        </div>
        <div className='flex flex-col p-16 rounded-xl  text-[var(--color-base-content)] bg-[var(--color-base-200)]'>

            <CountUp className='text-5xl' end={8} enableScrollSpy scrollSpyOnce />
            <p className='px-2 -ml-2'>Completed Projects</p>
        </div>
        <div className='flex flex-col p-16 rounded-xl text-[var(--color-base-content)] bg-[var(--color-base-200)]'>

            <CountUp className='text-5xl' end={95} enableScrollSpy scrollSpyOnce />
            <p className='px-2 -ml-2 w-32'>Percentage</p>
        </div>

        
    </div>
  )
}

export default AnimateCounter