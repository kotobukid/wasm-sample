import init from "/wasm/wasmtest2.js"

// document.getElementById('app').textContent = 'こんにちは from js'

init().then((wasm) => {
    window.wasm = wasm;
})