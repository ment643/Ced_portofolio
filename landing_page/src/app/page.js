import Image from "next/image"

function Home() {
  return (
 <div className="flex flex-col gap-20  w-full h-full justify-center items-center ">
    <div>
      <h1 className="text-6xl font-bold">Reprogramming your brain</h1>
        <h2 className="text-4xl font-semibold flex justify-center  m-5">
         Take control of your power
      </h2>
    </div>
    <div>
      <Image src="/main.jpg" alt="Main image" width= {300} height ={200}/>
     <div className="flex justify-center">
       <button className=" bg-transparent hover:bg-white p-4 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5">start</button>
     </div> 
     
      </div>
      
    
   </div> 


  )
}

export default Home







