
import React, { useState } from 'react';
export default function InfoTwo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
  
    const toggleModal = (content) => {
      setModalContent(content);
      setIsModalOpen(!isModalOpen);
    };
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50" style={{ color: 'black' }}>
          <article className="modal-container bg-white rounded-lg overflow-hidden shadow-lg max-h-[400px] max-w-[500px] w-full">
            <header className="modal-container-header p-4 flex items-center justify-between border-b border-yellow-300">
              <span className="modal-container-title flex items-center gap-2 text-2xl font-bold">
               React
              </span>
              <button
                className="icon-button p-0 border-0 bg-transparent w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-150 hover:bg-gray-200"
                onClick={() => setIsModalOpen(false)}
              >
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </header>
            <section className="modal-container-body p-6 overflow-y-auto max-h-[400px]" style={{ whiteSpace: 'pre-line' }}>
              {/* Render Modal Content with Line Breaks */}
              <p dangerouslySetInnerHTML={{ __html: modalContent }} />
            </section>
            <footer className="modal-container-footer p-4 flex items-center justify-end border-t border-gray-200"></footer>
          </article>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow">
        <div className="py-8 px-4 sm:px-8 lg:px-16 dark:bg-gray-900">
          <h1 className="text-6xl  font-semibold text-center text-gray-600 mb-12">REACT</h1>

          {/* Cards in a Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">Intro</h3>
              <p className="text-gray-600 mt-2">React is an open-source JavaScript library used for building...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                 · What is React?
                     React is an open-source JavaScript library used for building user interfaces (UI), primarily for single-page applications (SPAs). It was developed by Facebook and is maintained by Facebook and a community of developers. React allows developers to build fast, interactive UIs using reusable components.

                 ·     React is a tool for building UI components.

                  ·    How does React Work?<br>
                      React creates a VIRTUAL DOM in memory.

                      Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

                      React only changes what needs to be changed!

                      React finds out what changes have been made, and changes only what needs to be changed.

                      You will learn the various aspects of how React does this in the rest of this tutorial.<br>

                ·      React.JS History<br>
                      Current version of React.JS is V18.0.0 (April 2022).

                      Initial Release to the Public (V0.3.0) was in July 2013.

                      React.JS was first used in 2011 for Facebook's Newsfeed feature.

                      Facebook Software Engineer, Jordan Walke, created it.

                      Current version of create-react-app is v5.0.1 (April 2022).

                      create-react-app includes built tools such as webpack, Babel, and ESLint.<br><br> 
                `)}
              >
                See More
              </button>
            </div>

             {/* Card 2 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">React Environment</h3>
              <p className="text-gray-600 mt-2">If you have npx and Node.js installed, you can create a React application by using...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                 · Setting up a React Environment <br>
                          If you have npx and Node.js installed, you can create a React application by using create-react-app.

                  ·        If you've previously installed create-react-app globally, it is recommended that you uninstall the package to ensure npx always uses the latest version of create-react-app.

                  ·        To uninstall, run this command: npm uninstall -g create-react-app.

                  ·        Run this command to create a React application named my-react-app:

                  ·        npx create-react-app my-react-app
                  ·        The create-react-app will set up everything you need to run a React application.

                  ·        Run the React Application
                   ·       Now you are ready to run your first real React application!

                  ·        Run this command to move to the my-react-app directory:

                  ·        cd my-react-app
                  ·        Run this command to run the React application my-react-app:

                   ·       npm start
                          A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:3000 in the address bar..<br><br>
                `)}
              >
                See More
              </button>
            </div>

             {/* Card 3 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">React ES6</h3>
              <p className="text-gray-600 mt-2"> React is built using ES6 (ECMAScript 6), which is the sixth version of...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(` 
                  · React is built using ES6 (ECMAScript 6), which is the sixth version of JavaScript. ES6 introduces    several modern features that make coding in React cleaner, more concise, and more maintainable...<br> 
                 · React uses ES6, and you should be familiar with some of the new features like:

                        Classes
                        Arrow Functions
                        Variables (let, const, var)
                        Array Methods like .map()
                        Destructuring
                        Modules
                        Ternary Operator
                        Spread Operator<br><br><br>
                `)}
              >
                See More 
              </button>
            </div>

             {/* Card 4 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">React JSX</h3>
              <p className="text-gray-600 mt-2">
              JSX (JavaScript XML) is a syntax extension for JavaScript commonly used...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                  
                 
                ·  JSX (JavaScript XML) is a syntax extension for JavaScript commonly used with React. It allows you to write HTML-like code within JavaScript, which is then transformed into React elements. JSX makes it easier to describe the structure of the UI and manage the components more intuitively. Here's a breakdown of how JSX works and its key features:<br>
              ·  Key Features of JSX:<br>
              ·  HTML-like Syntax in JavaScript:

                JSX allows you to write HTML tags directly inside your JavaScript code.
                You can create React components using JSX to define how the UI should look.<br>
              ·  React Elements:

                  JSX is compiled into React elements (JavaScript objects). React uses these elements to render the UI efficiently.
                  Every JSX expression must return a single parent element<br>
              ·    Attributes:

                  JSX uses camelCase for attributes instead of HTML-style lowercase. For example, class in HTML is written as className in JSX.
                  The for attribute in HTML becomes htmlFor in JSX, because for is a reserved keyword in JavaScript.
                  Boolean attributes like checked, disabled, and readonly in HTML are written in JSX without quotes.<br>


                `)}
              >
                See More
              </button>
            </div>

             {/* Card 5 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">React Components</h3>
              <p className="text-gray-600 mt-2">Components are independent and reusable bits of code. They serve the same purpose as...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                React Components<br> 
                Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

                Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components..<br>
                Create Your First Component<br>
                    When creating a React component, the component's name MUST start with an upper case letter.

                    Class Component
                    A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

                    The component also requires a render() method, this method returns HTML.<br>
                  Function Component :<br>
                      Here is the same example as above, but created using a Function component instead.

                      A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.<br>
                Rendering a Component :<br>
                    Now your React application has a component called Car, which returns an <h2> element.

                    To use this component in your application, use similar syntax as normal HTML: <Car /><br>
                  Props :<br>
                        Components can be passed as props, which stands for properties.

                        Props are like function arguments, and you send them into the component as attributes.

                        You will learn more about props in the next chapter.<br><br><br>
                `)}
              >
                See More
              </button>
            </div>

             {/* Card 6 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">Props</h3>
              <p className="text-gray-600 mt-2">Props (short for "properties") in React are used to pass data from a..</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
              ·   Props (short for "properties") in React are used to pass data from a parent component to a child component. They are a way to make components reusable and configurable, as they allow the parent component to pass different values to the child components.<br> 
                  Key Points about Props:<br>
                          Props are Read-Only: Props are immutable, meaning the child component cannot modify them. They are only passed from parent to child, and the child can only read and use them.
                          Used for Communication: Props enable communication between components, typically from a parent component to a child component.
                          Props Can Be of Any Data Type: Props can hold strings, numbers, arrays, objects, functions, etc..<br>

                ·    Accessing Props in the Child Component:
                                      Props are accessed in the child component via the props object. This object contains all the props passed from the parent.<br>

                                      Class Component:
                                    
                                      class ChildComponent extends React.Component {
                                        render() {
                                          return <h1>Welcome, {this.props.name}!</h1>;
                                        }
                                      }<br>
                                      Functional Component:
                                      
                                      function ChildComponent(props) {
                                        return <h1>Welcome, {props.name}!</h1>;
                                      }<br>
                    
              ·   Destructuring Props: <br>
                                You can use destructuring to directly extract values from props for easier access.

                                Example:

                                function ChildComponent({ name, age }) {
                                  return (
                                    <div>
                                      <h1>Hello, {name}!</h1>
                                      <p>Your age is {age}</p>
                                    </div>
                                  );
                                }<br><br>
                        ·        Default Props:
                                React allows you to define default values for props using defaultProps. This is useful when a prop might be omitted, and you want to ensure it has a default value.

                                Example:

                                function ChildComponent({ name, age }) {
                                  return (
                                    <div>
                                      <h1>Hello, {name}!</h1>
                                      <p>Your age is {age}</p>
                                    </div>
                                  );
                                }

                                // Setting default props
                                ChildComponent.defaultProps = {
                                  name: 'Guest',
                                  age: 25
                                };<br><br>
                      ·          Props Types and Prop Validation (Using PropTypes):
                                You can validate the type of props that are passed to a component using PropTypes. This is helpful for development to ensure that the props received match the expected type.

                                Example:

                                import PropTypes from 'prop-types';

                                function ChildComponent({ name, age }) {
                                  return (
                                    <div>
                                      <h1>Hello, {name}!</h1>
                                      <p>Your age is {age}</p>
                                    </div>
                                  );
                                }

                      ·          // Prop types validation
                                ChildComponent.propTypes = {
                                  name: PropTypes.string.isRequired,
                                  age: PropTypes.number.isRequired
                                };
                                Example of Passing Functions as Props:
                                You can pass functions as props, which allows the child component to trigger actions in the parent component.


                                function ParentComponent() {
                                  const handleClick = () => {
                                    alert("Button clicked in Parent!");
                                  };

                                  return <ChildComponent onClick={handleClick} />;
                                }

                                function ChildComponent({ onClick }) {
                                  return <button onClick={onClick}>Click Me</button>;
                                }<br><br><br>
                `)}
              >
                See More 
              </button>
            </div>

             {/* Card 7 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">React Events</h3>
              <p className="text-gray-600 mt-2">events are used to handle user interactions with components like...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                 
                ·  In React, events are used to handle user interactions with components (like clicks, keystrokes, form submissions, etc.). React provides a unified approach to handling events, allowing developers to interact with DOM elements in a declarative way. Here's an overview of how events work in React:<br> 
                  Key Concepts of React Events: <br>
                ·        Synthetic Events:

                        React uses a SyntheticEvent system, which is a cross-browser wrapper around the browser’s native events. It ensures that events are consistent across different browsers.
                        Synthetic events work in a similar way to the native DOM events, but with some additional features and improvements.<br>
                ·        Event Handling in React:

                        In React, event handlers are written using camelCase instead of lowercase (like in HTML). For example, onclick becomes onClick, and onmouseover becomes onMouseOver.<br>
                ·        Passing Functions to Event Handlers:

                        You define event handlers as functions and pass them to React elements as props.
                        Event handlers in React are camelCase-capitalized attributes. React automatically passes the event object to the event handler function.
                ·        Example of Event Handling:

                        import React, { useState } from 'react';

                        function ClickButton() {
                          const [message, setMessage] = useState("Click the button!");

                          const handleClick = () => {
                            setMessage("Button was clicked!");
                          };

                          return (
                            <div>
                              <h1>{message}</h1>
                              <button onClick={handleClick}>Click Me</button>
                            </div>
                          );
                        }
                        export default ClickButton;<br>
                ·        In the example:
                        The handleClick function is the event handler for the onClick event.
                        When the button is clicked, the handleClick function is triggered, and it updates the message displayed.<br><br>         
                `)}
              >
                See More 
              </button>
            </div>

             {/* Card 8 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">React Hooks</h3>
              <p className="text-gray-600 mt-2"> React Hooks are functions that let you use state and other React features in..</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                 React Hooks are functions that let you use state and other React features in functional components. Before the introduction of hooks in React 16.8, only class components could manage state and lifecycle methods. With hooks, you can use state, side effects, context, and other features without needing to write class components.

                  Here’s an overview of the most commonly used React hooks:<br><br>

                  1. useState
                        useState allows you to add state to functional components.

                        Syntax:
                        const [state, setState] = useState(initialState);<br>
                        Example:
    
                        import React, { useState } from 'react';

                        function Counter() {
                          const [count, setCount] = useState(0);

                          const increment = () => setCount(count + 1);
                          const decrement = () => setCount(count - 1);

                          return (
                            <div>
                              <h1>{count}</h1>
                              <button onClick={increment}>Increase</button>
                              <button onClick={decrement}>Decrease</button>
                            </div>
                          );
                        }

                        export default Counter;<br><br>
                  2. useEffect
                          useEffect is used to perform side effects in functional components. Side effects are operations like fetching data, updating the DOM, or subscribing to events.<br>

                          Syntax:
                          useEffect(() => {
                            // Your side-effect logic here
                            
                            return () => {
                              // Cleanup logic (optional)
                            };
                          }, [dependencies]); <br>
                          Example:
                      
                          import React, { useState, useEffect } from 'react';

                          function DataFetcher() {
                            const [data, setData] = useState(null);

                            useEffect(() => {
                              fetch('https://jsonplaceholder.typicode.com/posts')
                                .then((response) => response.json())
                                .then((data) => setData(data));
                            }, []);  // Empty dependency array means this effect runs once after the initial render

                            return (
                              <div>
                                <h1>Fetched Data</h1>
                                {data ? (
                                  <ul>
                                    {data.map(item => (
                                      <li key={item.id}>{item.title}</li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p>Loading...</p>
                                )}
                              </div>
                            );
                          }

                          export default DataFetcher;<br><br>

                   3. useContext <br>
                        useContext allows you to access context values directly without using Context.Consumer. It's useful for managing global state across your app.

                        Syntax:
                        const value = useContext(MyContext);<br>
                        Example:
                        
                        import React, { createContext, useContext, useState } from 'react';

                        const MyContext = createContext();

                        function Parent() {
                          const [value, setValue] = useState('Hello from context!');

                          return (
                            <MyContext.Provider value={value}>
                              <Child />
                            </MyContext.Provider>
                          );
                        }

                        function Child() {
                          const contextValue = useContext(MyContext);
                          return <h1>{contextValue}</h1>;
                        }

                        export default Parent;<br><br>
                        4. useRef :<br>
                        useRef returns a mutable reference to an element or a value that persists across renders. It's commonly used for accessing DOM elements directly or storing mutable data without causing a re-render.

                        Syntax:
                       
                        const ref = useRef(initialValue);<br>
                        Example:
                       
                        import React, { useRef } from 'react';

                        function FocusInput() {
                          const inputRef = useRef(null);

                          const focusInput = () => {
                            inputRef.current.focus();  // Focuses the input element
                          };

                          return (
                            <div>
                              <input ref={inputRef} type="text" />
                              <button onClick={focusInput}>Focus the input</button>
                            </div>
                          );
                        }

                        export default FocusInput;<br><br>
                        5. useReducer : <br>
                        useReducer is an alternative to useState for managing complex state logic in functional components, especially when dealing with actions that update multiple pieces of state.

                        Syntax:
                       
                        const [state, dispatch] = useReducer(reducer, initialState);<br>
                        Example:
                     
                        import React, { useReducer } from 'react';

                        const initialState = { count: 0 };

                        function reducer(state, action) {
                          switch (action.type) {
                            case 'increment':
                              return { count: state.count + 1 };
                            case 'decrement':
                              return { count: state.count - 1 };
                            default:
                              return state;
                          }
                        }

                        function Counter() {
                          const [state, dispatch] = useReducer(reducer, initialState);

                          return (
                            <div>
                              <h1>{state.count}</h1>
                              <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
                              <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
                            </div>
                          );
                        }

                        export default Counter;<br><br>
                        6. useMemo : <br>
                        useMemo memoizes a computed value and only recalculates it when one of the dependencies has changed. It's useful for optimizing performance in cases where expensive calculations need to be avoided on every render.

                        Syntax:
                        
                        const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]); <br>
                        Example:
                     
                        import React, { useState, useMemo } from 'react';

                        function ExpensiveComputation() {
                          const [count, setCount] = useState(0);
                          
                          const expensiveValue = useMemo(() => {
                            console.log('Computing expensive value...');
                            return count * 1000;
                          }, [count]);

                          return (
                            <div>
                              <h1>Expensive Computed Value: {expensiveValue}</h1>
                              <button onClick={() => setCount(count + 1)}>Increment Count</button>
                            </div>
                          );
                        }

                        export default ExpensiveComputation;<br><br>
                        7. useCallback :<br>
                        useCallback is used to memoize a callback function, ensuring that the function reference remains the same unless one of its dependencies has changed. This is useful for passing callbacks to child components, preventing unnecessary re-renders.

                        Syntax:
                        
                        const memoizedCallback = useCallback(() => {
                          // callback logic
                        }, [dependencies]); <br>
                        Example:
                      
                        import React, { useState, useCallback } from 'react';

                        function Parent() {
                          const [count, setCount] = useState(0);

                          const increment = useCallback(() => {
                            setCount(count + 1);
                          }, [count]);

                          return <Child onClick={increment} />;
                        }

                        function Child({ onClick }) {
                          return <button onClick={onClick}>Increment</button>;
                        }

                        export default Parent; <br><br>
                        8. useLayoutEffect : <br>
                        useLayoutEffect is similar to useEffect, but it fires synchronously after all DOM mutations. This is useful when you need to measure or modify the layout of the page before the browser repaints the screen.

                        Syntax:
                        
                        useLayoutEffect(() => {
                          // Layout effects logic
                        }, [dependencies]);<br><br><br>
                `)}
              >
               See More 
              </button>
            </div>

            
            {/* Other cards... */}
          </div>
        </div>
      </div>
    </div>
  );
}
