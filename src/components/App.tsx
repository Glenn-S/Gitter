import { ReactElement, useCallback, useState } from "react";
import { GitClient } from "../git/git-client";
import { GitLogFormat } from '../git/git-constants';
import { Sidebar } from "./Sidebar/Sidebar";

const App = () : ReactElement => {
  return (
    <div>
      <Sidebar title='Repository'>
        <div>
          Local
        </div>
        <div>
          Remote
        </div>
        <div>
          Pull Requests
        </div>
        {/* <div>
          Issues
        </div>
        <div>
          Tags
        </div>
        <div>
          GitHub Actions
        </div> */}
      </Sidebar>
      <div>
        
      </div>
      <Sidebar title='Commits'>
        <div>
          Changes
        </div>
        <div>
          Unstagged Files
        </div>
        <div>
          Staged Files
        </div>
        <div>
          Commit Message
          <p>
            Summary
          </p>
          <p>
            Description
          </p>
        </div>
        <div>
          <button>Commit</button>
        </div>
      </Sidebar>
    </div>
  );
};

export default App;

// const initialState : GitLogFormat[] = [];

// const [gitCommits, setGitCommits] = useState(initialState);
  // const gitClient = new GitClient(); // possible refactor as a provider later

  // const sendRequest = useCallback(async () => {
  //   gitClient.getGitLogs()
  //     .then((result) => setGitCommits(result))
  //     .catch((err) => setGitCommits([]));
  // }, [gitCommits]);

  // return (
  //   <div>
  //     <button onClick={sendRequest}>
  //       Get directory contents
  //     </button>
  //     <div>
  //       <h2>Committers</h2>
  //       {gitCommits?.map((value, idx) => <p key={idx}>{value.commiter.name}</p>)}
  //     </div>
  //     <ul>
  //       {gitCommits?.map((value, idx) => <li key={idx}>{value.commit}</li>)}
  //     </ul>
  //   </div>
  // );