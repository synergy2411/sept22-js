// Named Export
export const getDailyFortune = () => "Run 5 miles today"

const MAGIC_NUMBER = Math.round(Math.random() * 100);

export const getLuckyNumber = () => {
    return MAGIC_NUMBER;
}



// Default Export
class Student {
    constructor(studId, name) {
        this.studId = studId;
        this.name = name;
    }
    getDetails() {
        return `${this.studId} : ${this.name}`
    }
}

export default Student;