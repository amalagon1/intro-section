const burger = document.querySelector('.burger');
const nav = document.querySelector('.side-nav');
const closeBtn = document.getElementById('close');
const features = document.querySelector("#features-drop");
const company = document.querySelector('#company-features');
const activeBtn = document.querySelector(".arrow-down");
// const activeBtn2 = document.querySelector('.down-arrow');
const featuresD = document.querySelector(".features-drop");
const dropdown = document.querySelector('.dropdown');
const upArrow = document.querySelector('.arrow-up');
const companyDropEl = document.querySelector('.dropdown2')
const active = document.querySelector('.arrow-down active');
const backdropEl = document.querySelector('.backdrop');




burger.addEventListener('click', () => {
    nav.classList.add('open');
    backdropEl.classList.add('backdrop-open');
})

closeBtn.addEventListener('click', () => {
    nav.classList.remove('open');
    dropdown.classList.remove('open');
    backdropEl.classList.remove('backdrop-open');

})

backdropEl.addEventListener('click', () => {
    // nav.style.display = 'none';
    backdropEl.classList.remove('backdrop-open');
    nav.classList.remove('open');
});



features.addEventListener('click', (e) => {
    console.log('you clicked me')
    if (featuresD.style.display == 'none') {
        featuresD.style.display = 'flex';

    } else {
        featuresD.style.display = 'none';
    }
    // featuresD.classList.add('open');
    activeBtn.classList.add('active');


    // closeDropdown()
})

company.addEventListener('click', (e) => {
    console.log('you clicked me')
    if (companyDropEl.style.display == 'none') {
        companyDropEl.style.display = 'flex';
        activeBtn.classList.add('active');
    } else {
        companyDropEl.style.display = 'none';
        // activeBtn2.classList.remove('active');
    }
    // featuresD.classList.add('open');
    // activeBtn.classList.add('active');

    // closeDropdown()
})

// company.addEventListener('click', () => {
//     console.log('clicked!');
//     companyDropEl.classList.add('open');
//     activeBtn.classList.add('active');

// })

// function closeDropdown() {
//     if (active) {
//         activeBtn.addEventListener('click', () => {
//             console.log('clicked again!')
//             activeBtn.classList.remove('active');
//         })
//     }
// }

