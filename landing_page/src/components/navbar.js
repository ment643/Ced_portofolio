
import Link from "next/link"

const Navbar = () => {

    const links = [{
        url:"/", tittle:"Home"},
       { url: "/About", tittle:"About"},
       { url: "/Projects", tittle:"Projects "
    }]
  return (
   <div className="h-full flex items-center  justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
   <div className="">
     <Link href="/" className="text-sm bg-black rounded p-1 font-semibold">
     <span className="text-white">CedDev</span>

     </Link>
   </div>
   
    {/*LINKS*/}
    <div className="flex justify-end  gap-10">
         { links.map(link => <Link href={link.url} key={link.tittle} >
       {link.tittle}

       </Link>)}
       
    </div>
      
   

   </div>

  )
}

export default Navbar
