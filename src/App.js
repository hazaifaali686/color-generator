import React, { useState } from 'react'
import Values from 'values.js'
import SetlistColors from './SetlistColors'

export default function App() {
  const [color,setColor]=useState('')
  const [error,seterror]=useState(false)
  const [list,setList]=useState(new Values('#f15025').all(10))

  const handleSubmit=(e)=>{
    e.preventDefault()
    try{
      let colors=new Values(color).all(10)
      setList(colors)

    }
    catch(error){
      seterror(true)
      console.log(error);
    }
  }

  return (
    <div className='w-[100%] h-[100vh] bg-[aliceblue]'>
      <form onClick={handleSubmit} className='w-[100%] flex items-center justify-center h-[20vh]'>
        <h1 className='text-[36px] font-semibold'>Color Generator</h1>
        <input type={'text'} onChange={(e)=>setColor(e.target.value)} className='w-[400px] rounded-md ml-3 h-[40px] border-2' />
        <button className='w-[70px] h-[40px] text-white bg-[cadetblue]'>Submit</button>
      </form>
      <div className='flex flex-wrap'>
        {
          list.map((ele,indx)=>{
            return(
              <SetlistColors key={indx} {...ele} index={indx} hexColor={ele.hex} />
            )
          })
        }
      </div>
    </div>
  )
}
