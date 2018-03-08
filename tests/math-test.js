//can destructure as object from export

const {randomInt}= require("../lib/math");


// tests to be sure statement is a function, 
const{assert: {isFunction, isNumber, isNotNaN, oneOf}}= require('chai');

describe("math module",()=>{
    describe("randomInt()",()=>{
        it('should be a function, duh', ()=>{
            // is the value of this variable a function?
            isFunction(randomInt);
        });
        it("should return a number",()=>{
            isNumber(randomInt(1,6));
            isNumber(randomInt("fred",6));
            // isNotNaN(randomInt("fred",6));
            // can pass in multiple instances of checking tests
            for(let i =0; i<1000; i++){
                oneOf(randomInt(1,6),[1,2,3,4,5,6]);
            };
        })
        it('should handle args that are not strings',()=>{
            oneOf(randomInt("1",6),[1,2,3,4,5,6]);
            oneOf(randomInt(1,"6"),[1,2,3,4,5,6]);
            oneOf(randomInt("1","6"),[1,2,3,4,5,6]);
            
        })
    });
});