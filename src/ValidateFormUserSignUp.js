import ValidateFormDTO from "./ValidateFormDTO";

export default class ValidateFormUserSignUp {

    validate(dto: ValidateFormDTO) {
        return (this.isNameValid(dto) && this.isPasswordValid(dto));
    }

    isPasswordValid(dto) {
        return dto.getPassword() === dto.getRepeatPassword();
    }

    isNameValid(dto) {
        return this.isEmpty(dto.name) && dto.getName().length > 4;
    }

    isEmpty(value) {
        return value !== '' && value !== undefined;
    }
}