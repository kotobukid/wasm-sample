<script setup lang="ts">
import {computed, ref, Ref} from 'vue'

type Point2D = {
    x: number,
    y: number
}

defineProps<{ msg: string }>()

const count = ref(0)

const points: Ref<Point2D[]> = ref([])

const plot = (e: PointerEvent) => {
    points.value = [...points.value, {
        x: e.offsetX - 300,
        y: e.offsetY - 240
    }];
}
const points_line = computed(() => {
    return points.value.map(p => `${p.x}, ${p.y}`).join(' ')
})

const shake = () => {
    const range: number = 80;
    const randomize = () => {
        points.value = points.value.map((p: Point2D) => {
            return {
                x: Math.random() * range - range / 2 + p.x, y: Math.random() * range - range / 2 + p.y
            };
        })
    };
    randomize();
    const timer = setInterval(randomize, 110);
    setTimeout(() => {
        clearInterval(timer);
    }, 331)
}
</script>

<template lang="pug">
svg.main(width="600" height="480" viewBox="-300 -240 600 480"
    @pointerdown="plot"
)
    polyline(:points="points_line" stroke-width="1" stroke="blue" fill="none")
    g.points(v-for="p in points")
        circle(:cx="p.x" :cy="p.y" r="3" stroke="red" stroke-width="1" fill="none")
a.button(href="#" @click.prevent="shake") Shake

.card
    button(type="button" @click="count++") count is {{ count }}
    p
        span Edit
        code components/HelloWorld.vue
        span to test HMR
</template>

<style scoped lang="less">
svg.main {
    outline: 1px solid grey;

    circle, polyline {
        transition: 1s;
    }
}
</style>
