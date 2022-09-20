import axios from "axios";
import { Startup, StartupDTO } from "../../Types/Startup";
import StartupMapper from "./Startup.mapper";

export class StartupHttpService {
  public static async getStartupById(id: string | number): Promise<Startup> {
    const response = await axios.get<StartupDTO>(`/api/startups/${id}`);
    return StartupMapper.map(response.data);
  }

  public static async getStartup(): Promise<StartupDTO> {
    const response = await axios.get<StartupDTO>(`/api/startups`);
    return StartupMapper.map(response.data);
  }
}
