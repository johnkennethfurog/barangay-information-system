import { Blotter } from "./blotter";
import { Document } from "./document";

export interface CitizenDetail {
  citizenId: number;
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: Date;
  address: string;
  area: string;
  avatar: string;
  email: string;
  mobileNo: string;
  blotters: Blotter[];
  documents: Document[];
}
