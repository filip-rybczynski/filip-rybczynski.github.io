import { PersonalInfo } from "../../data/interface";

export interface HeroProps extends Omit<PersonalInfo, "socials" | "repository"> {};