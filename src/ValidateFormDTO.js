export default class ValidateFormDTO {
    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setPassword(password) {
        this.password = password;
    }

    getPassword() {
        return this.password;
    }

    setRepeatPassword(password) {
        this.repeatPassword = password;
    }

    getRepeatPassword() {
        return this.repeatPassword;
    }
}