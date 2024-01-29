import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { FetchExact, Listall, Remove } from './tempvalues';
import { OrderForm } from './orderform';
import { ReadingPage } from './Readpage';
import { UpadatingPage } from './updatingpage';




export let Homepage=()=>
{
    const [createpage,setCreatepage]=useState(false);

    const [readpage,setReadpage]=useState(false);
    const [position,setPosition]=useState(0);

    const[updatepage,setUpdatepage]=useState(false);
    const[object,setObject]=useState({});

    const [temporary,setTemporary]=useState([]);

    useEffect(
        ()=>
        {
            setTemporary(Listall);
        })

        return(
            <>
            {
                (createpage)?
                <>
                <OrderForm/>
                <button className='btn btn-outline-secondary'
                onClick={
                    ()=>
                    {
                        setCreatepage(false)
                    }
                }> BACK 
                
                </button>
             </>
             :
             (readpage)?
             <>
             <ReadingPage who={position}/>
             <button className='btn btn-outline-secondary' onClick={()=>
                {
                    setReadpage(false)
                }}> 
                BACK
            </button>
            </>
            :
            (updatepage)?
            <>
            <UpadatingPage who={position} mention={object}/>

            <button className='btn btn-outline-secondary'
            onClick={
                ()=>
                {
                    setUpdatepage(false)
                }
            }>
                BACK
            </button>
            </>
            :
            <>
    
             <div className='text-center col-12'>
             <button className='btn btn-outline-dark mt-4 mb-4'
             onClick={()=>
             {
                setCreatepage(true)
             }}>
                ITEM BOOKED
             </button>
             </div>
             <div className='container'>
                <table className='table-responsive-md table table-striped table-danger mt-4 '> 
                <thead>
                    <tr>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>email</th>
                        <th>address</th>
                        <th>city</th>
                        <th>state</th>
                        <th>phonenumber</th>
                        <th>itemname</th>
                        <th>totalamount</th>
                        <th>functions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        temporary.map((data,index)=>
                        <tr>
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>
                            <td>{data.email}</td>
                            <td>{data.address}</td>
                            <td>{data.city}</td>
                            <td>{data.state}</td>
                            <td>{data.phonenumber}</td>
                            <td>{data.itemname}</td>
                            <td>{data.totalamount}</td>
                            <td>
                                        <button className='btn btn-outline-info'
                                        onClick={()=>
                                        {
                                            setUpdatepage(true)
                                            setPosition(index)
                                            setObject(FetchExact(data.firstname))
                                        }}>UPDATE
                                        </button>
                                        
                                        <button className='btn btn-outline-secondary'
                                        onClick={()=>
                                        {
                                            setReadpage(true)
                                            setPosition(index)
                                            setObject(FetchExact(data.firstname))
                                        }}>READ
                                        </button>

                                        <button className='btn btn-outline-danger'
                                        onClick={()=>
                                        {
                                            setTemporary(Remove(index));
                                        }}>DELETE</button>
                            </td>
                        </tr>
                        )
                    
                    }
                
                </tbody>

                </table>

             </div>
             </>
            }
            </>
        )
}