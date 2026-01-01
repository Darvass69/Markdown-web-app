import { createSignal } from "solid-js";
import { useWorkspaceContext } from "../../components/workspace/workspace.tsx";
import { Document } from "../../components/workspace/document.tsx";
// @ts-types="solid-js"
import { For } from "solid-js";
// @ts-types="solid-js"
import { Show } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";


let extraId = 0;

export function DynamicContent() {
  const [workspace, setWorkspace] = useWorkspaceContext();
  const [inputFile, setInputFile] = createSignal<File | null>(null);

  const handleFileInput = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    setInputFile(target.files?.[0] ?? null);
  };

  const addPage = () => {
    const newPage: Document = {
      title: "Test adding page",
      extraId: extraId++,
      body: [],
      children: [],
    };
    setWorkspace("documents", workspace.documents.length, newPage);
  };

  return (
    <>
      <h1 class="title">Dynamic content</h1>
      <input type="file" onInput={handleFileInput} />
      <br />
      <br />
      <button onClick={addPage}>Add page</button>
      <br />
      <br />
      <div style={{ "white-space": "pre-wrap", "font-family": "monospace" }}>
        {JSON.stringify(workspace, undefined, 4)}
      </div>

      <button onClick={() => {
        setWorkspace("documents", workspace.documents.length - 1, "children", 0, {
          title: "Without child",
          children: [],
        })
      }}>Test</button>
      <ul>
        <For each={workspace.documents}>
          {(page) => <Recursive page={page} />}
        </For>
      </ul>
    </>
  );
}

function Recursive(props: {page: Document}) {
  const [page, setPage] = createStore(props.page);

  const update = () => {
    setPage("extraId", (id) => (id ?? 0) + 1)
  }

  return <>
    <li>
      {page.title + " " + (page.extraId ?? 0)}
      <button onclick={() => update()}>Update</button>
      <Show when={page.children.length !== 0}>
        <ul>
          <For each={page.children}>
            {(page) => <Recursive page={page} />}
          </For>
        </ul>
      </Show>
    </li>
  </>
}


