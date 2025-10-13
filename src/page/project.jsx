import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const ProjectScreen =()=>{

    const navigate = useNavigate();

const handleBack =()=>{
    alert("Do you want to back?")
    navigate(-1);
}

  return(
        <div className="w-full bg-gray-500 h-16">
         <button onClick={handleBack}>
            <ArrowLeft className='w-6 h-6 text-blue-500'/>
         </button>
         <h1 className='text-2xl font-bold text-gray-900 flex-1 text-center mr-11 '>tets</h1>
        
        </div>
    )
}

export default ProjectScreen;