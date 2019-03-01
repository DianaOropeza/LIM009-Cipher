describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode,'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('debería retornar "D E" para "A B" con offset 3',()=>{
      assert.equal(cipher.encode(3,'A B'),'D E')
    })
    it('debería retornar "d e" para "a b" con offset 3',()=>{
      assert.equal(cipher.encode(3,'a b'),'d e')
    })
    it('debería retornar "Fuera de rango" para " " con offset 0',()=>{
      assert.equal(cipher.encode(0,"´"),'Fuera de rango')
    })
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode,'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar "A B" para "D E" con offset 3',()=>{
      assert.equal(cipher.decode(3,'D E'),'A B')
    })
    it('debería retornar "a b" para "d e" con offset 3',()=>{
      assert.equal(cipher.decode(3,'d e'),'a b')
    })
    it('debería retornar "Fuera de rango" para " " con offset 0',()=>{
      assert.equal(cipher.decode(0,'´'),'Fuera de rango')
    })
  });
});
