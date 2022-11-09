<script setup>
import { ref } from "vue";

const count = ref(0);

const addCount = () => {
    count.value = count.value + 1;
};
</script>

<template>
    <div>
        <h2>Counter</h2>
        <p>Count:{{ count }}</p>
        <button @click="addCount">Add</button>
    </div>
</template>