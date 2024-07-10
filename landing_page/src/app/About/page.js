import Image from "next/image"

const About = () => {
  return (
    <>
    
    <div className=" flex justify-between px-4 py-5 m-10 items-center ">
                <div>
                    <Image src="/old.jpg" alt="Image secondary" width={500} height={400}/>
                </div>
            <div>
            
               
                <h1 className="text-4xl text-semibold p-5 ">
                    About the Journey
                </h1>
        
                <p>
                  The capacity of leaving heaven in this earth is possible indeed.<br/>

                    people made it so impossible that all the posibility seems lost<br/> 
                    around the seeking of better life forgetting humain capacity and <br/>

                    ability to accomplish and made their Journey enjoyable.<br/>
                    focing everything, by hurting each other , jalousis and so on... 
                </p>
            </div>
    </div>
    </>
    
  )
}

export default About