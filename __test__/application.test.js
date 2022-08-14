// Import the js file to test
import { handleSubmit } from "../src/client/js/application"
describe(handleSubmit, () => {
    test("handleSubmit is defined", () => {
        expect(handleSubmit).toBeDefined
    });
});