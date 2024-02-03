
// Import requred funnction from .ts file

import { CountCapital } from "./countCapital";

describe('countCapital',()=>{
    it('should return total capital letter',()=>{
        const ret = CountCapital('MARVEllous');
        expect(ret).toBe(5);
        //expect(CountCapital('MarVeLlous')).toBe(upper)
    })
})