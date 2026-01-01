// @ts-types="solid-js"
import { JSX } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";
import * as Doc from "../workspace/document.tsx";
// @ts-types="solid-js"
import { createEffect } from "solid-js";

export function Text(props: { text: Reactive<string> }) {
  let spanRef: HTMLSpanElement | undefined;
  let isUserInput = false;

  const handleInput: JSX.InputEventHandlerUnion<HTMLSpanElement, InputEvent> = () => {
    if (spanRef) {
      isUserInput = true;
      console.log(spanRef.innerText);
      props.text.set(spanRef.innerText);
    }
  };

  createEffect(() => {
    const value = props.text.get(); // This tracks reactivity
    if (spanRef && !isUserInput && spanRef.innerText !== value) {
      spanRef.innerText = value;
    }
    isUserInput = false;
    console.log("update");
  });

  return (
    <span contentEditable onInput={handleInput} ref={spanRef}>
    </span>
  );
}

type Reactive<T> = { get: () => T; set: (v: T) => void };

export function makeReactive<T extends object, U extends keyof T>(element: T, key: U): Reactive<T[U]> {
  const [_, setElement] = createStore(element);

  return { get: () => element[key], set: (v) => setElement(key as any, v) };
}
