import { IPC_REQUEST } from "../ipc/ipc-constants";
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