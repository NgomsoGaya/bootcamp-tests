describe('Test my greet function' , function(){
    it("should return 'Hello, Raadiyah' when called with 'Raadiyah'" , function(){
        assert.deepEqual('Hello, Raadiyah', greet('Raadiyah'));

       // assert.deepEqual([2,2],[2,2]);//
    });

    it( "should return 'Hello, Hidayaath' when called with 'Hidayaath'", function(){
        assert.equal('Hello, Hidayaath',greet('Hidayaath'));

       // assert.deepEqual([2,2],[2,2]);//
    });

});