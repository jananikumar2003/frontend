function Lights()
{
    const Brandname=["bajaj","havells","wipro","philips","surya","OSRAM","syska"];
    
    function Bulbs(lighting)
    {
        return(
            <>
                <li>{lighting.glow}</li>
            </>
        );

    }
    return(
        <>
            <h1>TOP BRANDS IN INDIA</h1>
            <ul>``
                {
                    Brandname.map(
                        (got)=>
                        <Bulbs glow={got}/>
                    )
                }
            </ul>
        </>
    )
    
}

export {Lights}