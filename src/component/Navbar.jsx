import {NavLink} from 'react-router-dom'

const Navbar = () => {
    const linkclass = ({isActive}) => isActive ?'font-semibold md:p-2 md:m-1  capitalize text-sm md:h-8  rounded hover:bg-black hover:shadow-indigo-400 shadow-sm bg-black':'font-semibold md:p-2 md:m-1 capitalize text-sm md:h-8  rounded hover:bg-black hover:shadow-indigo-400 shadow-sm '
 
  return (
 
    <header className=" w-full bg-indigo-700 h-20 ">
        {/* <!-- header  --> */}
        <div className="md:w-5/6 h-5/6 md:p-4 mx-auto  flex items-center justify-around ">
            {/* <!-- logo --> */}
            <h1 className=" whitespace-nowrap text-white w-fit p-3   m-1 font-extrabold md:text-2xl text-sm capitalize">
                react jobs
            </h1>

            {/* <!-- nav section --> */}
            <nav className=" text-white  md:w-6/12 p-1 m-1 md:ml-80 ">
                <ul className="flex whitespace-nowrap list-none justify-evenly item-center text-white text-sm  md:w-10/12 md:mx-auto p-2 m-1">
                    <li className=" m-1 w-auto p-1 leading-1  ">
                        <NavLink to="/" className={ linkclass}>home</NavLink>
                    </li>
                    <li className=" m-1 w-auto p-1 leading-1 ">
                        <NavLink to="/jobs" className={linkclass}>jobs</NavLink>
                    </li>
                    <li className=" m-1 w-auto p-1 leading-1 ">
                        <NavLink to="/addjob" className={linkclass}>add jobs</NavLink>
                    </li>
                    
                </ul>
            </nav>
            
        </div>

    </header>
  )
}

export default Navbar