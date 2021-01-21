import padStart from "./index";

describe('Works correctly', function () {
    it('should output "****String" after input "String" with length 10 and filler "*"', function () {
        const requireString = "String";
        expect(padStart(requireString, 10, "*")).toBe("****String");
    });

    it('should output "String" after input "String" with length 4 and filler "*"', () => {
        const requireString = "String";
        expect(padStart(requireString, 4, "*")).toBe("String");
    })
});