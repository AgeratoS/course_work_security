import xor1byte from "./index";

describe('Works correctly', function () {
    it('should return "00000000" if input 01010101 and 01010101', function () {
        const firstByte = "01010101";
        const secondByte = "01010101";
        expect(xor1byte(firstByte, secondByte)).toBe("00000000");
    });

    it('should return "00100011" if input 11010011 and 11110000', function () {
        const firstByte = "11010011";
        const secondByte = "11110000";
        expect(xor1byte(firstByte, secondByte)).toBe("00100011");
    });

    it('EXTRA: should return "0010" for 1111 and 1101 ', function () {
        const firstDigit = "1111";
        const secondDigit = "1101";
        expect(xor1byte(firstDigit, secondDigit)).toBe("0010");
    });
});