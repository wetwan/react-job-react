import { useState } from "react"
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
const JobList = ({job}) => {
    const [showfull, setShowfull] = useState(false);

    let description = job.description

    if (!showfull){
        description = description.substring(0, 90) + '...'
    }

  return (

    <div className=" relative sm:w-[340px] lg:[250px] w-5/6 rounded-md shadow-md shadow-indigo-300 bg-white  mx-auto my-3 h-auto ">
                   
        <p className="m-2 w-fit p-1  text-left text-gray-400 font-semibold font-serif capitalize ">{job.type}</p>
        <h5 className="m-2 p-1 text-left lg:text-xl sm:text-sm  text-black  capitalize font-bold font-sans">
            {job.title}
        </h5>
        <p className="text-xs md:w-5/ h-auto m-2 p-2 text-justify leading-snug ">
        {description}
            </p>
            <button onClick={()=> setShowfull((prevState) => !prevState) } className="p-2 m-2 text-indigo-500 hover:text-indigo-600">
                {showfull ? 'Less' : 'More'}
            </button>
        <p className="m-2 w-fit p-1 text-left text-indigo-600 font-semibold font-serif capitalize ">{job.salary}/ year </p>
        
      
        <div className=" flex items-center h-20 w-11/12 mx-auto  mt-1 justify-between ">
            <div className="flex items-center w-fit   ">
                <FaMapMarker className="text-orange-400 text-lg" />
               
                <p className=" text-orange-500 m-2 font-semibold text-xs capitalize whitespace-nowrap">{job.location}</p>
            </div>
            


            <Link to={`/job/${job.id}`} className="bg-indigo-700 h-2/4 w-28 text-white p-2 capitalize text-center rounded-md mr-4 "> read more </Link>
        </div>
 </div>
  )
}

export default JobList