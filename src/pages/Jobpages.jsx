// import { useState,useEffect } from "react"
import { useParams, useLoaderData ,Link, useNavigate} from "react-router-dom"
import { toast } from "react-toastify"
import { FaArrowLeft , FaMapMarker} from "react-icons/fa"
// import Spinners from '../component/Spinners'


// const Jobpages = () => {
//     const {id} =useParams()
//     const [job, setJob] =useState(null) 
//     const [loading, setLoading] =useState(true)
//     useEffect(()=>{
//         const fetchJObs = async () => {
//                 try {
//               const res = await fetch(`/api/jobs/${id}`)
//               const data = await res.json()
//               setJob(data)
//             } catch (error){
//               console.log('Error fetching data', error)
//             } finally{
//               setLoading(false)
//             }
           
//           }npm
      
//             fetchJObs()
//     },[id])
//   return loading ? <Spinners /> :(
//     <>{job.title} </>
//   )
// }



const Jobpages = ({deleteJOb}) => {
    const navigate = useNavigate()
    const {id} =useParams()
    const job = useLoaderData()

    const onDeleteClick = (jobId) =>{
        const confirm =window.confirm('Sure you want to delete this listing')

        if(!confirm) return;

        deleteJOb(jobId)

        toast.success('Job Deleted Ducessfully')
    

        navigate('/jobs')
    }

   
    return (
        <section className="w-full bg-indigo-100 h-full p-3 font-sans">
        <p className="p-2 w-full bg-white  h-14 ">
            <Link to="/jobs" className="block w-ful p-2  text-xl md:ml-20 text-indigo-500">
               <FaArrowLeft className="text-xl inline"/>&nbsp; Back to job listing
            </Link>
        </p>


        <div className="container mx-auto p-4">
            <div className="grid grid-cols-10  items-start justify-around md:w-11/12 mx-auto">
                <div className="sm:col-span-6  col-span-10 w-full md:p-4 p-1">
                    <div className="bg-white rounded-md shadow-md md:p-4 p-1 m-2 md:m-4 w-full mx-auto h-auto ">
                        <p className="text-gray-400 text-xs text-left m-2 mt-1 p-1 font-medium capitalize"> {job.type}</p> 
                        <h3 className='font-bold text-black capitalize text-left m-2 mt-1 p-1 text-xl '> 
                        {job.title}
                      </h3>
                        <p className="text-orange-400 text-xs text-left m-2 mt-1 p-1 font-medium capitalize"><FaMapMarker className="inline mr-3" /> {job.location}</p> 
                    </div>
                    <div className="bg-white rounded-md shadow-md md:p-4 p-1 m-2 md:m-4 w-full mx-auto h-auto ">
                        <p className="text-gray-400 text-xs text-left m-2 mt-1 p-1 font-medium capitalize"> job description</p> 
                        <p className="text-gray-800 text-xs text-left m-2 mt-1 p-1 font-medium "> 
                            {job.description}
                        </p> 
                        <p className="text-gray-400 text-xs text-left m-2 mt-1 p-1 font-medium capitalize"> salary</p> 
                        <p className="text-gray-800 text-xs text-left m-2 mt-1 p-1 font-medium capitalize"> 
                           {job.salary} / year
            
                        </p> 
                    </div>
                </div>
                <div className="sm:col-span-4  col-span-10 w-full md:p-4 p-1">
                    <div className="bg-white rounded-md shadow-md  p-1 m-2 md:m-4 w-full mx-auto h-auto ">
                        <p className="text-left text-gray-600 font-bold text-xl m-2 p-2 capitalize">
                            company info
                        </p>
                        <h3 className="text-left m-2 p-2 capitalize text-2xl  text-black">
                            {job.company.name}
                        </h3>
                        <p className="text-sm w-auto p-2 m-2 text-left">
                           {job.company.description}
                        </p>
                        <hr className="mb-4 bg-indigo-400"/>
                        <h3 className="capitalize p-2 m-2 text-xl  font-medium">
                            company email :
                        </h3>
                        <h3 className="capitalize p-2 m-2 mx-4 text-[14px] md:hidden lg:block bg-indigo-400 font-bold rounded-md ">
                           {job.company.contactEmail}
                        </h3>
                        <h3 className="capitalize p-2 m-2 mx-4 text-[10px] md:block lg:hidden bg-indigo-400 font-bold rounded-md ">
                           {job.company.contactEmail}
                        </h3>
                        <h3 className="capitalize p-2 m-2 text-xl  font-medium">
                            company phone :
                        </h3>
                        <h3 className="capitalize p-2 m-2 mx-4 text-sm bg-indigo-400 font-bold rounded-md ">
                        {job.company.contactPhone}
                        </h3>
                    </div>
                    <div className="bg-white rounded-md shadow-md md:p-4 p-1 m-2 md:m-4 w-full mx-auto h-auto ">
                        <h3 className="text-xl font-bold text-black mb-6 p-2 m-2 capitalize ">
                            manage job
                        </h3>
                       <Link to={`/editjob/${id}`}className="mb-6 m-2 p-2 block mx-4  capitalize bg-indigo-600 rounded-full text-center font-bold shadow-indigo-400 shadow-sm text-white">
                            edit job
                       </Link>
                       <button onClick={() => onDeleteClick(job.id)} className="w-10/12  rounded-full text-center shadow-indigo-400 shadow-sm bg-red-400 capitalize text-white mx-5 mr-5 p-2 m-2 font-bold ">
                        delete job
                       </button>
                    </div>
                </div>
            </div>
        </div>
       
    </section>

       )
}

const JobLoader = async ({params}) => {
    const res = await  fetch(`/api/jobs/${params.id}`)
    const data = await res.json()
    return data

}



export { Jobpages as default, JobLoader}