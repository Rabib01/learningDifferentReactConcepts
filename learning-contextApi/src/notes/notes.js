{
  /**
   * Context APi helps with the Challlenge of passing the data down multiple levels of components in react
   * Without the need to pass propes to every single component in the hierarchy
   * Can be thought of as Global state management in the application
   *
   * ContextApi is useful for passing the data that is global, frequently updated and deeply nested components
   * for example : user credentials and login state, cart state in ecom, theme preferences and iser language preferences
   *
   * how to create ?
   * create a context
   * context - A shared piece of information that React can make available to any components without passing it manually through props.
   * provide the context to the part of the app that needs it
   * consume the context data without prop drilling
   *
   * step - 1 : create a Context using the createContext() method
   *  - takes a context argument to set the default value for the context if no provider is available
   * step - 2 : create a provider component using this context which will provide the data to all the children components available
   *  - here children represents the compents that will be wrapped inside the Provider
   *  - the provider component accepts a value prop defining hte data shared with its children
   *  - create a themeState using hte use state hook along with toogle function to toggle the states between light and dark
   *  - then we provide the themeState and the toogle function to the value prop
   * step - 3 : wrap the components that needs access to the context data with the provider component
   *  - App.jsx file is an ideal location for this
   *  - wrap all of the components there
   *  -
   */
}

{
  /**       C U S T O M         H O O K S 
   * The empty dependency array [] means:
   * Run this effect after the component is mounted, and don't run it again because of re-renders.
   * We use useEffect because window.addEventListener() is an interaction with something outside React — the browser's window object.
   *
   * React is responsible for rendering your component.
   * The browser is responsible for things like: window, document, localStorage, eventListeners, timers
   * useEffect is where React gives you a place to synchronize with those external things.
   * 
             COMPONENT MOUNTS
                    ↓
              useEffect runs
                    ↓
       ┌────────────┴────────────┐
       ↓                         ↓
 add online listener       add offline listener
       │                         │
       └────────────┬────────────┘
                    ↓
              Component runs
                    ↓
          Browser detects offline
                    ↓
            handleOffline()
                    ↓
        setIsOnline(false)
                    ↓
             React re-renders
                    ↓
             Component unmounts
                    ↓
            cleanup function
                    ↓
       ┌────────────┴────────────┐
       ↓                         ↓
remove online listener     remove offline listener
   * 
   *  useEffect - "When my component enters the world, set this external thing up; when my component leaves the world, clean that external thing up."
   *  Now imagine you also want to use the same logic in a different component. You want to implement a Save button that will become disabled and show “Reconnecting…” instead of “Save” while the network is off.
   * 
// React component names must start with a capital letter, like StatusBar and SaveButton. React components also need to return something that React knows how to display, like a piece of JSX.
// Hook names must start with use followed by a capital letter, like useState (built-in) or useOnlineStatus (custom, like earlier on the page). Hooks may return arbitrary values.
  * 
  * In the earlier example, when you turned the network on and off, both components updated together. However, it’s wrong to think that a single isOnline state variable is shared between them. Look at this code:
  * 
Custom Hooks let you share stateful logic but not state itself. Each call to a Hook is completely independent from every other call to the same Hook. This is why the two sandboxes above are completely equivalent. If you’d like, scroll back up and compare them. The behavior before and after extracting a custom Hook is identical.

When you need to share the state itself between multiple components, lift it up and pass it down instead.


When to use custom Hooks 
You don’t need to extract a custom Hook for every little duplicated bit of code. 
Some duplication is fine. 
For example, extracting a useFormInput Hook to wrap a single useState call
 like earlier is probably unnecessary.

However, whenever you write an Effect, consider whether it would be clearer to also wrap it in a 
custom Hook. You shouldn’t need Effects very often, so if you’re writing one, 
it means that you need to “step outside React” to synchronize with some external system or to
do something that React doesn’t have a built-in API for. Wrapping it into a custom Hook lets 
you precisely communicate your intent and how the data flows through it.

For example, consider a ShippingForm component that displays two dropdowns: one 
shows the list of cities, and another shows the list of areas in the selected city. 
You might start with some code that looks like this:

You make the data flow to and from your Effects very explicit.
You let your components focus on the intent rather than on the exact implementation of your Effects.
When React adds new features, you can remove those Effects without changing any of your components

Recap : 
Custom Hooks let you share logic between components.
Custom Hooks must be named starting with use followed by a capital letter.
Custom Hooks only share stateful logic, not state itself.
You can pass reactive values from one Hook to another, and they stay up-to-date.
All Hooks re-run every time your component re-renders.
The code of your custom Hooks should be pure, like your component’s code.
Wrap event handlers received by custom Hooks into Effect Events.
Don’t create custom Hooks like useMount. Keep their purpose specific.
It’s up to you how and where to choose the boundaries of your code.

  */
}

/** First Custom Hook */

{
  App.js;
  // Write your custom Hook in this file!
  import { useCounter } from "./useCounter.js";

  export default function Counter() {
    const count = useCounter(0);
    return <h1>Seconds passed: {count}</h1>;
  }
}

{
  useCounter.js;
  import { useState, useEffect } from "react";

  export function useCounter(second) {
    const [count, setCount] = useState(second);
    useEffect(() => {
      const id = setInterval(() => {
        setCount((second) => second + 1);
      }, 1000);
      return () => clearInterval(id);
    }, []);
    return count;
  }
}
