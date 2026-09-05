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
   */
}
