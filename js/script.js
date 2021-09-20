const keyElem = document.querySelector('#key');
const keyCodeElem = document.querySelector('#keyCode');

const logg = (e) => {
    e.preventDefault();
    
    console.log(e);
    

    const key = e.key;
    const code = e.keyCode;
    // let test = e.code;

    keyElem.innerText = `${key}`;
    keyCodeElem.innerText = `${code}`;

    // console.log(`Pressed: ${key} | KeyCode: ${code} | test: ${test}`);
}

document.addEventListener('keyup', logg);