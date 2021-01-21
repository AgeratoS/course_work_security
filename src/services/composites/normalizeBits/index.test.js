import normalizeBits from "./index";

describe('Works correctly with 8-bit normalize', function () {
    const normalizeBitsInByte = normalizeBits(8);

    it('should return "00000001" on "1" bit', function () {
        const bit = "1";
        expect(normalizeBitsInByte(bit)).toBe("00000001");
    });

    it('should return "10101010" on "10101010" byte', function () {
        const byte = "10101010";
        expect(normalizeBitsInByte(byte)).toBe("10101010");
    });
});

describe('Works correctly with 16-bit normalize', function () {
    const normalizeBitsInWord = normalizeBits(16);

    it('should return "00000000 00000001" when input "1" bit', () => {
        const bit = "1";
        expect(normalizeBitsInWord(bit)).toBe("0000000000000001");
    });

    it('should return "00000000 10101010" when input "10101010" byte', function () {
        const byte = "10101010";
        expect(normalizeBitsInWord(byte)).toBe("0000000010101010")
    });
});