export interface ISkill {
  id: number,
  name: string,
  skills: string[],
  urlLogo: string,
  type: "LANGUAGE" | "FRAMEWORK" | "TOOL" | "LIBRARY" | "PLATFORM" | "SECURITY" | "IDE" | "DATABASE",
  isLearning: boolean
}