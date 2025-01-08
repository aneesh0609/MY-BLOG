import React, { useState } from 'react';

export default function InfoFour() {
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
              MongoDB
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
          <h1 className="text-6xl  font-semibold text-center text-gray-600 mb-12">MongoDB</h1>

          {/* Cards in a Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">MongoDB Intro</h3>
              <p className="text-gray-600 mt-2">MongoDB is a popular, open-source NoSQL database designed to handle..</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                 · MongoDB is a popular, open-source NoSQL database designed to handle large volumes of data with flexibility, scalability, and ease of use. Unlike traditional relational databases, which use structured tables with rows and columns, MongoDB uses a more flexible, document-based model to store data. Here are some key features of MongoDB:<br><br>

                      1. Document-Oriented Database<br>
                      In MongoDB, data is stored in documents rather than tables. A document is a set of key-value pairs, similar to JSON (JavaScript Object Notation) or BSON (Binary JSON). This allows for a more flexible structure because the fields and values in each document can vary, and different documents within the same collection (group of documents) don't have to follow the same schema.<br><br>
                      2. Collections<br>
                      Documents are organized into collections in MongoDB. A collection is essentially a group of documents that can share common properties, though they are not strictly required to do so. Collections are analogous to tables in relational databases but without the strict schema.<br><br>
                      3. Scalability<br>
                      MongoDB is designed to scale horizontally, meaning it can distribute data across many machines (also known as sharding). This makes it well-suited for applications that require high availability and the ability to handle large amounts of data.<br><br>
                      4. Flexible Schema<br>
                      Unlike relational databases where data must adhere to a predefined schema (i.e., tables and their relationships), MongoDB allows you to store data with varying structures. This provides flexibility in how you store and retrieve data and is particularly useful for handling unstructured or semi-structured data.<br><br>
                      5. Indexes<br>
                      MongoDB supports indexing to improve query performance. Indexes can be created on any field in a document, which speeds up data retrieval. It also supports compound indexes, geospatial indexes, and full-text search.<br><br>
                      6. Aggregation Framework<br>
                      MongoDB provides an aggregation framework for performing operations like filtering, grouping, sorting, and transforming data. This is often used for advanced queries and analytics.<br><br>
                      7. Replication and High Availability<br>
                      MongoDB offers replication through a mechanism called replica sets, where data is copied across multiple servers. This ensures data availability and fault tolerance, as one of the replica servers can take over in case the primary server fails.<br><br>
                      8. Security<br>
                      MongoDB provides various security features, including role-based access control (RBAC), authentication, and encryption of data at rest and in transit. These features help ensure that your database is secure and that only authorized users can access or modify data.<br><br>
                      9. Real-time Data Access<br>
                      MongoDB supports real-time data access, which is especially useful for applications that require immediate updates and low-latency responses, such as e-commerce sites, social networks, and gaming platforms.<br><br>
                      10. Cross-Platform Compatibility<br>
                      MongoDB is cross-platform and can run on various operating systems, including Windows, Linux, and macOS. This makes it accessible to a wide range of developers across different environments.<br><br> 
                `)}
              >
                See More
              </button>
            </div>

             {/* Card 2 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">Create Database</h3>
              <p className="text-gray-600 mt-2">creating a database is a straightforward process. Unlike traditional relational...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                 · In MongoDB, creating a database is a straightforward process. Unlike traditional relational databases, MongoDB doesn’t require you to explicitly create a database before using it. Instead, a database is created automatically when you first store data in it.

                   Here’s how it works: <br>

               1. Connect to MongoDB<br>
                                  First, you need to connect to your MongoDB instance using the MongoDB shell or any MongoDB client, like MongoDB Compass, or through a programming language driver.
                                  If you are using the MongoDB shell, you can start it by running the mongo command in your terminal. If you are using a local instance, simply type mongo to connect to the local server.<br><br>

               2. Use the use Command<br>
                                  In MongoDB, you can switch to a database using the use command. If the database doesn’t exist, MongoDB will create it when you insert data.
                                  For example, to create a database named myNewDatabase, you would enter the following in the MongoDB shell:<br><br>

                                  use myNewDatabase
                                  MongoDB will switch to this database, but it won’t be created until data is inserted into it.<br><br>

            3. Insert Data to Create the Database<br>
                                  MongoDB databases are created when you first store data in them. So, once you have switched to the desired database, you need to insert a document into a collection within that database.<br><br>
                                  Example: Inserting a simple document into a new collection named users in the myNewDatabase:<br>

                                  
                                  db.users.insertOne({ name: "John Doe", age: 30 })<br>
                                  This command will create the myNewDatabase if it doesn’t exist yet, and also create a collection named users with one document.<br><br>

            4. Verify the Database<br>
                                  To verify that the database has been created, you can use the following command to list all databases:<br>
                              
                                  show databases<br>

                                  If the database creation was successful, you should see myNewDatabase listed in the output.<br><br>

            5. Optional: Setting up Database Parameters<br>
                                  MongoDB allows you to set specific configurations for your database, such as setting a size limit for collections or creating indexes. These settings can be done after the database has been created and data has been inserted.<br><br>
                `)}
              >
                See More
              </button>
            </div>

             {/* Card 3 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700"> Schema Validation</h3>
              <p className="text-gray-600 mt-2"> MongoDB provides a schema validation feature that allows you to enforce...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                 · MongoDB provides a schema validation feature that allows you to enforce rules for the data structure within a collection. While MongoDB is a NoSQL, schema-less database, schema validation enables you to specify data types, constraints, and other properties to ensure that documents follow a particular structure. This helps ensure that the data stored in MongoDB adheres to certain standards, even if the database itself doesn’t enforce a strict schema like a relational database.<br><br>

                ·        Key Concepts of Schema Validation in MongoDB:<br>
                      ·  Validation Rules: Schema validation rules are defined using a special validation schema for the collection. These rules can include conditions for the structure of documents, such as field types, required fields, or specific value ranges.<br>

                      ·  Validation Expressions: MongoDB uses validation expressions to define constraints. These are based on the MongoDB query language, and you can use operators such as $gte, $lt, $in, and $type to validate document fields.<br>

                      ·  Validation Action: When a document is inserted or updated, the validation action decides what happens if the document doesn’t meet the schema rules:<br>

                      ·  "error": The operation will be rejected.
                      ·  "warn": A warning will be logged, but the operation will still succeed.
                      ·  "off": No validation is applied to the operation.<br><br>
                  ·      Types of Validation:<br>
                        Field Type Validation: You can enforce that a field must be of a specific type, such as a string, number, or date.<br>

                        Example: Ensuring the age field is always a number.<br>

                        json
                        Copy code
                        { "$jsonSchema": {
                          "bsonType": "object",
                          "properties": {
                              "age": {
                                "bsonType": "int",
                                "description": "must be an integer"
                              }
                          }
                        }}<br><br>
                    ·    Required Fields: You can specify which fields are required when inserting or updating a document.

                        Example: Ensuring the name and email fields are required in a user document.<br>

                        json
                        Copy code
                        { "$jsonSchema": {
                          "bsonType": "object",
                          "required": ["name", "email"],
                          "properties": {
                              "name": {
                                "bsonType": "string",
                                "description": "must be a string and is required"
                              },
                              "email": {
                                "bsonType": "string",
                                "description": "must be a string and is required"
                              }
                          }
                        }}<br><br>
                    ·    Field Value Constraints: You can restrict the possible values for fields, such as a range of values or a set of allowed values<br>

                        Example: Ensuring that age is between 18 and 100.<br>

                        json
                        Copy code
                        { "$jsonSchema": {
                          "bsonType": "object",
                          "properties": {
                              "age": {
                                "bsonType": "int",
                                "minimum": 18,
                                "maximum": 100,
                                "description": "age must be an integer between 18 and 100"
                              }
                          }
                        }}<br><br>
                    ·    Pattern Matching: MongoDB allows you to validate fields using regular expressions, which can be useful for validating formats like email addresses or phone numbers.<br>

                        Example: Ensuring that the email field is a valid email format.<br>

                        json
                        Copy code
                        { "$jsonSchema": {
                          "bsonType": "object",
                          "properties": {
                              "email": {
                                "bsonType": "string",
                                "pattern": "^.+@.+\..+$",
                                "description": "must be a valid email address"
                              }
                          }
                        }}<br><br>
                 
                `)}
              >
                See More 
              </button>
            </div>

             {/* Card 4 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">MongoDB Data API</h3>
              <p className="text-gray-600 mt-2">
              The MongoDB Data API provides a way to interact with MongoDB databases over...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                  
                 · The MongoDB Data API provides a way to interact with MongoDB databases over HTTPS, allowing developers to perform CRUD (Create, Read, Update, Delete) operations without the need to set up a MongoDB client or server connection directly. This API is particularly useful for serverless architectures, web applications, and microservices, as it abstracts the complexity of managing database connections.<br><br>

                ·  Key Features of MongoDB Data API:<br>
                  HTTP-Based Interaction: It allows you to interact with MongoDB using simple HTTP requests. This is especially useful for environments where you want to avoid managing MongoDB drivers, especially in serverless applications or environments like AWS Lambda, where HTTP requests are more common.<br>

                  No Need for Drivers: With the Data API, you don't need to install and manage MongoDB drivers or set up MongoDB connection logic in your application. You can interact with the database using basic HTTP requests.<br>

                  Secure Authentication: The Data API uses an API key for authentication, providing a secure and simple method for interacting with the database over the web.<br>

                  Serverless & Scalable: It fits well within modern serverless architectures where resources automatically scale based on demand. It reduces operational complexity, as there’s no need to maintain a persistent database connection.<br>

                  Support for CRUD Operations: The Data API supports common database operations, including creating documents, reading documents, updating them, and deleting them. Additionally, it supports querying and aggregation operations.<br>

                  RESTful Interface: The API uses standard HTTP methods (GET, POST, PUT, DELETE) to interact with the database. This makes it easy to integrate with other services and applications that support HTTP communication.<br><br>

                  Integration with MongoDB Atlas: The Data API is built to work seamlessly with MongoDB Atlas, MongoDB’s fully managed cloud service. You can enable the Data API on your MongoDB Atlas cluster and access your data through simple HTTP requests.<br><br>
                
                 
                      ·   The core operations of the MongoDB Data API are designed to allow users to interact with their MongoDB databases using simple HTTP requests. These operations provide the ability to perform essential database tasks such as creating, reading, updating, and deleting data. Here’s an overview of the core operations:<br><br>

                        1. Create (Insert) Data<br>
                        This operation allows you to insert new documents into a MongoDB collection. When creating new data, you can add one or more documents into a collection. The system will generate unique identifiers (e.g., ObjectId) for each document, ensuring data integrity.<br><br>
                        2. Read Data (Find)<br>
                        The read operation is used to retrieve documents from a collection. You can define specific filters or criteria to fetch the documents you need. It supports querying based on various conditions and can include additional options such as sorting, limiting results, and projecting specific fields to return.<br><br>
                        3. Update Data<br>
                        This operation allows you to modify existing documents in a collection. You can update one or more fields in a document, or apply bulk updates across multiple documents. The update can be conditional, based on criteria such as field values, and MongoDB supports advanced update options like $set, $inc, and $push.<br><br>
                        4. Delete Data<br>
                        The delete operation allows you to remove one or more documents from a collection. You can specify criteria to delete documents that match certain conditions. MongoDB supports different delete actions such as deleting a single document or multiple documents at once.<br><br>
                        5. Aggregation Operations<br>
                        Aggregation allows you to perform advanced data manipulations like filtering, grouping, and transforming data in complex ways. It enables operations like summing values, counting documents, or creating more sophisticated reports by processing data step-by-step through various pipeline stages. This operation is powerful for analytics and reporting tasks.
                        Each of these core operations is designed to be simple to use over HTTP, and you can access them via RESTful API calls. These operations cover all basic CRUD (Create, Read, Update, Delete) functionalities along with the ability to perform complex aggregations, providing a complete set of tools for interacting with MongoDB in cloud-based applications.<br><br>

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
