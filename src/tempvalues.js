let orderdetails=[
    {
        "firstname":"sham",
        "lastname":"priyan",
        "email":"priyan28@gmail.com",
        "address":"jail road",
        "city":"town",
        "state":"america",
        "phonenumber":9876542345,
        "itemname":"vacuum clearer",
        "totalamount":4000,
    },
    {
        "firstname":"samili",
        "lastname":"kiran",
        "email":"samili234@gmail.com",
        "address":"bulletproof st",
        "city":"salem",
        "state":"tamilnadu",
        "phonenumber":987654234,
        "itemname":"iphone",
        "totalamount":450000,
    },
    {
        "firstname":"sanjay",
        "lastname":"kumar",
        "email":"kumarsanjay@gmail.com",
        "address":"t nagar",
        "city":"chennai",
        "state":"tamilnadu",
        "phonenumber":456789087,
        "itemname":"cupboard",
        "totalamount":5000,
    }
]
export const Create=(obj)=>
{
    orderdetails.push(obj);
}

export const Listall=()=>
{
    return orderdetails;
}    

export const Read=(index)=>
{
    return orderdetails[index];
}

export const Remove=(index)=>
{
    orderdetails=orderdetails.filter(
        (data,ind)=>
        {
            return ind!==index;
        })
        return orderdetails;
}

export const FetchExact=(name)=>
{
    const temp=orderdetails.filter((data,index)=>
    {
        return data.firstname===name;
    })

    return temp[0];
}

export const Altervalues=(data,pos)=>
{
    orderdetails[pos]=data;

}