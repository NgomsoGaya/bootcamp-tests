describe('Test my transportFee function' , function(){
    it("should return the price of the transport when called with a string that's morning of afternoon" , function(){
        assert.deepEqual(transportFee('morning'),  'R20');

       //assert.deepEqual([2,2],[2,2]);//
    });

    it("should return free when called with with the string nightshift" , function(){
        assert.deepEqual(transportFee("nightshift"), 'free');

       // assert.deepEqual([2,2],[2,2]);//
    });

});