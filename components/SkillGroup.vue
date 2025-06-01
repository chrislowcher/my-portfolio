<template>
  <div class="transition duration-200 ease-in-out flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs">
    <component :is="icon" class="h-7 w-5 flex-none text-teal-400" aria-hidden="true" />
    <div class="text-base/7">
      <AutoHeight>
      <h3 class="font-semibold text-white mb-3">{{ title }}</h3>
        <div class="space-y-4">
          <TransitionGroup name="list" tag="div">
            <div v-for="(items, type) in grouped" :key="type" class="mt-3">
                <p class="text-sm font-semibold text-teal-700">{{ type }}</p>
                <TransitionGroup name="list" tag="p">
                  <p v-for="item in items" :key="item.name" class="text-gray-200">{{ item.name }}</p>
                </TransitionGroup>
            </div>
          </TransitionGroup>
        </div>
      </AutoHeight>
      </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  items: any[],
  title: string,
  icon: any
}>();

const grouped = computed(() => {
  return props.items.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = []
    acc[item.type].push(item)
    return acc
  }, {})
});

</script>

<style scoped>
/* Slide up transition */
.list-enter-active,
.list-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.list-enter-from {
  transform: translateX(2px);
  opacity: 0;
}
.list-leave-to {
  transform: translateX(-2px);
  opacity: 0;
}
</style>