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
</script>

<template>
    <svg class="main" width="600" height="480" viewBox="-300 -240 600 480"
        @pointerdown="plot"
    >
        <polyline :points="points_line" stroke-width="1" stroke="blue" fill="none"></polyline>
        <g class="points" v-for="p in points">
            <circle :cx="p.x" :cy="p.y" r="3" stroke="red" stroke-width="1" fill="none"></circle>
        </g>
    </svg>

    <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>
</template>

<style scoped>
svg.main {
    outline: 1px solid grey;
}
</style>
