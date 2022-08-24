import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// fetch('/js/index.js').then((a) => {
//     console.log(a);
// })
// import "../../../public/js/index.js";

createApp(App).mount('#app')

async function main () {
    // @ts-ignore
    const module = await import ('/js/index.js');
    console.log(module);
}

main();