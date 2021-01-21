import xor1bit from "./index";

describe('Works correctly on any input', function () {
    it('should return 0 if input "0 0"', function () {
        const firstBit = "0";
        const secondBit = "0";
        expect(xor1bit(firstBit, secondBit)).toBe("0");
    });

    it('should return 1 if input "0 1"', function () {
        const firstBit = "0";
        const secondBit = "1";
        expect(xor1bit(firstBit, secondBit)).toBe("1");
    });

    it('should return 1 if input "1 0"', function () {
        const firstBit = "1";
        const secondBit = "0";
        expect(xor1bit(firstBit, secondBit)).toBe("1");
    });

    it('should return 0 if input "1 1"', function () {
        const firstBit = "1";
        const secondBit = "1";
        expect(xor1bit(firstBit, secondBit)).toBe("0");
    });

    it("should throw error if input isn't represent bit-string", () => {
        const firstBit = "0";
        const fakeBit = "fakebit";
        expect(() => xor1bit(firstBit, fakeBit)).toThrowError("Expected bit-string");
    });

    it('should throw error if input isn\'t in set {0, 1}', function () {
        const firstFakeBit = "4";
        const secondFakeBit = "3";
        expect(() => xor1bit(firstFakeBit, secondFakeBit)).toThrowError("Expected bit-string that will be in set {0," +
            " 1}");
    });
});