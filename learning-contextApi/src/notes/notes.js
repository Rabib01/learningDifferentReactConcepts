{
  /**
   * Challlenge of passing the data down multiple levels of components in react
   * Then Context Api can help
   * Without the need to pass propes to every single component in the hierarchy
   * Global state management in the application
   *
   * ContextApi is useful for passing the data that is global, frequently updated and deeply nested components
   * user credentials and login state, cart state in ecom, theme preferences and iser language preferences
   *
   * how to create ?
   * create a context
   * context - A shared piece of information that React can make available to many components without passing it manually through props.
   * provide the context to the part of the app that needs it
   * consume the context data without prop drilling
   *
   * step - 1 : create a theme Context using the createContext() method
   *  - takes a context argument to set the default value for the context if no provider is available
   * step - 2 : create a provider component using this context which will provide the context data to all the child components available
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
