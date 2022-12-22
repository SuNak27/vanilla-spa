import Button from "./components/button.js";

const ReactDOM = (function () {
  let _container;
  let _Component;

  return {
    update() {
      this.render(_container, _Component);
    },
    render(container, Component) {
      _container = container;
      _Component = Component;

      const focusedElementId = document.activeElement.id;
      const focusedElementSelectionStart =
        document.activeElement.selectionStart;
      const focusedElementSelectionEnd = document.activeElement.selectionEnd;

      const componentDOM = React.render(Component);
      container.replaceChildren();
      container.appendChild(componentDOM);

      if (focusedElementId) {
        const focusedElement = document.getElementById(focusedElementId);
        focusedElement.focus();
        focusedElement.selectionStart = focusedElementSelectionStart;
        focusedElement.selectionEnd = focusedElementSelectionEnd;
      }
    },
  };
})();

const React = (function () {
  let hooks = [];
  let currentIndex = 0;

  return {
    render(Component) {
      currentIndex = 0;

      const Comp = Component();
      return Comp;
    },
    useState(initialValue) {
      const useStateIndex = currentIndex;
      currentIndex++;

      hooks[useStateIndex] = hooks[useStateIndex] ?? initialValue;

      const setState = (newVal) => {
        const newState =
          typeof newVal === "function" ? newVal(hooks[useStateIndex]) : newVal;
        hooks[useStateIndex] = newState;
        ReactDOM.update();
      };

      return [hooks[useStateIndex], setState];
    },
    useReducer(reducer, initialState) {
      const useReducerIndex = currentIndex;
      currentIndex++;

      hooks[useReducerIndex] = hooks[useReducerIndex] ?? initialState;

      const dispatch = (action) => {
        const newState = reducer(hooks[useReducerIndex], action);
        hooks[useReducerIndex] = newState;
        ReactDOM.update();
      };

      return [hooks[useReducerIndex], dispatch];
    },
    useEffect(callback, depArray) {
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

function HomePage() {
  const [count, setCount] = React.useState(0);

  const h1 = document.createElement("h1");
  h1.textContent = "Button Counter";

  const button = Button({
    count,
    onButtonIncreaseClick: () => setCount(count + 1),
    onButtonDecreaseClick: () => setCount(count - 1),
  })

  const div = document.createElement("div");
  div.append(h1);
  div.append(button);

  return div;
}

function App() {
  const homePage = HomePage();
  return homePage;
}

const root = document.getElementById("root");
ReactDOM.render(root, App);