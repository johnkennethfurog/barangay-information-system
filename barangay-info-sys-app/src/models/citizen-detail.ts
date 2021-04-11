import { Blotter } from "./blotter";
import { Document } from "./document";

export class CitizenDetail {
  citizenId?: number;
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth?: Date;
  address: string;
  areaId: number;
  avatar: string;
  email: string;
  mobileNo: string;
  blotters: Blotter[];
  documents: Document[];

  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.middleName = "";
    this.address = "";
    this.areaId = -1;
    this.avatar = "";
    this.email = "";
    this.mobileNo = "";
    this.blotters = [];
    this.documents = [];
  }
}
