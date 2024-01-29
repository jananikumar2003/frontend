import React from 'react';

export class Newmethod extends React.Component
{
    render()
    {
        let Pens=["parker","pilot","waterman","cross","hugo boss","uniball"]
        
        function Market(customer)
        {
            return(
                <>
                   <li>{customer.worker}</li>
                </>
            )

        }
        return(
            <>
               <h1>TOP PEN BRANDS</h1>
               <ul>
                {
                    Pens.map(
                        (buyer)=>
                        <Market worker={buyer}/>
                    )
                }
               </ul>
                
            </>
        )
    }
}