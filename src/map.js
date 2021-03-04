const cube = require("./cube")
const identity = require("./identity")


const map = (list,func) => {
    let result = []
    if(list.length>0)
    {
        for(i=0;i<list.length;i++){
            result.push(func(list[i]));
        }  
    }
        return result; 
}
module.exports = map;