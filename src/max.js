const max = (list) => {

    if(list.length>0)
        return Math.max(...list);
    else
        return undefined;
}

module.exports = max;