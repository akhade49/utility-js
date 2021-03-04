const filter = require("./filter");
const filterUppercase = require("./filterUppercase");

describe('Filter', () => {

	it('x => true function applied on [] is []', () => {
        	expect(filter([],x => true)).toEqual([]);
	});

	it('x => true function applied on [1,2,3] is [1,2,3]', () => {
        	expect(filter([1,2,3],x => true)).toEqual([1,2,3]);
	});

	it('x => false function applied on [1,2,3] is []', () => {
        	expect(filter([1,2,3],x => false)).toEqual([]);
	});


    it('FilterUpperCase function for [a,B,c,D] is [B,D]', () => {
        
        	expect(filter(['a','B','c','D'],filterUppercase)).toEqual(['B','D']);
    });
	
})