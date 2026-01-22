const hyperspeedHandler = ref<(() => void) | null>(null);

const isHyperspeed = ref(false);

export const useHyperspeed = () => {
  const registerHyperspeed = (fn: () => void) => {
    hyperspeedHandler.value = fn;
  };

  const triggerHyperspeed = () => {
    if (hyperspeedHandler.value) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      isHyperspeed.value = true;

      hyperspeedHandler.value();
      setTimeout(() => {
        isHyperspeed.value = false;
      }, 2500);
    } else {
      console.warn('Hyperspeed not registered yet');
    }
  };

  return {
    isHyperspeed,
    registerHyperspeed,
    triggerHyperspeed
  };
};