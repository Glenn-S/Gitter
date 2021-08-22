import { ipcMain } from "electron";
import { GitLogFormat, GIT_LOG_FORMAT } from "./git-constants";
import { execAsync, ExecResponse } from "../../utils/process";
import { IPC_REQUEST } from "../ipc-constants";

/**
 * Makes request to get the commit logs 
 * @returns a json format of the git logs.
 */
ipcMain.handle(IPC_REQUEST.LOGS, async (event, args) => {
  const { stdout, stderr } = await execAsync(`git log --pretty=format:'${GIT_LOG_FORMAT}'`) as ExecResponse;
  if (stderr) console.error(stderr);

  return JSON.parse(`[${stdout.slice(0, -1)}]`) as GitLogFormat[];
});
