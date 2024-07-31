import { Link } from "react-router-dom"
import Cards from "./Cards"

const HomeCards = () => {
  return (
    <section className="md:h-64 w-full   p-2">
         {/* <!-- card container --> */}
     <div className=" justify-between items-center sm:w-5/6  sm:h-5/6 p-2 my-2  mx-auto   sm:flex-row flex flex-col w-full h-auto ">
         {/* <!-- cards --> */}
         <Cards>
         <h4 className="m-2 my-1 py-1 font-extrabold text-xl font-serif capitalize p-2">
                 for developers
             </h4>
             <p className="p-2 whitespace-nowrap m-2 my-1 text-xs font-light"> 
                 Browse our React jobs and start a career today
             </p>
             <Link to="/jobs" className="h-auto text-center my-2 block w-32 m-2 ml-5 p-2   text-white bg-black rounded-md capitalize "> browse jobs </Link>
         </Cards>
          <Cards bg ='bg-indigo-100'>
          <h4 className="m-2 my-1 py-1 font-extrabold text-xl font-serif capitalize p-2">
                 for Employers
             </h4>
             <p className="p-2 whitespace-nowrap m-2 my-1 text-xs font-light"> 
             List your job to find the perfect developer for the role
             </p>
             <Link to="/addjob" className="h-auto text-center my- block w-32 m-2 ml-5 p-2   text-white bg-indigo-700 rounded-md capitalize "> add job </Link>
          </Cards>
     </div>
 </section>
  )
}

export default HomeCards