import Image from "next/image";
import Link from "next/link";


const Homepage = () => {
  return (
    
 <div className="h-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-10 ">
  
      {/*IMAGE CONTAINER*/}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative " >
          <Image src="/cedB&w.png" alt="" fill className="object-contain"/>

     </div>
      {/*TEXT CONTAINER*/}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
     {/*TITLE*/}
     <h1 className="text-4xl md:text-6xl font-bold">I'm Cedrick Ngoma</h1>
    <h2 className="md:text-xl w-full">Web Developer & Designer  in your city</h2>
  {/*DESCRIPTION*/}
  <div className="flex w-full gap-4">
     <Link href="/About">
      <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">About me</button>
     </Link>
     <Link href="/Projects">

         <button  className="p-4 rounded-lg ring-1 ring-black">my projects</button>
     </Link>
      
  </div>
    
    </div>
  

  </div>
  )
}


export default Homepage;