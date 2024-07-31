

const Cards = ({children, bg= 'bg-gray-100' } ) => {
  return (
    <div className={`${bg} p-3 rounded-lg shadow-md text-black  w-5/6 sm:w-3/6   h-[150px] shadow-slate-200 mx-auto my-3 sm:mx-5`}>
        {children}
    </div>
  )
}

export default Cards