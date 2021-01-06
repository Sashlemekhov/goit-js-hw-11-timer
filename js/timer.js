class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.daysRef = document.querySelector(`${this.selector} span[data-value="days"]`);
    this.hoursRef = document.querySelector(`${this.selector} [data-value="hours"]`);
    this.minutesRef = document.querySelector(`${this.selector} [data-value="mins"]`);
    this.secondsRef = document.querySelector(`${this.selector} [data-value="secs"]`);
  }

  timer() {
    const now = new Date();
    
    const difference = this.targetDate.getTime() - now.getTime();
    const days = this.pad(Math.floor(difference / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))));
    const mins = this.pad(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((difference % (1000 * 60)) / 1000));

    this.pad();
    this.setMarkupElements(days, hours, mins, secs);
  }

   pad(value) {
      return String(value).padStart(2, '0');
  }

  setMarkupElements(days, hours, mins, secs) {
    this.daysRef.textContent = days;
    this.hoursRef.textContent = hours;
    this.minutesRef.textContent = mins;
    this.secondsRef.textContent = secs;
  }

  start() {
    this.timer();
    setInterval(() => {
      this.timer();
    }, 1000);
  }
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2021, 5, 1),
});

timer.start();