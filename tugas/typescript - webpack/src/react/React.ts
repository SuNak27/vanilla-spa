import { Product } from "../view/FetchData";

export type Data = {
  products: Product[];
};

export type State = {
  inputValue: string;
  tag: "idle" | "loading" | "loaded" | "error" | "empty";
  errorMessage: string;
  products: Product[];
};

export type Action =
  | {
    type: "FETCH";
  }
  | {
    type: "FETCH_SUCCESS";
    payload: { products: Product[] };
  }
  | {
    type: "FETCH_EMPTY";
  }
  | {
    type: "FETCH_ERROR";
    payload: { errorMessage: string };
  }
  | {
    type: "CHANGE_INPUT";
    payload: { inputValue: string };
  }
  | {
    type: "CLEAR_INPUT";
  };

export const ReactDOM = (function () {
  let _container: HTMLElement;
  let _Component: () => HTMLElement;

  return {
    update() {
      this.render(_container, _Component);
    },
    render(container: HTMLElement, Component: () => HTMLElement) {
      _container = container;
      _Component = Component;

      const focusedElementId = document.activeElement.id;
      const focusedElementSelectionStart =
        // @ts-ignore
        document.activeElement.selectionStart;
      // @ts-ignore
      const focusedElementSelectionEnd = document.activeElement.selectionEnd;

      const componentDOM = React.render(Component);
      container.replaceChildren();
      container.appendChild(componentDOM);

      if (focusedElementId) {
        const focusedElement = document.getElementById(focusedElementId);
        focusedElement.focus();
        // @ts-ignore
        focusedElement.selectionStart = focusedElementSelectionStart;
        // @ts-ignore
        focusedElement.selectionEnd = focusedElementSelectionEnd;
      }
    },
  };
})();

export const React = (function () {
  let hooks = [];
  let currentIndex = 0;

  return {
    render(Component: () => HTMLElement) {
      currentIndex = 0;

      const Comp = Component();
      return Comp;
    },
    useState<T>(initialValue: T): [T, (newVal: T) => void] {
      const useStateIndex = currentIndex;
      currentIndex++;

      hooks[useStateIndex] = hooks[useStateIndex] ?? initialValue;

      const setState = (newVal: T) => {
        const newState =
          typeof newVal === "function" ? newVal(hooks[useStateIndex]) : newVal;
        hooks[useStateIndex] = newState;
        ReactDOM.update();
      };

      return [hooks[useStateIndex], setState];
    },
    useReducer<State, Action>(
      reducer: (prevState: State, action: Action) => State,
      initialState: State
    ): [State, (action: Action) => void] {
      const useReducerIndex = currentIndex;
      currentIndex++;

      hooks[useReducerIndex] = hooks[useReducerIndex] ?? initialState;

      const dispatch = (action: Action) => {
        const newState = reducer(hooks[useReducerIndex], action);
        hooks[useReducerIndex] = newState;
        ReactDOM.update();
      };

      return [hooks[useReducerIndex], dispatch];
    },
    useEffect(callback: () => void, depArray: any[]) {
      const hasNoDeps = !depArray;
      const deps = hooks[currentIndex];
      const hasChangedDeps = deps
        ? !depArray.every((el, i) => el === deps[i])
        : true;
      if (hasNoDeps || hasChangedDeps) {
        hooks[currentIndex] = depArray;
        callback();
      }
      currentIndex++;
    },
  };
})();

export function reducer(prevState: State, action: Action): State {
  switch (prevState.tag) {
    case "idle": {
      switch (action.type) {
        case "FETCH": {
          return { ...prevState, tag: "loading" };
        }
        default: {
          return prevState;
        }
      }
    }
    case "loading": {
      switch (action.type) {
        case "FETCH_SUCCESS": {
          return {
            ...prevState,
            tag: "loaded",
            errorMessage: "",
            products: action.payload.products,
          };
        }
        case "FETCH_EMPTY": {
          return {
            ...prevState,
            tag: "empty",
            errorMessage: "",
            products: [],
          };
        }
        case "FETCH_ERROR": {
          return {
            ...prevState,
            tag: "error",
            errorMessage: action.payload.errorMessage,
            products: [],
          };
        }
        default: {
          return prevState;
        }
      }
    }
    case "loaded": {
      switch (action.type) {
        case "CHANGE_INPUT": {
          return {
            ...prevState,
            inputValue: action.payload.inputValue,
          };
        }
        case "CLEAR_INPUT": {
          return {
            ...prevState,
            inputValue: "",
          };
        }
        case "FETCH": {
          return { ...prevState, tag: "loading" };
        }
        default: {
          return prevState;
        }
      }
    }
    case "empty": {
      switch (action.type) {
        case "CHANGE_INPUT": {
          return {
            ...prevState,
            inputValue: action.payload.inputValue,
          };
        }
        case "CLEAR_INPUT": {
          return {
            ...prevState,
            inputValue: "",
          };
        }
        case "FETCH": {
          return { ...prevState, tag: "loading" };
        }
        default: {
          return prevState;
        }
      }
    }
    case "error": {
      switch (action.type) {
        case "CHANGE_INPUT": {
          return {
            ...prevState,
            inputValue: action.payload.inputValue,
          };
        }
        case "CLEAR_INPUT": {
          return {
            ...prevState,
            inputValue: "",
          };
        }
        case "FETCH": {
          return { ...prevState, tag: "loading" };
        }
        default: {
          return prevState;
        }
      }
    }
    default: {
      return prevState;
    }
  }
}