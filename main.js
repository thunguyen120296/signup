const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const steps = document.querySelectorAll('.step');
const tabs = document.querySelectorAll('.tab');
const confirm = document.getElementById('confirm');
const yourEmail = document.getElementById('yourEmail');
const yourName = document.getElementById('yourName');
let counter = 0;
window.addEventListener('load', function () {
    tabs[counter].style.display = 'block';
    confirm.style.display = 'none';
    prevBtn.disabled = true;
})
prevBtn.addEventListener('click', function () {
    counter--;
    steps.forEach((step, index) => {
        if (index === counter) {
            step.classList.add('active');
        }
        else {
            step.classList.remove('active');
        }
        if (counter === 0) {
            prevBtn.disabled = true;
        }
        else if (counter < tabs.length - 1) {
            nextBtn.style.display = 'block';
            confirm.style.display = 'none';
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
        else {
            nextBtn.style.display = 'none';
            confirm.style.display = 'block';

        }
    });
    tabs.forEach((tab, index) => {
        if (index === counter) {
            tab.style.display = 'block';
        }
        else {
            tab.style.display = 'none';
        }
    });
})
nextBtn.addEventListener('click', function () {
    counter++;
    steps.forEach((step, index) => {
        if (index === counter) {
            step.classList.add('active');
        }
        else {
            step.classList.remove('active');
        }

        if (counter === 0) {
            prevBtn.disabled = true;
        }
        else if (counter < tabs.length - 1) {
            nextBtn.style.display = 'block';
            confirm.style.display = 'none';
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
        else {
            nextBtn.style.display = 'none';
            confirm.style.display = 'block';

        }
    });
    tabs.forEach((tab, index) => {
        if (index === counter) {
            tab.style.display = 'block';
        }
        else {
            tab.style.display = 'none';
        }
    });
})