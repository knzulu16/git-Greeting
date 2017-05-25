describe('inputName()', function(){
    it('should greet in IsiXhosa', function(){
        assert.equal(inputName('greetings'), 'Molweni,nzulu');
    });
    it('should greet in English', function(){
        assert.equal(inputName('greetings'),'Hello,nzulu');
    });
    it('should greet in Afrikaans', function(){
        assert.equal(inputName('greetings'), 'Goeie dag,nzulu');
    });
  });
