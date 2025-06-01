<template>
    <div class="relative isolate overflow-hidden pb-12 sm:pb-16">
        <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              <div class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs">
                <component :is="CodeBracketIcon" class="h-7 w-5 flex-none text-teal-400" aria-hidden="true" />
                <div class="text-base/7">
                    <h3 class="font-semibold text-white mb-3">Languages</h3>
                    <SkillGroup :items="languages" />
                </div>
              </div>
              <div class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs">
                <component :is="PuzzlePieceIcon" class="h-7 w-5 flex-none text-teal-400" aria-hidden="true" />
                <div class="text-base/7">
                    <h3 class="font-semibold text-white mb-3">Frameworks</h3>
                    <SkillGroup :items="frameworks" />
                </div>
              </div>
              <div class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset backdrop-blur-xs">
                <component :is="WrenchScrewdriverIcon" class="h-7 w-5 flex-none text-teal-400" aria-hidden="true" />
                <div class="text-base/7">
                    <h3 class="font-semibold text-white mb-3">Tools</h3>
                    <SkillGroup :items="tools" />
                </div>
              </div>
            </div>
        </div>
    </div>  
</template>

<script setup lang="ts">
import { PuzzlePieceIcon, CodeBracketIcon, WrenchScrewdriverIcon } from '@heroicons/vue/20/solid'

const tags = [
    { name: 'Backend', icon: '', tag: '#backend' },
    { name: 'Frontend', icon: '', tag: '#frontend' },
    { name: 'Mobile', icon: '', tag: '#mobile' },
    { name: 'Design', icon: '', tag: '#design' },
    { name: 'Data', icon: '', tag: '#data' },
];

const languages = [
    // Backend
    { type: 'Backend', name: 'C#', tags: '#backend #frontend #mobile' },
    { type: 'Backend', name: 'Lua', tags: '#backend' },
    { type: 'Backend', name: 'SQL', tags: '#backend' },

    // Frontend
    { type: 'Frontend', name: 'Typescript', tags: '#frontend #mobile' },
    { type: 'Frontend', name: 'Javascript', tags: '#frontend #mobile' },
    { type: 'Frontend', name: 'CSS', tags: '#frontend #mobile #design' },
    { type: 'Frontend', name: 'HTML', tags: '#frontend #mobile #design' },
];

const frameworks = [
    { type: 'Backend', name: 'MVC', tags: '#backend' },
    { type: 'Backend', name: 'ASP.NET Core', tags: '#backend' },
    { type: 'Backend', name: 'AWS', tags: '#backend' },
    { type: 'Backend', name: 'Azure', tags: '#backend' },
    { type: 'Backend', name: 'Postgres', tags: '#backend #data' },
    { type: 'Backend', name: 'SQL Server', tags: '#backend #data' },

    { type: 'Frontend', name: 'Vue', tags: '#frontend #mobile' },
    { type: 'Frontend', name: 'Nuxt', tags: '#frontend' },
    { type: 'Frontend', name: 'React', tags: '#frontend #mobile' },
    { type: 'Frontend', name: 'Blazor', tags: '#frontend #backend' },
    
    { type: 'Mobile', name: 'Ionic', tags: '#frontend #mobile' },
    { type: 'Mobile', name: 'Capacitor', tags: '#frontend #mobile' },
    { type: 'Mobile', name: 'Xamarin', tags: '#frontend #mobile' },
    
    { type: 'UI', name: 'Tailwind CSS', tags: '#frontend #design' },
    { type: 'UI', name: 'PrimeVue', tags: '#frontend #design' },
    { type: 'UI', name: 'Quasar', tags: '#frontend #design' },
    { type: 'UI', name: 'MudBlazor', tags: '#frontend #design' },
    { type: 'UI', name: 'Radzen', tags: '#frontend #design' }
];

const tools = [
  // IDEs & Code Editors
  { type: 'IDE', name: 'Visual Studio', tags: '#backend #frontend #data' },
  { type: 'IDE', name: 'Visual Studio Code', tags: '#frontend #mobile #design' },
  { type: 'IDE', name: 'Rider', tags: '#backend #frontend #data' },

  // Database Tools
  { type: 'DBA', name: 'pgAdmin', tags: '#backend #data' },
  { type: 'DBA', name: 'DBeaver', tags: '#backend #data' },
  { type: 'DBA', name: 'SSMS', tags: '#backend #data' },

  // Build Tools
  { type: 'Build', name: 'Vite', tags: '#frontend' },
  { type: 'Build', name: 'ESBuild', tags: '#frontend' },
  { type: 'Build', name: 'PostCSS', tags: '#frontend #design' },
  { type: 'Build', name: 'GitHub Actions', tags: '#backend' },
  
  // Dev Tools / Utilities
  { type: 'Dev', name: 'git', tags: '#frontend #backend #mobile #data #design' },
  { type: 'Dev', name: 'npm', tags: '#frontend #backend #mobile #data #design' },
  { type: 'Dev', name: 'Swagger', tags: '#backend' },
  
  // Testing Tools
  { type: 'Test', name: 'Cypress', tags: '#frontend' },
  { type: 'Test', name: 'NUnit', tags: '#backend' },
  
  // ORMs / Data Access
  { type: 'ORM', name: 'Entity Framework', tags: '#backend #data' },

  // Design Tools
  { type: 'Design', name: 'Figma', tags: '#frontend #design' },
  { type: 'Design', name: 'Storybook', tags: '#frontend #design' },
  
  // Hosting / Cloud
  { type: 'Cloud', name: 'Azure App Services', tags: '#backend #data' },
  { type: 'Cloud', name: 'Azure Static Web Apps', tags: '#frontend' },
  { type: 'Cloud', name: 'Firebase', tags: '#backend #data' },
  { type: 'Cloud', name: 'AWS SQS', tags: '#backend #data' },
  { type: 'Cloud', name: 'AWS RDS', tags: '#backend #data' },

  // Media Tools
  { type: 'Media', name: 'GIMP', tags: '#design' },
  { type: 'Media', name: 'Photoshop', tags: '#design' },
  { type: 'Media', name: 'OBS', tags: '#design' },
  { type: 'Media', name: 'Shotcut', tags: '#design' },
  { type: 'Media', name: 'iMovie', tags: '#design' },
];
</script>