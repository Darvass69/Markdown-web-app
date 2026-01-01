import { A, Route } from "@solidjs/router";
import { For, // @ts-types="solid-js"
JSX, Show } from "solid-js";
import { useWorkspaceContext, Workspace } from "./workspace.tsx";
import { Document, ElementType, RenderDocument } from "./document.tsx";
import { createStore, SetStoreFunction } from "solid-js/store";

/**
 * Create routes for every pages in the WorkspaceContext
 */

/* --------------------------------- Routing -------------------------------- */
export function PageRoutes() {
  const [workspace, setWorkspace] = useWorkspaceContext();

  return (
    <>
      {RecursivePageRoutes(workspace.documents, "")}
    </>
  );
}

function RecursivePageRoutes(pages: Document[], path: string) {
  return (
    <For each={pages}>
      {(page) => {
        const newPath = createPagePath(page, path);
        console.log(newPath);
        return (
          <>
            <Route
              path={newPath}
              component={() => RenderDocument(page)}
            >
            </Route>
            {RecursivePageRoutes(page.children, newPath)}
          </>
        );
      }}
    </For>
  );
}

function getFileName(data: Document) {
  return `${data.title.replace(" ", "-")}-${data.extraId}`;
}

function createPagePath(data: Document, path: string) {
  return (path === "" ? "" : path + "/") + getFileName(data);
}

/* ---------------------------------- Links --------------------------------- */
export function PageLinks(pages?: Document[], path?: string): JSX.Element {
  if (pages === undefined || path === undefined) {
    const [workspace, setWorkspace] = useWorkspaceContext();

    return PageLinks(workspace.documents, "")
  }

  return (
    <>
      <ul>
        <For each={pages}>
          {(page) => {
            const newPath = createPagePath(page, path);
            return (
              <>
                <li>
                  <A href={newPath}>{page.title}</A>
                </li>
                <Show when={page.children.length > 0}>
                  {PageLinks(page.children, newPath)}
                </Show>
              </>
            );
          }}
        </For>
      </ul>
    </>
  );
}
