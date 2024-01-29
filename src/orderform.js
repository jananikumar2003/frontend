import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import { Create } from './tempvalues'


export let OrderForm=()=>
{
    const [orderdetails,setOrderdetails]=useState(
        {
            "firstname":"",
            "lastname":"",
            "email":"",
            "address":"",
            "city":"",
            "state":"",
            "phonenumber":0,
            "itemname":"",
            "totalamount":0,
        })

        const gettingvalues=(temp)=>
        {
            const{name,value}=temp.target;

            setOrderdetails(
                (get)=>
                {
                    return{
                        ...get,
                        [name]:value,
                }
                }
            )
        }
        const Register=()=>
        {
            alert("your item is ordered"+JSON.stringify(orderdetails))
            Create(orderdetails);
        }
        const Cancel=()=>
        {
            alert("your item is cancelled")
        }
        return(
            <>
                  <div className='form-group row justify-content-center bg-warning text-dark'>
                    <div className='col-lg-6 col-md-8 col-sm-10'>
                    <h1 className='text-center mt-3'>COSTUMER DETAILS</h1>
                    <div>
                    <label className='form-label mt-3'>FIRSNAME</label>
                        <input 
                            type='text' 
                            className='form-control'
                            name='firstname' 
                            onChange={gettingvalues}
                            value={orderdetails.firstname}/>

                    <label className='form-label mt-4'>LASTNAME</label>
                        <input 
                            type='text' 
                            className='form-control'
                            name='lastname' 
                            onChange={gettingvalues}
                            value={orderdetails.lastname}/>

                    <label className='form-label mt-4'>EMAIL</label>
                        <input 
                            type='email' 
                            className='form-control'
                            name='email' 
                            onChange={gettingvalues}
                            value={orderdetails.email}/>

                    <label className='form-label mt-4'>ADDRESS</label>
                        <input 
                            type='text' 
                            className='form-control'
                            name='address' 
                            onChange={gettingvalues}
                            value={orderdetails.address}/>

                    <label className='form-label mt-4'>CITY</label>
                        <input 
                            type='text' 
                            className='form-control'
                            name='city' 
                            onChange={gettingvalues}
                            value={orderdetails.city}/>

                    <label className='form-label mt-4'>STATE</label>
                        <input 
                            type='text' 
                            className='form-control'
                            name='state' 
                            onChange={gettingvalues}
                            value={orderdetails.state}/>

                    <label className='form-label mt-4'>PHONE NUMBER</label>
                        <input 
                            type='tel' 
                            className='form-control'
                            name='phonenumber' 
                            onChange={gettingvalues}
                            value={orderdetails.phonenumber}/>

                    <label className='form-label mt-4'>ITEMNAME</label>
                        <input 
                            type='text' 
                            className='form-control'
                            name='itemname' 
                            onChange={gettingvalues}
                            value={orderdetails.itemname}/>

                    <label className='form-label mt-4'>TOTAL AMOUNT</label>
                        <input 
                            type='number' 
                            className='form-control'
                            name='totalamount' 
                            onChange={gettingvalues}
                            value={orderdetails.totalamount}/>
                        </div>
                        
                        <button
                    className='btn btn-outline-dark col-12 mt-5'
                    onClick={Register}>SUBMIT</button>
                    <button
                    className='btn btn-outline-danger col-12 mt-3 '
                    onClick={Cancel}>CANCEL</button>
                    </div>

                  </div>
            </>
        )
}