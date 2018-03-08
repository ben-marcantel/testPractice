'use strict';

const {assert: {isFunction, NaN, isNumber, oneOf, isString}, expect} = require('chai');

const {roll,toDiceNotation} = require('../lib/dice');

describe('dice module',()=>{

    describe("roll",()=>{
        it("should be a function", ()=>{
            isFunction(roll);
        });
        it("should return a number",()=>{
           //be sure to lay out passing variables the same as in app
           let result = roll("2d20");
           isNumber(result);
        });
        it('should accept a string and return a computed number',()=>{
            for(let i = 1; i<10;i++){
                let diceNotation =`${i}d6`;
                //here Array.from returns an array instance from an array or iterable object
                oneOf(roll(diceNotation),Array.from(Array(61).keys()));

            }
        })
    });

    ///create 2nd describe block to test to diceNotation
    describe("toDiceNotation",()=>{
        it("should be a function",()=>{
            isFunction(toDiceNotation);
        })
        it("should create a string from two numbers",()=>{
           isString((toDiceNotation(6,5)))
        })
        it("should create a string from one number",()=>{
            isString((toDiceNotation(6)))
         })
    })
});

