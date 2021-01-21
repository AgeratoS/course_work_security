import _2binarySymbol from "./index";

describe("Check for correct output from _2binarySymbol", () => {
    it("'a' to binary representation is equal to '1100001'", () => {
        const symbol = 'a';
        expect(_2binarySymbol(symbol)).toBe('1100001');
    })
});