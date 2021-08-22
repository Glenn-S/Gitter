import { exec } from "child_process";

/**
 * Definition for packaging command line output and errors.
 */
export interface ExecResponse {
  stdout : string,
  stderr : string
};

/**
 * Async method for executing command line requests
 * @param command the command to execute
 * @returns a promise containing the command line output and errors.
 */
export const execAsync = async (command : string) => {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        console.error(err);
      }
      resolve({ stdout, stderr } as ExecResponse);
    });
  });
};