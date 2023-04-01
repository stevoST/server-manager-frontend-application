import {Status} from "../enum/status.enum";

export interface Server {
  ip: number;
  ipAddress: string;
  name: string;
  memory: string;
  type: string;
  imageUrl: string;
  status: Status;
}
