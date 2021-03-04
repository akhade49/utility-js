const min = (list) => {

    if(list.length>0)
        return Math.min(...list);
    else
        return undefined;
}

module.exports = min;