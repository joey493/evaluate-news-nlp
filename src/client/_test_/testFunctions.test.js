import { handleSubmit } from "../js/formHandler"
import { linkValidator } from "../js/linkValidator"

// test handle Submit fun
describe("test handleSubmit", () => {
    test("handleSubmit is defined", () => {
        expect(handleSubmit).toBeDefined()
    })
})

// test linkValidator fun
describe("test linkValidator", () => {
    test("linkValidator is defined", () => {
        expect(linkValidator).toBeDefined()
    })

    test("if the url is valid, linkValidator return true", () => {
        expect(linkValidator("http://google.com")).toBeTruthy();
    })

    test("if the url is valid, linkValidator return true", () => {
        expect(linkValidator("test")).toBeFalsy();
    })
})