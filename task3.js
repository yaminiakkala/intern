let celsius= document.getElementById('celsius');
let farenheit = document.getElementById('farenheit');
celsius.oninput = () => {
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    farenheit.value = parseFloat(f.toFixed(2));
};
    farenheit.oninput = ()=> {
        let c = ((parseFloat(farenheit.value) - 32) * 5) / 9;
            celsius.value = parseFloat(c.toFixed(2));
        };
