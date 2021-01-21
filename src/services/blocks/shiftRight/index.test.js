import shiftRight from "./index";

describe('Works correctly', function () {
    it('should output "00001000" when input "00010000"', function () {
        const byte = "00010000";
        expect(shiftRight(byte)).toBe("00001000");
    });

    it('should output "00001000" when input "00010001"', function () {
        const byte = "00010001";
        expect(shiftRight(byte)).toBe("00001000")
    });

    it('should output "011111111" when input "11111111"', function () {
        const byte = "11111111";
        expect(shiftRight(byte)).toBe("01111111");
    })
});