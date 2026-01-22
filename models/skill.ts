export interface Skill{
    type: SkillTypeEnum;
    name: string;
    tags: string;
}

export enum SkillTypeEnum{
    Frontend = 1,
    Mobile = 2,
    Backend = 3,
    Data = 4,
    AI = 5,
    UI = 6,
    IDE = 7,
    Cloud = 8,
    Build = 9,
    Dev = 10,
    Test = 11,
    ORM = 12,
    DBA = 13,
    Design = 14,
    Media = 15
}