import { BlotterRemark } from "./blotter-remark";

export interface Blotter {
  isComplainant: boolean;
  respondent: string[];
  complainant: string[];
  complain: string;
  subject: string;
  date: Date;
  status: string;
  remarks: BlotterRemark[];
  caseNumber: string;
}
