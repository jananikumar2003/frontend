import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export let Find=()=>
{

    const[found,setFound]=useState(0);
    return(
        <>
           <input className="form-control"></input>
           <button className="btn btn-outline-primary" 
           onClick={
                  ()=>
                  {
                       setFound(found+1)
                  }
           }
           >select</button>
           <p>
            {found} - number is
            {found%===0 ? 'even' :'odd'}
           </p>
           
        </>
    )
}