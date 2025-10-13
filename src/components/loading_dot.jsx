import {useTypewriter} from '../hooks/typeWritter'

const LoadingDot =()=>{

    const displayText = useTypewriter("Loading...", 150);

    return(
       
         <span className='text-2xl font-bold text-white'>{displayText}</span>
       
    )
};
export default  LoadingDot;