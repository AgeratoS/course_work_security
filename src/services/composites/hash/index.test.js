import hash from "./index";

describe('Works correctly', function () {
    it('should equal "00000001" in input ">T Ô"', function () {
        const input = ">T Ô";
        const output = "00000001";
        expect(hash(input)).toBe(output);
    });

    it('should equal "00000000" in input "Hi!"', function () {
        const input = "Hi!";
        const output = "00000000";
        expect(hash(input)).toBe(output);
    });
});