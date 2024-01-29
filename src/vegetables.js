var Veg=()=>
{
    var Veglist=["ladies finger","brinjal","tomato","onion","cucumber","papaya"];

    var Seller=(buyer)=>
    {
        return(
            <>
                <li>{buyer.showing}</li>
            </>
        )
    }
    return(
        <>
            <h1>VEGETABLES WE EAT DAILY</h1>
            <ul>
                {
                    Veglist.map(
                        (got)=>
                        <Seller showing={got}/>
                    )
                }
            </ul>
        </>
    )
}
export default Veg;