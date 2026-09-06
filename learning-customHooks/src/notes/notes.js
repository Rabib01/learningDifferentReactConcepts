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
