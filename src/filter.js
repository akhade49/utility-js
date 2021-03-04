const head = require("./head")
const tail = require("./tail")
const filterUppercase = require("./filterUppercase");

const filter = (list,func) => {
    let result = []
    if(list.length==0)
        return result;
    else if(list[0]>='A' && list[0]<='Z' || list[0]>='a' && list[0]<='z')
    {
        result = filterUppercase(list);
        return result;
    }
    else
        {
            let listhead = head(list);
            let value = func(listhead);

            if(value)
            {
                for(i=0;i<list.length;i++)
                    result.push(list[i]);
            }
            return result;

        }
}
module.exports = filter;