describe('createMsg()', function(){
    it('should greet in IsiXhosa', function(){
        assert.equal(createMsg('IsiXhosa'), name);
    });
    it('should greet in English', function(){
        assert.equal(createMsg('English'),name);
    });
    it('should greet in Afrikaans', function(){
        assert.equal(createMsg('Afrikaans'), name);
    });
  });
