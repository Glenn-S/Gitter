import { ReactElement, useCallback, useState } from "react";
import { GitClient } from "../git/git-client";
import { GitLogFormat } from '../git/git-constants';
import { Sidebar } from "../components/Sidebar/Sidebar";

const App = () : ReactElement => {
  return (
    <div className="bg-blue-500 h-screen">
      <div className="grid grid-cols-4">
          <div className="bg-red-500">
            Hello
          </div>
          <div className="col-span-2">
            Content
          </div>
          <div className="bg-green-500">
            World
          </div>
      </div>
    </div>
  
    // <div className="container mx-auto">
    //   <div className="grid">
    //     <div className="grid-rows-1">
    //       <div className="grid-cols-3">
    //         <Sidebar title='Repository'>
    //           <div>
    //             Local
    //           </div>
    //           <div>
    //             Remote
    //           </div>
    //           <div>
    //             Pull Requests
    //           </div>
    //           {/* <div>
    //             Issues
    //           </div>
    //           <div>
    //             Tags
    //           </div>
    //           <div>
    //             GitHub Actions
    //           </div> */}
    //         </Sidebar>
    //       </div>
    //       <div className="grid-cols-6">
    //         Git Tree
    //       </div>
    //       <div className="grid-cols-3">
    //         <Sidebar title='Commits'>
    //           <div>
    //             Changes
    //           </div>
    //           <div>
    //             Unstagged Files
    //           </div>
    //           <div>
    //             Staged Files
    //           </div>
    //           <div>
    //             Commit Message
    //             <p>
    //               Summary
    //             </p>
    //             <p>
    //               Description
    //             </p>
    //           </div>
    //           <div>
    //             <button>Commit</button>
    //           </div>
    //         </Sidebar> 
    //       </div>
    //     </div>
    //   </div>
    // </div>
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