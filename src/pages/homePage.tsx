import { PageLinks } from "../components/workspace/workspaceRouting.tsx";

export function HomePage() {
  return (
    <>
      <h1 class="title">
        Home
      </h1>

      {PageLinks()}
    </>
  );
}
