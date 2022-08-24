import init from "/wasm/wasmtest2.js"

document.getElementById('container').textContent = 'こんにちは from js'

init().then((wasm) => {
    console.log(wasm);
    wasm.greet();
})