import { createSignal } from "solid-js";

/**
 * Renders a markdown document given by the user from the file system.
 */
export function FileContent() {
  const [inputFile, setInputFile] = createSignal<File | null>(null);
  const filename = () => inputFile() !== null ? (inputFile() as File).name : "";
  const [fileContent, setFileContent] = createSignal<string | null>(null);
  const fileExtension = () => filename().split(".").pop();

  const handleFileInput = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    setInputFile(target.files?.[0] ?? null);
  };

  const handleReadFile = () => {
    const file = inputFile();
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFileContent(event.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
      <h1 class="title">File content</h1>
      <input type="file" onInput={handleFileInput} />
      <br />
      {filename() !== "" && <p>Selected file: {filename()}</p>}
      <button onClick={() => handleReadFile()}>
        Render file
      </button>
      {fileExtension() === "json" ? <pre>{renderFromAst(fileContent())}</pre> : fileContent() && (
        <pre>
          {fileContent()}
        </pre>
      )}
    </>
  );
}

function renderFromAst(file: string | null) {
  return file ?? "None";
}
