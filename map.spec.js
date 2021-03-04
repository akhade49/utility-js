const cube=require('./cube');
const identity=require('./identity');
const map=require('./map');

describe('Map',() => {
    it('Cube of [] is []',() => {
        expect(map([],cube)).toEqual([]);
    });

    it('Cube of [1,2,3] is [1,8,27]',() =>{
        expect(map([1,2,3],cube)).toEqual([1,8,27]);
    });

    it('Identity of [1,2,3] is [1,2,3]',() =>{
        expect(map([1,2,3],identity)).toEqual([1,2,3]);
    });
    
})