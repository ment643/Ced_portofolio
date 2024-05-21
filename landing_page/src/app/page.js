import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen bg-image flex  flex-col ga-p-5">
    
    
 {/*TEXT CONTAINER*/}
<div className="h-1/2 text-white relative">
   
    {/*TITLE*/}
    <h1 className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter p-10">Cedick <br/><span>Ngoma</span></h1>

</div>
  
{/*image CONTAINER*/}
 
<div className="h-1/2 text-white p-5 flex flex-col">
  <Image src="/cedColor.png" alt="" fill className="object-contain p-5"/>

{/*DESCRIPTION*/}
   <h1 className="font-bold p-10">Web Developer and Production Designer <br/>based in your City</h1>
</div>
    
</div>
  )
}

