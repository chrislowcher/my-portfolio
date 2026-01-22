<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import type { Stat } from '~/models/stat';

const props = defineProps<{
  stats: Stat[]
}>()

const counterRefs = ref<HTMLElement[]>([])

const initOdometers = async () => {
  await nextTick()

  counterRefs.value.forEach((el, index) => {
    const stat = props.stats[index]
    if (!stat) return
    
    // @ts-ignore
    const odometer = new Odometer({
      el,
      format: '(,ddd)',
      duration: 1000,
    })

    odometer.render()

    // Trigger animation
    setTimeout(() => {
      odometer.update(stat.data)
    }, 500)
  })
}

onMounted(initOdometers)
</script>

<template>
    <ClientOnly>
        <dl
          class="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 backdrop-blur-xs"
        >
          <div
            v-for="(stat, index) in stats"
            :key="stat.id"
            class="flex flex-col bg-white/5 p-8"
          >
            <dt class="text-sm/6 font-semibold text-gray-300">
              {{ stat.description }}
            </dt>
      
            <dd
              class="order-first text-3xl font-semibold tracking-tight text-white flex justify-center items-center gap-1"
            >
              <span
                class="odometer"
                :ref="el => (counterRefs[index] = el as HTMLElement)"
              >
                0
              </span>
              <span v-if="stat.afterDetail">
                {{ stat.afterDetail }}
              </span>
            </dd>
          </div>
        </dl>
    </ClientOnly>
</template>
