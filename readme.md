# QuickChat

**QuickChat** is a real-time chat platform where users can sign up or log in to communicate with each other. The app features real-time messaging, user status indicators, and profile customization with names and profile pictures.

## Features

- **User Authentication**: Sign up and log in with email, password, name, and profile picture.
- **Real-Time Chat**: Users can chat with each other in real-time.
- **User Profile**: Displays user status, profile name, and profile picture.
- **Responsive Design**: Built with Tailwind CSS for a modern, responsive interface.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side of the application.
- **Express.js**: Web framework for Node.js, used for handling routes and middleware.
- **MongoDB**: NoSQL database for storing user information and messages.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js, providing schema-based solutions.
- **Socket.io**: Library for enabling real-time, bidirectional communication between web clients and servers.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.
- **EJS (Embedded JavaScript templates)**: Templating engine used to generate HTML markup with plain JavaScript.
- **Bcrypt.js**: Library for hashing passwords and handling authentication security.
- **Dotenv**: Module for loading environment variables from a `.env` file.
- **Render**: Cloud platform used for deploying the application.
- **Multer**: Middleware for handling multipart/form-data, used for uploading profile pictures.

## Live Demo

You can try QuickChat live at https://quickchat-qeh1.onrender.com/

## Installation

To run the app locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/quickchat.git
   cd quickchat
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   Create a `.env` file in the root directory with the following variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=your_preferred_port
   SECRET=your_secret_key
   ```

4. **Start the Server**:

   ```bash
   npm start
   ```

The app will be running on `http://localhost:3000`.

## Usage

QuickChat is designed to be user-friendly. Simply sign up or log in, and you’ll be redirected to the chat page where you can start chatting with other users in real time.

## Contributing

Contributions are welcome! If you’d like to contribute, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is not licensed.

## Contact

For any questions or support, feel free to reach out to me at [jaykishankharwar215@gmail.com](mailto:jaykishankharwar215@gmail.com).
