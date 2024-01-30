import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Read } from './tempvalues'



export const ReadingPage=(myindex)=>
{
    const[orderdetails,setOrderdetails]=useState({

            "firstname":"",
            "lastname":"",
            "email":"",
            "address":"",
            "city":"",
            "state":"",
            "phonenumber":0,
            "itemname":"",
            "totalamount":0
    })
    useEffect(
        ()=>
        {
            getmyvalues()
        }
    )
    const getmyvalues=()=>
    {
        setOrderdetails(Read(myindex.who))
    }
    return(
        <>
        <div className='row justify-content-center bg-warning'>
            <div className='col-lg-12 col-md-12 col-sm-12 card  '>
                <div className='col-lg-7 col-md-10 col-sm-12 card'>
                    <h1 className='text-center '>MY CUSTOMER DETAILS</h1>
                    <div className='mt-5 display-2 text-center'>
                        <p>firstname :{orderdetails.firstname}</p>
                        <p>lastname :{orderdetails.lastname}</p>
                        <p>email :{orderdetails.email}</p>
                        <p>address :{orderdetails.address}</p>
                        <p>city :{orderdetails.city}</p>
                        <p>state :{orderdetails.state}</p>
                        <p>phonenumber :{orderdetails.phonenumber}</p>
                        <p>itemname :{orderdetails.itemname}</p>
                        <p>totalamount :{orderdetails.totalamount}</p>
                    </div>

                </div>
 
            </div>
        </div>
        </>
    )
    
}

