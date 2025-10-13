import { useState } from "react";

const FeedBackForm =()=>{

    const [input,setInput] = useState('');

const handleSubmitForm =()=>{
    e.preventDefualt()
    
}
    return(
        <div className="bg-gray-500">
            <label htmlFor="name" className="">

            </label>
            <input 
            type ={input}
            feedback = "feedback"
            placeholder="feedback here"
            onChange={(e) => setInput(e.target.value)}
            />
        </div>
    )
}

export default FeedBackForm;