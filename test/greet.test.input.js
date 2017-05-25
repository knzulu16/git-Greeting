describe('inputName()', function(){
    it('should greet in IsiXhosa', function(){
        assert.equal(inputName('nzulu', 'IsiXhosa'), "Molweni,nzulu");
    });
    it('should greet in English', function(){
        assert.equal(inputName('nzulu','English'), 'Hello,nzulu');
    });
    it('should greet in Afrikaans', function(){
        assert.equal(inputName('nzulu','Afrikaans'), 'Goeie dag,nzulu');
    });
  });
