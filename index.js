// fetch('/pkg/wasmtest2.js').then((a) => {
//     debugger;
//     console.log(a);
// })
import init from "/pkg/wasmtest2.js"
console.log(init);
document.getElementById('container').textContent = 'こんにちは from js'

init().then((b) => {
    console.log(b);
    b.greet();
})