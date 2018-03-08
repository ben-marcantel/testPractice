const {assert} = require('chai');

    describe("Array",()=>{
        let testArray = [1,2,3];

        describe.skip('indexOf()',()=>{
            it ("should return -1 when the value is not present",()=>{
                //first argument is what is expected
                assert.equal(-1,[1,2,3].indexOf(4));
            }); 
        });
        describe("length",()=>{
            it("should not be 0",()=>{
                assert.notEqual(0,testArray.length);
                assert.equal(3,testArray.length);   
            })
        })
    });
    /// can add a method to "skip a test " if needed using describe.skip skipped will return as pending