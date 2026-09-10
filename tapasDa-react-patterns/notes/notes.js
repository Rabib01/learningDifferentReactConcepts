{
  /**
   * Another important patterns that holds the app together - provider pattern ]\
   * What is provider pattern
   * what is context
   * what problems does provider solve
   * context in react 19 way
   * useCases and ideas that you can bvuild
   * ptfalls and antipatterns
   * how it procides data to the entire application vs part of the application
   */
}

{
  /**
   * react - application is nopthing but a component hierearcrchy of the component tree
   * with provider pattern ypu can provide data to the entire component tree r part of the compojnent tree
   * top to bottom - all depends on your use cases
   * definition - providing data or functionalities to parts of the react componennt tree without having to pass them through props through multiple levels
   * app - header - navbar - profile - avatar - all of them are deeply nested - you want to show the name of the userr in the avatar compnent
   * start passing the user prop to app to header to navbar to profile to avatar - mkes yoour code harder to maintian and makes code with fragile
   * this is prop drilling - header navbar and profile does not need the information at all, to make it react you have to pass it all the way to the layer doewn
   * provider pattern is powered by something callled the context api - which allows us to use the provider pattern
   * contextAPI - allows us to pass data without prop drilling
   */
}

{
  /**
   * directly query can access the information prom the provider if set up provider properly
   * even if component is not part of the hierarchy, doing things with props would be an even harder task and challenging solution
   * same way we can do this with the context provider api we can still pass the information from one plkae to anothjer
   * we use somethig called ca useContext hook
   *
   */
}

{
  /** Notes that were memored
   *
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
   *
   */
}

{
  /**
   * Context - a piece of information that can be shared between multiple levels of componenets if they are deeply nested or with separate components in the hierarchy without hte need for prop drilling
   * theme information - brand information - user inforamtion - we use that providder
   * privder is the way we provide information
   * we need to also understand the provider boundary
   *
   */
}

{
  /**
   * create context - boundary
   * create provider and define what kind of data is spuulied to that provider
   * wrpa our component hierearchy with provider  data avaialbility is in that hierarchy
   * crefate a hook to make the context available
   * consume and use the data from the context whenever needed
   *
   */
}

{
  /**
   * create context folder
   * create context file - the one containng the context and the provider
   * supply that context to differ5net parts of the app
   *
   */
}

{
  /**
   * Everyone is doing a theming context - not gonna be doing it
   */
}

{
  /**
   * ThemeProvider = () => {
   *
   *  ...
   * return (
   *  <ThemeContext.Provider value = {{theme, toggleTheme}} > -------- > prover has to wrap a component hierarchy - choldren component or another component
   *  )
   * }
   */
}

{
  /** use cases
   * authentication - once authentication is done you ncan get the authentication tokesn and put them in context - login logout context - createe an authemtication management system
   * internationilzation - change the localizatyion of the entire application - change this to hindi english bangla etc
   * ecom cart - cart is a centralized place - always visible to the ecom customer
   * feature flag and ab testing
   */
}

{
  /**
   * pitfalls -
   * keep context scope as narrow as possible - unless it is things liek a theme
   * you might not want the context to overpower the entire app hierarchy
   * select hte separation of concerns the right way where only that component hierarchy is what you need ot wrap
   * data that you are putting - dont provide all of hjte data - ooly provide the4 poart of thge datga that is needed
   * seggregate and separate out your context
   * avoid frequenct updates in context - rerenders all of the users
   *
   */
}
