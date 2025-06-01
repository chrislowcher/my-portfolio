<template>
  <div ref="container" :style="style">
    <div ref="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const container = ref<HTMLElement | null>(null)
const content = ref<HTMLElement | null>(null)
const style = ref<Record<string, string>>({
  overflow: 'hidden',
  transition: 'height 0.4s ease',
  height: 'auto',
})

let resizeObserver: ResizeObserver | null = null

function animateHeightChange() {
  if (!container.value || !content.value) return

  const el = container.value
  const inner = content.value

  const prevHeight = el.offsetHeight
  const nextHeight = inner.offsetHeight

  // Force current height
  el.style.height = prevHeight + 'px'

  // Wait for DOM to apply the current height
  requestAnimationFrame(() => {
    el.style.height = nextHeight + 'px'

    const onTransitionEnd = () => {
      el.style.height = 'auto'
      el.removeEventListener('transitionend', onTransitionEnd)
    }

    el.addEventListener('transitionend', onTransitionEnd)
  })
}

onMounted(() => {
  nextTick(() => {
    animateHeightChange()

    resizeObserver = new ResizeObserver(() => {
      animateHeightChange()
    })

    if (content.value) {
      resizeObserver.observe(content.value)
    }
  })
})

onBeforeUnmount(() => {
  if (resizeObserver && content.value) {
    resizeObserver.unobserve(content.value)
  }
})
</script>