<template>
    <div class="z-20">
        <div class="relative isolate overflow-hidden py-24 sm:py-32">
            <div class="relative mx-auto max-w-7xl">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">Skills</p>
                    <h2 class="text-base/8 font-semibold text-cyan-500">that pay the bills</h2>
                    <p class="mt-6 text-lg/8 text-gray-300">Here are all of my skills related to digital technology and creativty. Outside of these listed skills, I am an avid golfer, skateboarder, and snowboarder. I also have some pretty sweet LEGO building skills.</p>
                </div>
            </div>
        </div>
        <div class="relative isolate overflow-hidden pb-12 sm:pb-16">
            <div class="relative mx-auto max-w-7xl">
                <div class="flex items-center">
                    <UiChipButton @toggled="(selected: boolean) => filter(selected, '#frontend')">Frontend</UiChipButton>
                    <UiChipButton @toggled="(selected: boolean) => filter(selected, '#mobile')">Mobile</UiChipButton>
                    <UiChipButton @toggled="(selected: boolean) => filter(selected, '#backend')">Backend</UiChipButton>
                    <UiChipButton @toggled="(selected: boolean) => filter(selected, '#ai')">AI</UiChipButton>
                    <UiChipButton @toggled="(selected: boolean) => filter(selected, '#design')">Design</UiChipButton>
                    <UiChipButton @toggled="(selected: boolean) => filter(selected, '#data')">Data</UiChipButton>
                </div>
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 items-start mt-6">
                    <SkillGroup :items="filteredLanguages" title="Languages" :icon="CodeBracketIcon" />
                    <SkillGroup :items="filteredFrameworks" title="Frameworks" :icon="PuzzlePieceIcon" />
                    <SkillGroup :items="filteredTools" title="Tools" :icon="WrenchScrewdriverIcon" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHyperspeed } from '@/composables/useHyperspeed';
import { CodeBracketIcon, PuzzlePieceIcon, WrenchScrewdriverIcon } from '@heroicons/vue/20/solid';
import { useRouter } from 'vue-router';
import { SkillsData } from '~/data/skillsData';

onMounted(() => {
    document.documentElement.style.setProperty('--base-app-color','var(--color-cyan-500)');
});

const router = useRouter();
const { triggerHyperspeed } = useHyperspeed();

const goBack = () => {
    triggerHyperspeed();
    router.push('/');
}

const languages = SkillsData.GetLanguages();
const frameworks = SkillsData.GetFrameworks();
const tools = SkillsData.GetTools();
const selectedTags = ref<Set<string>>(new Set());

const matchesSelectedTags = (tags: string) => {
  if (selectedTags.value.size === 0) return true;

  return Array.from(selectedTags.value).some(tag =>
    tags.includes(tag)
  );
};

const filteredLanguages = computed(() =>
  languages.filter(x => matchesSelectedTags(x.tags))
);

const filteredFrameworks = computed(() =>
  frameworks.filter(x => matchesSelectedTags(x.tags))
);

const filteredTools = computed(() =>
  tools.filter(x => matchesSelectedTags(x.tags))
);

const filter = (selected: boolean, tag: string) => {
  if (selected) {
    selectedTags.value.add(tag);
  } else {
    selectedTags.value.delete(tag);
  }

  // force reactivity since Set is mutable
  selectedTags.value = new Set(selectedTags.value);
};

</script>