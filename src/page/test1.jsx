
import { useState } from "react";
const Test =()=>{
  

   const [x, setX] = useState('');

    return(
     <div className="flex bg-emerald-600">
 <input
      value={x}
      onChange={e =>setX (e.target.value)}
    />
     </div>

    )
}

export default Test;