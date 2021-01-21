import shiftLeft from "./index";

describe('Works correctly', function () {
    it('should output "00001000" when input "00000100"', function () {
        const byte = "00000100";
        expect(shiftLeft(byte)).toBe("00001000");
    });

    it('should output "00001000" when input "10000100"', function () {
        const byte = "10000100";
        expect(shiftLeft(byte)).toBe("00001000")
    });

    it('should output "11111110" when input "11111111"', function () {
        const byte = "11111111";
        expect(shiftLeft(byte)).toBe("11111110");
    })
});