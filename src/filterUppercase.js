function filterUpperCase(list) 
{   
    let result = [] ;
    for(i=0;i<list.length;i++)
    {
        if(list[i]==list[i].toUpperCase())
        {
            result.push(list[i]);
        }
    }
    return result;

}

module.exports = filterUpperCase