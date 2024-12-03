import '../../styles/clock.css';

export default function Clock() {
    const clockSec = document.querySelector('.clock-sec');
    const clock_container_text = document.createElement('h1');
    clock_container_text.classList.add('clock-container-text');
    clock_container_text.textContent = 'Clock';

    const clock_container = document.createElement('div');
    clock_container.classList.add('clock_container');
    
    const clock = document.createElement('div');
    clock.classList.add('clock');

    const short_stick = document.createElement('div');
    short_stick.classList.add('short_stick');

    const long_stick = document.createElement('div');
    long_stick.classList.add('long_stick');

    clock.append(short_stick, long_stick);
    clock_container.append(clock);

    clockSec.append(clock_container);
}