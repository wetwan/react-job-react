import { Link } from "react-router-dom"


const ViewAllJobs = () => {
  return (
    <section className="w-full h-32">
        <div className="w-5/6 h-full mx-auto p-5">
            <Link to="/jobs" className="w-2/5 rounded-xl font-bold block bg-black text-white mx-auto my-5 leading-[2.5] text-center text-xl h-3/5 capitalize"> view all jobs</Link>
        </div>
    </section>

  )
}

export default ViewAllJobs