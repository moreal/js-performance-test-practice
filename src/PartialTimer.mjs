class PartialTimer {
    constructor (value) {
        this.parseValue(value);
    }

    parseValue(value) {
        this.seconds = value % 60;
        value = Math.floor(value / 60);

        this.minutes = value % 60;
        value = Math.floor(value / 60);

        this.hours = value % 24;
        value = Math.floor(value / 24);

        this.days = value;
    }

    countDay() {
        if (this.days === 0) {
            throw Error;
        } else {
            this.days -= 1;
        }
    }

    countHour() {
        if (this.hours === 0) {
            this.countDay();
            this.hours = 23;
        } else {
            this.hours -= 1;
        }
    }

    countMinute() {
        if (this.minutes === 0) {
            this.countHour();
            this.minutes = 59;
        } else {
            this.minutes -= 1;
        }
    }

    countSecond() {
        if (this.seconds === 0) {
            this.countMinute();
            this.seconds = 59;
        } else {
            this.seconds -= 1;
        }
    }

    countdown() {
        try {
            this.countSecond();
            return true;
        } catch (e) {
            return false;
        }
    }

    getDays() {
        return this.days;
    }

    getMinutes() {
        return this.minutes;
    }

    getHours() {
        return this.hours;
    }

    getSeconds() {
        return this.seconds;
    }
}

export default PartialTimer;