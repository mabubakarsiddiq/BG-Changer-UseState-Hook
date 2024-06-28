import { useState } from 'react'


function BgChanger() {
    const [color, setcolor] = useState(" black")
  
    return (
      <>
          <div className="w-full duration-300 h-screen "
          style={{backgroundColor: color}}>
         
        <div className='w-4/3 h-12 flex justify-center items-center flex-wrap p-3 to-transparent '>
            <button onClick={() => setcolor("red")}  className='bg-red-600 px-10 py-2 rounded-md font-serif font-bold mx-2 text-black'
            style={{backgroundColor: "red"}}>
            RED</button>
            <button onClick={() => setcolor("blue")}  className='bg-blue-600 px-10 py-2 rounded-md font-serif font-bold mx-2 text-black'
            style={{backgroundColor: "blue"}}>
            BLUE</button>
            <button  onClick={() => setcolor("yellow")} className='bg-yellow-500 px-10 py-2 rounded-md font-serif font-bold mx-2 text-black'
            style={{backgroundColor: "yellow"}}>
            YELLOW</button>
            <button onClick={() => setcolor("green")}  className='bg-green-600 px-10 py-2 rounded-md font-serif font-bold mx-2 text-black'
            style={{backgroundColor: "green"}}>
            GREEN</button>
            <button onClick={() => setcolor("gray")}  className='bg-gray-600 px-10 py-2 rounded-md font-serif font-bold mx-2 text-black'
            style={{backgroundColor: "gray"}}>
            GRAY</button>

        </div>
          </div>
      </>
    )
  }
  
  export default BgChanger
