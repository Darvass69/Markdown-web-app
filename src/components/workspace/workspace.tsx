import { createContext, ParentProps, useContext } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";
import * as doc from "./document.tsx";
import { defaultWorkspace } from "./defaultWorkspace.ts";

export type Workspace = {
  settings: {};
  documents: doc.Document[];
};

export type WorkspaceContextContent = [Workspace, SetStoreFunction<Workspace>]

const WorkspaceContext = createContext<WorkspaceContextContent>();

export function WorkspaceProvider(props: ParentProps) {
  const [workspace, setWorkspace] = createStore<Workspace>(defaultWorkspace);

  return (
    <WorkspaceContext.Provider value={[workspace, setWorkspace]}>
      {props.children}
    </WorkspaceContext.Provider>
  );
}

export class WorkspaceContextError extends Error {
  constructor() {
    super("Could not find workspace context");
  }
}

export function useWorkspaceContext() {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new WorkspaceContextError();
  }
  return context;
}


