<template>
  <div class="space-y-4">
    <div v-for="(items, type) in grouped" :key="type">
        <p class="text-sm font-semibold text-teal-700">{{ type }}</p>
        <p v-for="item in items" :key="item.name" class="text-gray-200">{{ item.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

const grouped = computed(() => {
  return props.items.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = []
    acc[item.type].push(item)
    return acc
  }, {})
});
</script>