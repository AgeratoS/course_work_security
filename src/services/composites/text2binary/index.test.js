import text2binary from "./index";

describe('Text2Binary check', function () {
    it('should outputs "0100100001100101011011000110110001101111" with "Hello"', function () {
        const text = "Hello";
        const binText = "0100100001100101011011000110110001101111";
        expect(text2binary(text)).toBe(binText);
    });

    it('should outputs empty string if we have empty string', function () {
        const text = '';
        expect(text2binary(text)).toBe('');
    });

    it('should output "00111110 01010100 10100000 00011111 11010100" in input ">T Ô"', function () {
        const input = ">T Ô";
        const output = "0011111001010100101000000001111111010100"
        expect(text2binary(input)).toBe(output);
    });
});