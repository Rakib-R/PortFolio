
import { useRef } from 'react'

import work from '../icons/work.png'
import down_arrow from '../icons/down-arrow.png'
import travel from '../icons/travel.png'
import money from '../icons/money.png'
import dream from '../icons/dream.png'

const Header = () => {
  
  const headRef = useRef(null)
  const threeRef = useRef(null)

  return (
  <div id='home' ref={headRef} className='outer_head my-8 ml-auto mr-auto flex flex-col xxl:flex-row w-[var(--container-width)]'> 
  
    {/* LEFT SIDE OF HEADER */}
    <div className='header flex rounded-3xl flex-col px-8 justify-center gap-16 w-full bg-[var(--color-base-200)] xxl:w-1/2 text-7xl'>

      <div className='main_header flex flex-col gap-4'>
          <div className='py-2'></div>
          <div className='inline-flex absolute h-24 ml-80 overflow-hidden'>

            <div className='animation inline-flex flex-col absolute gap-8'>
                  
                    <div className='flex justify-between'>
                      <img src={dream} alt="" width={70} heigh={70}/>
                      <span className=''>Carear</span>
                    </div>
                    <div className='flex gap-4'>
                      <img src={money} width={70} height={70} alt="" />
                      <span className=''>Dream </span>
                    </div>
                    <div className='flex gap-4'>
                      <img src={work} alt="" width={70} height={70} />
                      <span>Work</span>
                    </div>
                    <div className='flex gap-4'>
                    {/* <i class="fa-sharp fa-solid fa-user fa-etch fa-lg" style={{color:'white'}}></i> */}
                      <img src={travel} alt="" width={70} height={70}/>
                      <span>Travel</span>
                    </div>
                       </div>
          </div>
          <div>Sonner not Later</div>
        </div>

        <div className='sub_header flex flex-col gap-8'>

          <div className="text-3xl font-bold basis-16" >Hi , I Am .... Developer ,Will Work for food</div>
         <div>
         </div>
         
         
          <div className='flex basis-16 gap-16'>
            <button className='text-3xl '> Start Now </button>
            <div className='flex justify-center w-24 h-20 origin-center'>
            <img className='rotate-90 bg-[var(--color-base-content)] p-1' src={down_arrow} height={120} width={120} alt="" />

            </div>
          </div>
        </div>
    </div>
    
      {/* RIGHT SIDE OF THREE JS */}
    
      <div ref={threeRef} className='thress_js w-full xxl:w-1/2 h-[calc(100vh-6rem)] '>

      </div>
  
    </div>
  )
}

export default Header