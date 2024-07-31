import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

import Homepage from "./pages/Homepage"
import MainLayerOut from "./layout/MainLayerOut"
import Jobspage from "./pages/Jobspage"
import AddJobpage from "./pages/AddJobpage"
import NotFoundpage from "./pages/NotFoundpage"
import Jobpages,{JobLoader} from "./pages/Jobpages"
import EditJobpage from "./pages/EditJobpage"

// add new job 
const addJob = async (newJob) =>{
   const res = await fetch ('/api/jobs',{
    method: 'POST',  
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify(newJob)
  })
  return
}
// delete new job
const deleteJOb = async (id) =>{
  const res = await fetch (`/api/jobs/${id}`,{
    method: 'DELETE',  
    
  })
  return
}
// EditJob

const updatejob = async (job) =>{
  const res = await fetch (`/api/jobs/${job.id}`,{
   method: 'PUT',  
   headers: {
     'content-Type': 'application/json'
   },
   body: JSON.stringify(job)
 })
 return
}



const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements (
     <Route path="/" element={<MainLayerOut />} >
       <Route index element={<Homepage  />} />
       <Route path="/jobs" element={<Jobspage  />} />
       <Route 
        path="/job/:id" 
        element={<Jobpages  deleteJOb={deleteJOb} />} 
        loader ={JobLoader} />
       <Route 
        path="/addjob" 
        element={<AddJobpage addJobsubmit={addJob} />}  />
       <Route path="*" element={<NotFoundpage  />} />
       <Route 
        path="/editjob/:id" 
        element={<EditJobpage updatJobsubmit={updatejob} />} 
        loader ={JobLoader} />

     </Route>
)
)

  return (
    <>


      <RouterProvider router={router} />    
  </>
  )
}

export default App