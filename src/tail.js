const tail = (list) => {
    if(list.length==0)
        return undefined;
    else
        return list.splice(1);
}

module.exports = tail;