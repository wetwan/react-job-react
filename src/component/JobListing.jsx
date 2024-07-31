import { useEffect, useState } from 'react'
import Spinners from './Spinners'

import JobList from './JobList'

const JobListing = ({isHome = false}) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] =useState(true)

  useEffect(() => { 
    const fetchJObs = async () => {
      const apiURl = isHome ? '/api/jobs?_limit=3': '/api/jobs'
      try {
        const res = await fetch(apiURl)
        const data = await res.json()
        setJobs(data)
      } catch (error){
        console.log('Error fetching data', error)
      } finally{
        setLoading(false)
      }
     
    }

      fetchJObs()
  }, [ isHome])



  return (
        <section className="w-full h-auto bg-indigo-50 p-2">
            <h4 className="font-bold text-indigo-800 text-center capitalize text-3xl p-2  m-5">{ isHome ? 'recent jobs' :'browse jobs'}</h4>
            {/* <!-- cards --> */}
            <div className="w-full flex-wrap flex flex-col md:flex-row h-auto  p-2 mx-auto md:my-6">
             { loading ? (
              <Spinners loading={loading} />
             ):(
              <>  
                {jobs.map((job) => (
                  <JobList key={job.id} job={job} />
              ))}
              </>
             )}
             
            </div>
    </section>
  )
}

export default JobListing