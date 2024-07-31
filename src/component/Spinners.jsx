
import { ClipLoader } from "react-spinners"

const spinner = ({loading}) => {
    const override ={
        Display: 'block',
        margin: '100px auto'
    }
  return (
    <ClipLoader 
        color='#4338ca'
        loading ={ loading}
        cssOverride={override}
        size={150}
    />
  )
}

export default spinner