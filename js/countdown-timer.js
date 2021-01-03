const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minutesRef = document.querySelector('[data-value="mins"]');
const secondsRef = document.querySelector('[data-value="secs"]');
const deadline = new Date(2021, 5, 1);


timer();
setInterval(timer, 1000);

function timer() {
  const now = new Date();

  const difference = deadline.getTime() - now.getTime();
  const days = pad(Math.floor(difference / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((difference % (1000 * 60)) / 1000));

  function pad(value) {
    return String(value).padStart(2, '0');
  };

  daysRef.textContent = days;
  hoursRef.textContent = hours;
  minutesRef.textContent = mins;
  secondsRef.textContent = secs;
};
