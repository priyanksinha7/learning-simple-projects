const hh = document.querySelector('h1');
document.querySelector('button').addEventListener('click',
    () => {


        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const col = `rgb(${r},${g},${b})`;
        document.querySelector('body').style.backgroundColor = `rgb(${r},${g},${b})`;
        hh.innerText = col;
        document.querySelector('button').style.color = `rgb(${g},${r},${b})`;
        document.querySelector('button').style.backgroundColor = `rgb(${b},${r},${g})`;
    }
)