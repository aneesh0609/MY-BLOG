import React, { useState } from 'react';

export default function InfoThree() {
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
               Node.js
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
          <h1 className="text-6xl  font-semibold text-center text-gray-600 mb-12">NODE.JS</h1>

          {/* Cards in a Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">Introduction to Node.js</h3>
              <p className="text-gray-600 mt-2">Node.js is a powerful, open-source, cross-platform runtime environment used to..</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                 · Node.js is a powerful, open-source, cross-platform runtime environment used to execute JavaScript code outside of a web browser. It is built on the V8 JavaScript engine, the same engine that powers Google Chrome, which makes it very fast.<br>

                  ·      Key Features of Node.js:<br>
                      1  Asynchronous and Event-Driven: Node.js is designed to be non-blocking. This means that Node.js can handle multiple requests concurrently without waiting for a response from the previous request, which is great for building scalable applications.

                      2  Single-Threaded: Despite being asynchronous, Node.js uses a single thread to handle requests. This approach makes it highly efficient for I/O-heavy operations, such as reading files from a disk, database interactions, and network requests.

                      3  Built on V8 Engine: Node.js uses the V8 JavaScript engine (the same engine that runs JavaScript in Chrome), which is highly optimized for performance.

                      4  NPM (Node Package Manager): Node.js comes with a built-in package manager (NPM), which allows developers to easily install, share, and manage dependencies. NPM is the largest software registry in the world and contains millions of libraries and tools.

                      5  Cross-Platform: Node.js can run on various platforms like Windows, Linux, and macOS, making it a versatile choice for application development.

                      6  Real-Time Data: Node.js excels at building real-time applications such as chat applications, live updates, and collaborative tools, thanks to its event-driven and non-blocking nature.

                      7  Scalability: Node.js is highly scalable, which is why it is often used for building microservices and APIs...<br><br>

                      Common Use Cases for Node.js:<br>
                            Web Servers: Node.js can handle a large number of simultaneous connections in a non-blocking manner, making it ideal for web servers and APIs.

                            Real-Time Applications: It is commonly used in applications that require real-time interaction, such as chat applications or collaborative tools.

                            Microservices: Node.js's fast performance and event-driven nature make it suitable for building microservices-based architectures.

                            API Development: Node.js can be used to build RESTful APIs that are fast, lightweight, and scalable.

                            File System Operations: Node.js is excellent for applications that need to interact with the file system, such as file uploaders or content management systems.<br><br><br>
                `)}
              >
                See More
              </button>
            </div>

             {/* Card 2 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700"> Node.js Modules</h3>
              <p className="text-gray-600 mt-2">modules are individual units of functionality that allow you to break up your...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                 · In Node.js, modules are individual units of functionality that allow you to break up your application into manageable pieces. They are a fundamental concept in Node.js, enabling you to use pre-built features or organize your code into separate files.

                  Node.js provides a core set of built-in modules, and you can also create your own modules or install external ones using NPM (Node Package Manager)..<br>
                 · Types of Node.js Modules<br>
                        There are three types of modules in Node.js:

                       1 Core Modules: These are built-in modules provided by Node.js and are available without the need for installation. Examples include http, fs, path, os, etc.

                       2 Local Modules: These are modules that you create within your project. You can use the require() function to import and use them.

                       3 External Modules: These are modules created by the Node.js community and can be installed using npm (Node Package Manager). For example, modules like express, lodash, and mongoose..<br><br>
                  · 1. Core Modules : <br>
                          Node.js provides several built-in modules that allow you to perform common tasks without having to install anything extra. These modules are always available in Node.js without any external dependencies.

                        ·  Example of Using Core Modules :<br>
                         
                          // Using the 'http' module to create a simple HTTP server
                          const http = require('http');

                          // Create the server
                          const server = http.createServer((req, res) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'text/plain');
                            res.end('Hello, Node.js!\n');
                          });

                          // Make the server listen on port 3000
                          server.listen(3000, 'localhost', () => {
                            console.log('Server is running at http://localhost:3000/');
                          });<br>

                        · Some common core modules:

                         1 http: Used to create web servers and handle HTTP requests.
                         2 fs (File System): Used to interact with the file system (read, write, delete files).
                         3 path: Used for working with and manipulating file paths.
                         4 os: Provides information about the operating system (e.g., CPU, memory, platform).
                         5 events: Used to handle events and create event-driven applications.
                         6 url: Used to work with URL parsing and manipulation.<br><br>
                          
                 · 2. Local Modules : <br>
                          Local modules are JavaScript files you create yourself, which can export functions, objects, or variables for use in other parts of your application.

                      ·    Example of a Local Module:
                          math.js (local module):

                          // Define a simple function to add two numbers
                          function add(a, b) {
                            return a + b;
                          }

                          module.exports = add;  // Export the function<br><br>
                      ·    app.js (using the local module):

                          // Import the 'math.js' module
                          const add = require('./math.js');

                          // Use the 'add' function from 'math.js'
                          console.log(add(2, 3));  // Output: 5 <br>
                      ·    In this example :
                          math.js is the local module.
                          We use module.exports to export the add function from math.js.
                          In app.js, we use require('./math.js') to import the function.<br><br>

                    3. External Modules (npm Modules) <br>
                            Node.js has a massive ecosystem of open-source modules that you can install from npm (Node Package Manager). External modules are used to add new features and simplify development.

                      ·      Installing External Modules:
                            You can install modules using npm. For example, if you want to use the popular web framework Express:

                      ·      Install Express:
                            npm install express<br>
                      ·      Use Express in Your Application:<br>
                            // Import the Express module
                            const express = require('express');

                            // Create an Express application
                            const app = express();

                            // Define a simple route
                            app.get('/', (req, res) => {
                              res.send('Hello, Express!');
                            });

                            // Start the server
                            app.listen(3000, () => {
                              console.log('Server running on http://localhost:3000');
                            });<br><br>
                      ·      In this example:

                            We installed the express module using npm install express.
                            We then import it with require('express') and create a basic server that listens on port 3000.
                            Other Popular External Modules:
                            express: A minimal web framework for building web applications.
                            mongoose: A MongoDB object modeling tool.
                            lodash: A utility library that provides helpful functions for working with arrays, objects, and strings.
                            axios: A promise-based HTTP client for making HTTP requests.
                            dotenv: Loads environment variables from a .env file into process.env.<br><br>

                      ·Module System in Node.js :<br>
                            Node.js uses the CommonJS module system, which relies on require() to load modules and module.exports to export functionality.

                            require(): Used to load and import modules (either core, local, or external).
                            module.exports: Used to export functionality from a module, allowing it to be accessed from other files.<br><br>      
                `)}
              >
                See More
              </button>
            </div>

             {/* Card 3 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700"> NPM (Node Package Manager)</h3>
              <p className="text-gray-600 mt-2"> NPM (Node Package Manager) is an essential part of the Node.js ecosystem. It is the default...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                 · NPM (Node Package Manager) in Node.js :<br>
                    NPM (Node Package Manager) is an essential part of the Node.js ecosystem. It is the default package manager for Node.js, allowing you to manage and share code libraries and dependencies easily. NPM is used to install external libraries and tools that are required to build applications, as well as manage dependencies within your project..<br> 
                 · Key Features of NPM:<br>
                     1· Package Management: NPM allows you to install, update, and manage dependencies (third-party libraries and tools) required by your application.
                     2· Version Control: You can specify which versions of libraries your project needs to ensure compatibility.
                     3· Dependency Management: NPM allows you to list dependencies in a package.json file, so others can easily install the required packages.
                     4· Publish Your Own Packages: NPM provides a platform to share your own JavaScript libraries with others.<br><br>


                ·  Installing NPM: <br>
                          When you install Node.js, NPM is automatically installed along with it. To check if you have NPM installed, you can run the following commands in the terminal:

                        ·  To check the version of Node.js:<br>
                          node -v
                        ·  To check the version of NPM: <br>
                          npm -v ..<br><br>
                ·  The package.json File<br>
                              The package.json file is the heart of your Node.js project. It contains metadata about the project, including project name, version, dependencies, scripts, and more.

                            ·  Example of package.json:<br>
                              {
                                "name": "my-node-app",
                                "version": "1.0.0",
                                "description": "A simple Node.js application",
                                "main": "index.js",
                                "scripts": {
                                  "start": "node index.js",
                                  "test": "echo \"Error: no test specified\" && exit 1"
                                },
                                "author": "Your Name",
                                "license": "ISC",
                                "dependencies": {
                                  "express": "^4.17.1"
                                },
                                "devDependencies": {
                                  "nodemon": "^2.0.4"
                                }
                              }<br>
                            ·  dependencies: Lists the packages your project needs to run (e.g., express, axios).
                            ·  devDependencies: Lists the packages needed for development only (e.g., nodemon for auto-restarting the server).
                            ·  scripts: Defines shortcuts for running commands, such as "start" for starting the application.
                            ·  You typically create the package.json file by running npm init in your project directory, which will guide you through creating the file.<br><br><br>
                `)}
              >
                See More 
              </button>
            </div>

             {/* Card 4 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">Events</h3>
              <p className="text-gray-600 mt-2">
              events play a central role in building...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                  
                 · Node.js Events<br>
                      In Node.js, events play a central role in building non-blocking, asynchronous, and event-driven applications. The EventEmitter class in Node.js is at the core of the event-driven programming model. It allows objects to emit events and other objects to listen and respond to those events.

                      The EventEmitter class is provided by the events module in Node.js, and it allows the creation of custom events that can be emitted and handled by different parts of your application.<br>
                  
                 · The EventEmitter Class<br>
                          The EventEmitter class allows you to create custom events and attach listeners to these events. It provides methods for:

                        ·  Emitting events
                        ·  Adding event listeners
                        ·  Removing event listeners
                        ·  Handling errors
                         · The EventEmitter is used to build event-driven systems, such as web servers or applications that need to react to specific events.<br><br>

                 · Event Listeners<br>
                      ·  on(event, listener): Adds a listener to an event. The listener is called whenever the event is emitted.
                       · once(event, listener): Adds a one-time listener that is executed only once for the event and then removed.
                      ·  removeListener(event, listener): Removes a specific listener for a given event.
                      ·  removeAllListeners([event]): Removes all listeners for a particular event, or all events if no specific event is passed.<br><br>
                 
                 · Best Practices for Using Events in Node.js:<br>
                        ·  Always handle errors: If you're emitting errors, always listen for the error event to avoid crashing the application.
                        ·  Avoid memory leaks: If you're adding listeners to events, be sure to remove them when they're no longer needed to avoid memory leaks.
                        ·  Use events for decoupling: Use the event-driven architecture to decouple parts of your application, where one part emits events and another part listens and responds to those events<br><br><br>
                `)}
              >
                See More
              </button>
            </div>

             {/* Card 5 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">File System Module</h3>
              <p className="text-gray-600 mt-2">The File System (FS) module in Node.js provides a set of APIs to interact with the...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                  1. Introduction to the FS Module <br>
                        ·    The File System (FS) module in Node.js provides a set of APIs to interact with the file system. This includes reading, writing, updating, and deleting files, as well as creating and managing directories.
                        ·    The FS module is part of Node.js's core API, which means you don't need to install it separately. It is included by default when you install Node.js, and it plays a crucial role in server-side applications where file manipulation is needed.<br><br>
                  2. Synchronous vs. Asynchronous Operations <br>
                          ·  Synchronous operations in the FS module block further execution of code until the current operation is finished. This means the program will wait for the file system operation to complete before moving to the next task.
                          ·  Asynchronous operations, on the other hand, allow the event loop to continue executing other tasks while the file system operation is still running. This makes them more efficient, especially when dealing with multiple I/O-bound tasks.
                          ·  While synchronous methods are simpler to use, asynchronous methods are preferred in most real-world applications to ensure that they don't block the server, particularly when handling a large number of requests. <br> <br>
                  3. Reading Files <br>
                          ·  The FS module allows reading files in both synchronous and asynchronous manners. Reading a file means fetching its contents into your application.
                          ·  Asynchronous file reading ensures that your application remains responsive, as the reading operation doesn't block the rest of your code from executing. Once the file is successfully read, the contents are passed to a callback function.
                           · Synchronous file reading blocks the execution of code until the file is read, which can be useful for scripts that run in sequence, but is less efficient in a server environment where multiple requests need to be handled simultaneously. <br> <br>
                  4. Writing Files <br>
                          ·  The FS module allows you to write data to files in various ways. You can either overwrite an existing file or append data to the end of the file.
                          ·  Writing files can be done asynchronously, allowing the server to remain responsive while the operation takes place in the background, or synchronously, which would block the event loop until the write is complete.
                           · It’s common to use the FS module for storing logs, configuration files, or temporary data generated by the application. When overwriting a file, it’s important to consider whether the file’s existing content should be replaced or if it should be preserved. <br> <br>
                   5. Appending Data to Files <br>
                          ·  In addition to writing or replacing the content of a file, the FS module provides functionality to append data to a file. This operation is essential when working with log files or continuously growing data, as you don't want to overwrite existing information.
                          ·  Similar to reading and writing, appending can be performed asynchronously, which helps avoid blocking other operations while appending data. <br> <br>
                 6. Deleting Files <br>
                          ·  The FS module offers a way to delete files from the file system, either asynchronously or synchronously. This operation is essential when cleaning up temporary files, logs, or other data that is no longer needed.
                          ·  When deleting files, it’s important to handle potential errors, such as attempting to delete a non-existent file or lacking the necessary permissions. <br> <br>
                 7. Checking if a File or Directory Exists <br>
                          ·  The FS module can be used to check if a file or directory exists before performing operations on it. This is useful to avoid errors that could occur when trying to read, write, or delete a file that doesn’t exist.
                          ·  Instead of directly reading or writing a file, it’s often a good practice to check its existence first. This ensures that your program doesn’t throw an error and provides an opportunity to handle such situations more gracefully. <br> <br>
                 8. Managing Directories <br>
                          ·  The FS module can also handle directories, enabling you to create, read, and delete directories as part of your file management system.
                           · Directory creation can be done recursively, meaning if a parent directory doesn’t exist, it will be created automatically along with the subdirectories. This is useful for creating nested folder structures dynamically.
                          ·  You can also list the contents of a directory, which allows you to see which files and folders are contained within it. This is helpful for organizing or searching through large sets of files. <br> <br>
                 9. Error Handling <br>
                          ·  Error handling is an essential part of working with the FS module, as many operations depend on external factors like file existence, file permissions, and system resources.
                          ·  When performing file operations, always check for errors. For example, reading from a file that doesn't exist or writing to a file without appropriate permissions can lead to runtime errors.
                           · Asynchronous methods typically handle errors through callbacks, while synchronous methods throw errors that can be caught using try-catch blocks. Ensuring that errors are handled properly can prevent crashes and ensure smooth operation. <br> <br>
                  10. File System Constants <br>
                          ·  The FS module comes with several constants that provide information about file status and permissions. These constants can be used to check whether a file is readable, writable, or executable.
                          ·  For example, fs.constants.F_OK checks if a file exists, fs.constants.R_OK checks if the file is readable, and fs.constants.W_OK checks if the file is writable. These constants are especially useful when using methods like fs.access() to check file properties. <br> <br>
                  11. File Permissions <br>
                          ·  File permissions are an important aspect of the FS module, as they define who can read, write, or execute a file. These permissions can be set when creating a file or changing the properties of an existing file.
                          ·  The FS module allows you to manage file permissions using methods like fs.chmod() and fs.chown(), which modify the access rights and ownership of a file or directory. Proper file permissions ensure that files are securely managed, and only authorized users can access or modify them. <br> <br>
                    12. Practical Use Cases of the FS Module <br>
                          ·  The FS module is widely used for various purposes in real-world applications. For instance, it can be used to serve static files in a web server, generate configuration files, write logs, or handle user-uploaded content.
                           · It is also used in tasks like batch file processing, such as reading multiple files from a directory and performing some operation on each one, or automating the creation and maintenance of directories and files for different parts of the system. <br> <br>
                     13. Performance Considerations <br>
                          ·  While the FS module is powerful, it’s important to consider performance when working with large files or high-frequency operations. Asynchronous operations are generally more performant and help avoid blocking the application’s event loop, which could slow down or crash the server.
                          ·  For large files, consider using streams (which are also available in the FS module) to read or write data in chunks, rather than loading the entire file into memory at once.<br><br><br>
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
