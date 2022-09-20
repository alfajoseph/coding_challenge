import USP from "./StartupUsp";
import { File } from "./File";

export interface Startup {
  id: number;
  dateCreated: Date;
  name: string;
  country: string;
  dateFounded: Date;
  employees: string;
  legalEntity: string;
  mainContact: string;
  address: string;
  additionalContacts: string;
  website: string;
  referenceCustomers: string;
  shortDescription: string;
  description: string;
  usps: USP[];
  technologyReadiness: string;
  investors: string;
  currentInvestmentStage: string;
  totalFunding: number;
  files: File[];
}

export interface StartupDTO
  extends Omit<Startup, ["dateCreated", "dateFounded"]> {
  dateCreated: Date;
  dateFounded: Date;
}

export interface StartupFilterCriteria {
  currentInvestmentStage?: string;
  employees?: string;
}

export interface StartupContactsAssociation {
  id: number;
  name: string;
}
