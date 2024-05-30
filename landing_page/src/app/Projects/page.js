import Form from "./form";


const MyProjects = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
         <div>
             <h1 className=" text-3xl text-extrabold ">
                 Hi there, we would like to test our Applications projects <br/>please fill up the form below

            </h1>
           
         </div>
         
         <div>
            <Form />
         </div>
        </div>
     );
}
 
export default MyProjects;