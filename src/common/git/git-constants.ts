
export interface GitLogFormat {
  commit: number,
  abbreviated_commit: number,
  tree: number,
  abbreviated_tree: number,
  parent: number,
  abbreviated_parent: number,
  refs: string,
  encoding: string,
  subject: string,
  sanitized_subject_line: string,
  body: string,
  commit_notes: string,
  verification_flag: string,
  signer: string,
  signer_key: string,
  author: {
    name: string,
    email: string,
    date: Date
  },
  commiter: {
    name: string,
    email: string,
    date: Date
  }
};

// Credit for formatting: https://gist.github.com/varemenos/e95c2e098e657c7688fd
export const GIT_LOG_FORMAT = 
'{\
  "commit": "%H",\
  "abbreviated_commit": "%h",\
  "tree": "%T",\
  "abbreviated_tree": "%t",\
  "parent": "%P",\
  "abbreviated_parent": "%p",\
  "refs": "%D",\
  "encoding": "%e",\
  "subject": "%s",\
  "sanitized_subject_line": "%f",\
  "body": "%b",\
  "commit_notes": "%N",\
  "verification_flag": "%G?",\
  "signer": "%GS",\
  "signer_key": "%GK",\
  "author": {\
    "name": "%aN",\
    "email": "%aE",\
    "date": "%aD"\
  },\
  "commiter": {\
    "name": "%cN",\
    "email": "%cE",\
    "date": "%cD"\
  }\
},';
