import hashRepresentation from "./index";

describe('Works correctly', function () {
    it('should return " " when hash = 00000000', function () {
        const hash = "00000000";
        const output = String.fromCharCode(0);
        expect(hashRepresentation(hash)).toBe(output);
    });

    it('should return ">" when hash = 00111110', function () {
        const hash = "00111110";
        expect(hashRepresentation(hash)).toBe(">");
    });
});