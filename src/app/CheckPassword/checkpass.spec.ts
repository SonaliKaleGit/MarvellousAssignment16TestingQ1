 import { CheckPassword } from "./checkpass";

  describe('CheckPassword',()=>{
    it('valid password',()=>{
        const ret = CheckPassword('SOnali12@');
        expect(ret).toBe(true);
    
    })
    it('Invalid password',()=>{
        const ret=CheckPassword('sonLI123*');
        expect(ret).toBe(false);
    })
})