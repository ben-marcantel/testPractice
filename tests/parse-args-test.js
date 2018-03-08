const {assert: {typeOf, hasAllDeepKeys}} = require('chai');

const {dieNums} = require('../lib/parse-args.js');

describe('parse-args module',()=>{
    describe("dieNums",()=>{
        it("should be an object",()=>{
            typeOf(dieNums,'object')
        });
        it("should only have two keys; count and sides",()=>{
            hasAllDeepKeys(dieNums,{count:"6"},{sides:"7"});
        });
    });
});

