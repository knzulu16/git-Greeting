describe('generateMsg()', function() {
  it('should greet in IsiXhosa', function() {
    assert.equal(generateMsg('nzulu', 'IsiXhosa'), "Molweni,nzulu");
  });
  it('should greet in English', function() {
    assert.equal(generateMsg('nzulu', 'English'), 'Hello,nzulu');
  });
  it('should greet in Afrikaans', function() {
    assert.equal(generateMsg('nzulu', 'Afrikaans'), 'Goeie dag,nzulu');
  });
});
