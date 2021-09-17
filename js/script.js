
const logg = (e) => {
    console.log(e);

    const key = e.key;
    const code = e.keyCode;

    console.log(`Pressed: ${key}, KeyCode: ${code}`);
}



document.addEventListener('keyup', logg);
