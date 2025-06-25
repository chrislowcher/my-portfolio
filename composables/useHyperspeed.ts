const hyperspeedHandler = ref<(() => void) | null>(null);

export const useHyperspeed = () => {
  const registerHyperspeed = (fn: () => void) => {
    hyperspeedHandler.value = fn;
  };

  const triggerHyperspeed = () => {
    if (hyperspeedHandler.value) {
      hyperspeedHandler.value();
    } else {
      console.warn('Hyperspeed not registered yet');
    }
  };

  return {
    registerHyperspeed,
    triggerHyperspeed
  };
};