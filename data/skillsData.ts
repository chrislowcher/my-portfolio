import { SkillTypeEnum, type Skill } from "~/models/skill";

export class SkillsData{
    static GetLanguages (): Skill[] {
        const languages: Skill[] = [
        // Backend
        { type: SkillTypeEnum.Backend, name: 'C#', tags: '#backend #frontend #mobile' },
        { type: SkillTypeEnum.Backend, name: 'Lua', tags: '#backend' },
        { type: SkillTypeEnum.Backend, name: 'SQL', tags: '#backend #data' },

        // Frontend
        { type: SkillTypeEnum.Frontend, name: 'Typescript', tags: '#frontend #mobile' },
        { type: SkillTypeEnum.Frontend, name: 'Javascript', tags: '#frontend #mobile' },
        { type: SkillTypeEnum.Frontend, name: 'CSS', tags: '#frontend #mobile #design' },
        { type: SkillTypeEnum.Frontend, name: 'HTML', tags: '#frontend #mobile #design' },
        ];

        return languages;
    }

    static GetFrameworks(): Skill[] {
        const frameworks: Skill[] = [
            // Backend
            { type: SkillTypeEnum.Backend, name: 'ASP.NET Core', tags: '#backend' },
            { type: SkillTypeEnum.Backend, name: 'MVC', tags: '#backend' },
            { type: SkillTypeEnum.Backend, name: 'Postgres', tags: '#backend #data' },
            { type: SkillTypeEnum.Backend, name: 'SQL Server', tags: '#backend #data' },

            // Frontend
            { type: SkillTypeEnum.Frontend, name: 'React', tags: '#frontend #mobile' },
            { type: SkillTypeEnum.Frontend, name: 'Vue', tags: '#frontend #mobile' },
            { type: SkillTypeEnum.Frontend, name: 'Nuxt', tags: '#frontend' },
            { type: SkillTypeEnum.Frontend, name: 'Blazor', tags: '#frontend #backend' },

            // Mobile
            { type: SkillTypeEnum.Mobile, name: 'React Native', tags: '#frontend #mobile' },
            { type: SkillTypeEnum.Mobile, name: 'Expo', tags: '#frontend #mobile' },
            { type: SkillTypeEnum.Mobile, name: 'Ionic', tags: '#frontend #mobile' },
            { type: SkillTypeEnum.Mobile, name: 'Capacitor', tags: '#frontend #mobile' },
            { type: SkillTypeEnum.Mobile, name: 'Xamarin', tags: '#frontend #mobile' },

            // UI
            { type: SkillTypeEnum.UI, name: 'Tailwind CSS', tags: '#frontend #design' },
            { type: SkillTypeEnum.UI, name: 'shadcn', tags: '#frontend #design' },
            { type: SkillTypeEnum.UI, name: 'PrimeVue', tags: '#frontend #design' },
            { type: SkillTypeEnum.UI, name: 'Quasar', tags: '#frontend #design' },
            { type: SkillTypeEnum.UI, name: 'MudBlazor', tags: '#frontend #design' },
            { type: SkillTypeEnum.UI, name: 'Radzen', tags: '#frontend #design' },

            // Testing Tools
            { type: SkillTypeEnum.Test, name: 'Cypress', tags: '#frontend' },
            { type: SkillTypeEnum.Test, name: 'NUnit', tags: '#backend' },

            // ORMs / Data Access
            { type: SkillTypeEnum.ORM, name: 'Entity Framework', tags: '#backend #data' },
            { type: SkillTypeEnum.ORM, name: 'NHibernate', tags: '#backend #data' },

        ];

        return frameworks;
    }

    static GetTools(): Skill[] {
        const tools: Skill[] = [
            // IDEs & Code Editors
            { type: SkillTypeEnum.IDE, name: 'Visual Studio', tags: '#backend #frontend #data' },
            { type: SkillTypeEnum.IDE, name: 'Visual Studio Code', tags: '#frontend #mobile #design' },
            { type: SkillTypeEnum.IDE, name: 'Cursor', tags: '#frontend #mobile #design #ai' },
            { type: SkillTypeEnum.IDE, name: 'Rider', tags: '#backend #frontend #data' },
            { type: SkillTypeEnum.IDE, name: 'xCode', tags: '#frontend #mobile' },
            { type: SkillTypeEnum.IDE, name: 'Android Studio', tags: '#frontend #mobile' },

            // AI Tools
            { type: SkillTypeEnum.AI, name: 'Roo Code', tags: '#ai' },
            { type: SkillTypeEnum.AI, name: 'Claude Code', tags: '#ai' },
            { type: SkillTypeEnum.AI, name: 'Copilot', tags: '#ai' },

            // Hosting / Cloud
            { type: SkillTypeEnum.Cloud, name: 'Azure', tags: '#backend #data' },
            { type: SkillTypeEnum.Cloud, name: 'AWS', tags: '#backend #data' },
            { type: SkillTypeEnum.Cloud, name: 'Firebase', tags: '#backend #data' },

            // Build Tools
            { type: SkillTypeEnum.Build, name: 'Vite', tags: '#frontend' },
            { type: SkillTypeEnum.Build, name: 'ESBuild', tags: '#frontend' },
            { type: SkillTypeEnum.Build, name: 'Expo EAS', tags: '#mobile' },
            { type: SkillTypeEnum.Build, name: 'GitHub Actions', tags: '#backend' },

            // Dev Tools / Utilities
            { type: SkillTypeEnum.Dev, name: 'git', tags: '#frontend #backend #mobile #data #design' },
            { type: SkillTypeEnum.Dev, name: 'npm', tags: '#frontend #backend #mobile #data #design' },
            { type: SkillTypeEnum.Dev, name: 'Swagger', tags: '#backend' },

            // Database Tools
            { type: SkillTypeEnum.DBA, name: 'pgAdmin', tags: '#backend #data' },
            { type: SkillTypeEnum.DBA, name: 'DBeaver', tags: '#backend #data' },
            { type: SkillTypeEnum.DBA, name: 'SSMS', tags: '#backend #data' },

            // Design Tools
            { type: SkillTypeEnum.Design, name: 'Figma', tags: '#frontend #design' },
            { type: SkillTypeEnum.Design, name: 'Storybook', tags: '#frontend #design' },

            // Media Tools
            { type: SkillTypeEnum.Media, name: 'GIMP', tags: '#design' },
            { type: SkillTypeEnum.Media, name: 'Photoshop', tags: '#design' },
            { type: SkillTypeEnum.Media, name: 'OBS', tags: '#design' },
            { type: SkillTypeEnum.Media, name: 'Shotcut', tags: '#design' },
            { type: SkillTypeEnum.Media, name: 'iMovie', tags: '#design' },
        ];

        return tools;
    }
}

