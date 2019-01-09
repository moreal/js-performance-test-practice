class SimpleTimer {
    constructor (value) {
        this.value = value;
    }

    getDays() {
        return Math.floor(this.value / 86400);
    }

    getHours() {
        return Math.floor((this.value % 86400) / 3600);
    }

    getMinutes() {
        return Math.floor((this.value % 3600) / 60);
    }

    getSeconds() {
        return this.value % 60;
    }

    countdown() {
        this.value -= 1;
    }
}