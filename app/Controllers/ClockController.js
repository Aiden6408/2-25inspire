export class ClockController {
    constructor() {
        this.Clock()
    }

    Clock() {

        let time = new Date();
        let h = time.getHours() % 12;
        let m = time.getMinutes();
        if (h == 0) {
            h = 12

        }

        if (m >= 10) {
            let currenttime = `
                <div class="clock">${h}:${m}</div>
                `
            document.getElementById("time").innerHTML = currenttime;
            if (m < 10) {
                let currenttime = `
                <div class="clock">${h}:0${m}</div>
                `



                document.getElementById("time").innerHTML = currenttime;
                setInterval(this.Clock, 1000);
            }
        }


    }
}