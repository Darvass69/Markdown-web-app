/* @refresh reload */
import { render } from "solid-js/web";
import { A, HashRouter, Route } from "@solidjs/router";
import "./index.scss";
import { HomePage } from "./pages/homePage.tsx";
import { PageRoutes } from "./components/workspace/workspaceRouting.tsx";
import { ParentProps } from "solid-js";
import { NotFoundPage } from "./pages/notFoundPage.tsx";
import { WorkspaceProvider } from "./components/workspace/workspace.tsx";

function GoBackLayout(props: ParentProps) {
  return (
    <>
      <A href="/">Home</A>
      {props.children}
    </>
  );
}

render(() => (
  <WorkspaceProvider>
    <HashRouter
      root={GoBackLayout}
    >
      <Route path="/" component={HomePage} />
      <PageRoutes />
      <Route path="*404" component={NotFoundPage} />
    </HashRouter>
  </WorkspaceProvider>
), document.getElementById("root")!);
