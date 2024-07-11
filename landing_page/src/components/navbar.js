
import Link from "next/link"

const Navbar = () => {

    const links = [{
        url:"/", tittle:"Home"},
       { url: "/About", tittle:"About"},
       { url: "/Action", tittle:"Action "
    }]
  return (
   <div className="h-full flex items-center  justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
   <div className="">
     <Link href="/" className="text-sm rounded p-1 font-semibold">
     <span className="bg-black hover:bg-gray-500 text-white p-1 rounded-md">CedDev</span>

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
