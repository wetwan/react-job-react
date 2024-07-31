import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const AddJobpage = ({addJobsubmit}) => {
  const navigate =useNavigate()
  const [title , setTitle] = useState('')
  const [type , setType] = useState('Full-Time')
  const [location , setLocation] = useState('')
  const [description , setDescription] = useState('')
  const [salary , setSalary] = useState('Under $50K')
  const [companyName , setCompanyName] = useState('')
  const [companyDescription , setCompanyDescription] = useState('')
  const [contactEmail , setContactEmail] = useState('')
  const [contactPhone , setContactPhone] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()

    const newJob ={
      title,
      type,
      location,
      description,
      salary,
      company:{
        name:companyName,
        description:companyDescription,
        contactEmail,
        contactPhone

      }
    }

    addJobsubmit(newJob)
    toast.success('Job Added Sucessfully')
   
    return navigate('/jobs')
  }


  return (
    <section className="w-full h-5/6 mb-4 bg-indigo-300 p-7">
    <div className="w-2/3 h-20 mx-auto m-0 p-3">
        <p className=" h-3/4  text-indigo-700 capitalize text-center text-3xl leading-[1.6] font-bold p-2">
           add job
        </p>
    </div>

    <div className="mb-3 p-6">
        <form onSubmit={handleSubmit} className="w-11/12  mb-7 md:w-[600px]  bg-white shadow-md rounded-md h-full  mx-auto flex flex-col m-4 p-4">
        
            <div className="mb-2 flex flex-col">
                <label htmlFor="type" className="capitalize m-2  text-gray-700 rounded p-1 text-left font-bold"> job type</label>
                <select
                    name="type" 
                    id="type" 
                    className="border border-indigo-500  m-2 p-2 rounded outline-none"
                    required
                    value={type}
                    onChange={(e)=>setType(e.target.value)}
                    >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                </select>
            </div>
            <div className="mb-2 flex flex-col">
                <label htmlFor="title" className="capitalize m-2  text-gray-700 rounded p-1 text-left font-bold"> job listing name</label>
                <input
                    type="text"
                    name="title" 
                    id="title" 
                    className="capitalize border border-indigo-500  m-2 p-2 rounded outline-none"
                    required
                    placeholder=" senior react developer"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    >
                    
                </input>
            </div>
            <div className="mb-2 flex flex-col">
                <label htmlFor="description" className="capitalize m-2  text-gray-700 rounded p-1 text-left font-bold"> description</label>
              

                <textarea 
                    name="description" 
                    id="description"
                    required
                    className="capitalize max-w-full max-h-14 border border-indigo-500  m-2 p-2 rounded outline-none"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    placeholder="Add any job duties, expectations, requirements, etc"></textarea>
            </div>
            <div className="mb-2 flex flex-col">
                <label htmlFor="salary" className="capitalize m-2  text-gray-700 rounded p-1 text-left font-bold"> job salary</label>
                <select
                    name="salary" 
                    id="salary" 
                    className="border border-indigo-500  m-2 p-2 rounded outline-none"
                    required
                    value={salary}
                    onChange={(e)=>setSalary(e.target.value)}
                    >
                        <option value="Under $50K">Under $50K</option>
                        <option value="$50K - 60K">$50K - $60K</option>
                        <option value="$60K - 70K">$60K - $70K</option>
                        <option value="$70K - 80K">$70K - $80K</option>
                        <option value="$80K - 90K">$80K - $90K</option>
                        <option value="$90K - 100K">$90K - $100K</option>
                        <option value="$100K - 125K">$100K - $125K</option>
                        <option value="$125K - 150K">$125K - $150K</option>
                        <option value="$150K - 175K">$150K - $175K</option>
                        <option value="$175K - 200K">$175K - $200K</option>
                        <option value="Over $200K">Over $200K</option>
                </select>
            </div> 
            <div className="mb-2 flex flex-col">
                <label htmlFor="location" className="capitalize m-2  text-gray-700 rounded p-1 text-left font-bold"> location</label>
                <input 
                    name="location" 
                    id="location"
                    required
                    className="capitalize max-w-full max-h-14 border border-indigo-500  m-2 p-2 rounded outline-none"
                    placeholder='company location'
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
                    />
            </div>
            
            <h3 className="text-2xl mb-5 p2 m-2 text-indigo-600">Company Info</h3>

            <div className="mb-2 flex flex-col">
                <label htmlFor="company" className="capitalize m-2  text-gray-700 rounded p-1 text-left font-bold"> company</label>
                <input 
                    name="company" 
                    id="company"
                    required
                    className="capitalize max-w-full max-h-14 border border-indigo-500  m-2 p-2 rounded outline-none"
                    placeholder='company name'
                       value={companyName}
                       onChange={(e)=>setCompanyName(e.target.value)}/>

            </div>

            <div className="mb-2 flex flex-col">
                <label htmlFor="company_description" className="capitalize m-2  text-gray-700 rounded p-1 text-left font-bold"> company description</label>
              

                <textarea 
                    name="company_description" 
                    id="company_description"
                    required
                    className="capitalize max-w-full max-h-14 border border-indigo-500  m-2 p-2 rounded outline-none"
                    value={companyDescription}
                    onChange={(e)=>setCompanyDescription(e.target.value)}
                    placeholder="what your comapny do"></textarea>
            </div>
            <div className="mb-2 flex flex-col">
                <label htmlFor="email" className="capitalize m-2  text-gray-700 rounded p-1 text-left font-bold">company email</label>
                <input 
                    type="email"
                    name="email" 
                    id="email"
                    required
                    className="capitalize max-w-full max-h-14 border border-indigo-500  m-2 p-2 rounded outline-none"
                    placeholder='company email '
                     value={contactEmail}
                     onChange={(e)=>setContactEmail(e.target.value)}/>
            </div>
            <div className="mb-2 flex flex-col">
                <label htmlFor="tel" className="capitalize m-2  text-gray-700 rounded p-1 text-left font-bold">company number</label>
                <input 
                    type="tel"
                    name="tel" 
                    id="tel"
                    className="capitalize max-w-full max-h-14 border border-indigo-500  m-2 p-2 rounded outline-none"
                    placeholder='company number '
                     value={contactPhone}
                     onChange={(e)=>setContactPhone(e.target.value)}/>
            </div>
            <button
             type="submit" 
             className="text-white h-10 m-2 rounded-md bg-indigo-800 capitalize text-xl">
                    add job
            </button>
        </form>
    </div>
   

    
</section>
  )
}

export default AddJobpage