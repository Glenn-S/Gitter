import { IPC_REQUEST } from "../common/ipc-constants";
import { GitLogFormat } from "./git-constants";
const { ipcRenderer } = window.require("electron");

export class GitClient {
  constructor() { }

  /**
   * 
   * @returns 
   */
  getGitLogs = async () : Promise<GitLogFormat[]> => 
    ipcRenderer.invoke(IPC_REQUEST.LOGS);
};