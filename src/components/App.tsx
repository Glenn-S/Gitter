import { ReactElement, useCallback, useState } from "react";
import { GitClient } from "../git/git-client";
import { GitLogFormat } from '../git/git-constants';

const initialState : GitLogFormat[] = [];

const App = () : ReactElement => {
  const [gitCommits, setGitCommits] = useState(initialState);
  const gitClient = new GitClient(); // possible refactor as a provider later

  const sendRequest = useCallback(async () => {
    gitClient.getGitLogs()
      .then((result) => setGitCommits(result))
      .catch((err) => setGitCommits([]));
  }, [gitCommits]);

  return (
    <div>
      <button onClick={sendRequest}>
        Get directory contents
      </button>
      <div>
        <h2>Committers</h2>
        {gitCommits?.map((value, idx) => <p key={idx}>{value.commiter.name}</p>)}
      </div>
      <ul>
        {gitCommits?.map((value, idx) => <li key={idx}>{value.commit}</li>)}
      </ul>
    </div>
  );
};

export default App;