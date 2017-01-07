import chai from "chai";
import ValidateFormDTO from "../src/ValidateFormDTO";
import ValidateFormUserSignUp from "../src/ValidateFormUserSignUp";

describe('Validate form', () => {
    it('name should\'t be empty', () => {
        var dto = new ValidateFormDTO();
        var validateForm = new ValidateFormUserSignUp();
        var isValid = validateForm.validate(dto);
        chai.assert.equal(isValid, false);

        dto.setName('');
        isValid = validateForm.validate(dto);
        chai.assert.equal(isValid, false);

        dto.setName('foooo');
        isValid = validateForm.validate(dto);
        chai.assert.equal(isValid, true);
    });

    it('name should have more that 5 characters', () => {
        var dto = new ValidateFormDTO();
        dto.setName('foo');
        var validateForm = new ValidateFormUserSignUp();
        var isValid = validateForm.validate(dto);
        chai.assert.equal(isValid, false);

        dto.setName('foooo');
        isValid = validateForm.validate(dto);
        chai.assert.equal(isValid, true);

        dto.setName('foooooooo');
        isValid = validateForm.validate(dto);
        chai.assert.equal(isValid, true);
    });

    it('password and repite password should be equals', () => {
        var dto = new ValidateFormDTO();
        dto.setName('foooooooo');
        dto.setPassword('foo');
        dto.setRepeatPassword('baz');
        var validateForm = new ValidateFormUserSignUp();
        var isValid = validateForm.validate(dto);
        chai.assert.equal(isValid, false);

        dto.setRepeatPassword('foo');
        isValid = validateForm.validate(dto);
        chai.assert.equal(isValid, true);
    });
});