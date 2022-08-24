<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {onMounted} from "vue";

let wasm!: { greet: Function };

onMounted(() => {
    let timer = setInterval(() => {
        // @ts-ignore
        if (window.wasm) {
            // @ts-ignore
            wasm = window.wasm;
            clearInterval(timer);
            alert('wasm loaded');
        }
    })
})
const greet = () => {
    wasm.greet!();
}
</script>

<template>
    <a href="#" class="button" @click.prevent="greet">Greet from wasm</a>
    <HelloWorld msg="Vite + Vue"/>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
