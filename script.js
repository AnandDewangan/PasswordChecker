const passInput = document.querySelector('.input-group input');
const toggleIcon = document.querySelector('.input-group .toggle');
const ripples = document.querySelector('.input-group .ripple');
const percentBar = document.querySelector('.strength-percent span')
const passLables = document.querySelector('.strength-lable');

passInput.addEventListener('input', handlePassInput);
toggleIcon.addEventListener('click', togglePassInput);

function handlePassInput(e) {
    if(passInput.value.length === 0){
        passLables.innerHTML = 'Strength';
        addClass();
    }
    else if(passInput.value.length <= 4){
        passLables.innerHTML = 'Weak';
        addClass('weak');
    }
    else if(passInput.value.length <= 7){
        passLables.innerHTML = 'Average';
        addClass('average');
    }
    else{
        passLables.innerHTML = 'Strong';
        addClass('strong');
    }
}

function addClass(className){
    percentBar.classList.remove('weak');
    percentBar.classList.remove('average');
    percentBar.classList.remove('strong');
    if(className){
        percentBar.classList.add(className);
    }
}

function togglePassInput(e){
    const type = passInput.getAttribute('type');
    if(type==='password'){
        passInput.setAttribute('type', 'text');
        toggleIcon.innerHTML = '💀';
        ripples.style.cssText = `
        border-radius: 4px;
        width: 100%;
        height: 100%;
        right: 0;
        z-index: -1;
        `;
        passInput.style.color = '#000';
        passInput.style.backgroundColor = 'transparent';
        toggleIcon.style.fontSize = '27px';
    }
    else{
        passInput.setAttribute('type', 'password');
        toggleIcon.innerHTML = '☠️';
        toggleIcon.style.fontSize = '25px';
        ripples.style.cssText = `
            border-radius: 50px;
            height: 35px;
            width: 35px;
            right: 10px;
            z-index: 1;
        `;
        passInput.style.color="#fff";
        passInput.style.backgroundColor="#112d37";
    }
}