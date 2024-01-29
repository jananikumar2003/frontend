import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './external.css'

export let Basicbootstrap=()=>
{
    return(
        <>
        <br></br>
        <div class="row justify-content-center fs-2" id='cng'>fav place in world</div>

        <ul class="list-group text-center">

        
        <br></br>
        <li class="list-group-item">paris</li>
        <li class="list-group-item">london</li>
        <li class="list-group-item">korea</li>
        <li class="list-group-item">america</li>
        <li class="list-group-item">japan</li>
    </ul>
    <br></br>
           <div class="text-center">
           <button class="btn btn-primary mb-2">Submit</button>
        <button class="btn btn-outline-success mb-2">read</button>
        <button class="btn btn-outline-success mb-2">Reset</button>
           </div>

    
        </>
    )
}