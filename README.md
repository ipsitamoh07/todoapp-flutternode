<h1>To-Do App with Node.js, MongoDB, and Flutter</h1>
        <p>This project is a To-Do application built using Node.js for the backend, MongoDB for the database, and Flutter for the frontend. The backend provides APIs to create, read, update, and delete to-do items, and the Flutter app interacts with these APIs.</p>
        
<h2>Features</h2>
        <ul>
            <li>User authentication with JWT</li>
            <li>Create, read, update, and delete to-do items</li>
            <li>Interactive UI using Flutter</li>
        </ul>

<h2>Project Structure</h2>
        <pre>
        ├── backend
        │   ├── controllers
        │   ├── models
        │   ├── routes
        │   ├── server.js
        ├── frontend
        │   ├── lib
        │   ├── pubspec.yaml
        </pre>

<h2>Prerequisites</h2>
        <ul>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Flutter SDK</li>
        </ul>

 <h2>Setup Instructions</h2>
        
 <h3>Backend Setup</h3>
        <ol>
            <li>Clone the repository</li>
            <pre><code class="command">git clone https://github.com/your-repo/todo-app.git</code></pre>
            <li>Navigate to the backend directory</li>
            <pre><code class="command">cd todo-app/backend</code></pre>
            <li>Install the dependencies</li>
            <pre><code class="command">npm install</code></pre>
            <li>Create a `.env` file in the backend directory and add your MongoDB connection string and JWT secret key</li>
            <pre><code>
            MONGO_URI=your_mongo_connection_string
            JWT_SECRET=your_jwt_secret
            </code></pre>
            <li>Start the backend server</li>
            <pre><code class="command">npm start</code></pre>
            <li>The backend server will start on <code>http://localhost:5000</code></li>
        </ol>

  <h3>Frontend Setup</h3>
        <ol>
            <li>Navigate to the frontend directory</li>
            <pre><code class="command">cd todo-app/frontend</code></pre>
            <li>Install the Flutter dependencies</li>
            <pre><code class="command">flutter pub get</code></pre>
            <li>Update the `config.dart` file with the backend API URL</li>
            <pre><code>
            const String baseUrl = 'http://localhost:5000';
            const String login = '$baseUrl/api/auth/login';
            const String register = '$baseUrl/api/auth/register';
            const String addtodo = '$baseUrl/api/todo/create';
            const String getToDoList = '$baseUrl/api/todo/list';
            const String deleteTodo = '$baseUrl/api/todo/delete';
            </code></pre>
            <li>Run the Flutter app</li>
            <pre><code class="command">flutter run</code></pre>
        </ol>

  <h2>Usage</h2>
        <p>Once the backend and frontend are set up and running, you can use the app to:</p>
        <ul>
            <li>Register a new user</li>
            <li>Log in with an existing user</li>
            <li>Add new to-do items</li>
            <li>View the list of to-do items</li>
            <li>Delete to-do items</li>
        </ul>

  <h2>API Endpoints</h2>
        <h3>Authentication</h3>
        <ul>
            <li><code>POST /api/auth/register</code> - Register a new user</li>
            <li><code>POST /api/auth/login</code> - Log in an existing user</li>
        </ul>
        <h3>To-Do</h3>
        <ul>
            <li><code>POST /api/todo/create</code> - Create a new to-do item</li>
            <li><code>POST /api/todo/list</code> - Get a list of to-do items</li>
            <li><code>POST /api/todo/delete</code> - Delete a to-do item</li>
        </ul>

  <h2>Contributing</h2>
        <p>Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.</p>
