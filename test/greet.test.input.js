describe('GenerateMsg()', function() {
  it('should greet in IsiXhosa', function() {
    assert.equal(GenerateMsg('nzulu', 'IsiXhosa'), "Molweni,nzulu");
  });
  it('should greet in English', function() {
    assert.equal(GenerateMsg('nzulu', 'English'), 'Hello,nzulu');
  });
  it('should greet in Afrikaans', function() {
    assert.equal(GenerateMsg('nzulu', 'Afrikaans'), 'Goeie dag,nzulu');
  });
});
