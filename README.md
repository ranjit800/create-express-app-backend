# 🚀 create-express-app-backend

A simple, production-ready CLI tool to scaffold a complete **Express.js backend** project with just one command.

## 📦 Installation

```bash

1 npx create-express-app-backend my-backend
2 cd my-backend
3 npm install
4 npm start



✨ Features
✅ Production-ready folder structure

✅ Built-in MongoDB connection with Mongoose

✅ Environment variable support with .env & .env.example

✅ Sample route, controller, model, and middleware included

✅ EJS templating setup in views/

✅ Static files served from public/ (with default CSS & JS)

✅ Logging middleware sample

✅ Ready-to-use utility file

✅ Git-friendly: Includes .gitignore for user projects

✅ Works via npx or global install




📁 Folder Structure

my-backend-app/
├── app.js                  # Main entry point
├── .env                   # Your environment config
├── .gitignore             # Common ignored files
├── config/
│   └── db.js              # MongoDB connection setup
├── controllers/
│   └── sampleController.js # Sample controller logic
├── middlewares/
│   └── logger.js          # Example middleware
├── models/
│   └── Sample.js          # Mongoose schema example
├── public/
│   ├── css/
│   │   └── style.css      # Sample CSS
│   └── js/
│       └── script.js      # Sample JS
├── routes/
│   └── sampleRoutes.js    # Example Express route
├── utils/
│   └── helper.js          # Sample utility function
├── views/
│   └── index.ejs          # EJS template
└── package.json           # Project config




⚙️ Technologies Used
1 Node.js

2 Express.js

3 Mongoose

4 EJS

5 dotenv



🔧 How It Works
---------------------
When you run:--
bash
Copy code
npx create-express-app-backend my-backend-app

This CLI will:

1 Copy the project template to my-backend-app/

2 Initialize it with its own package.json

3 Add basic files like .gitignore, .env, and starter code

4 Set you up for success with a clean structure.




🤝 Contributing
-----------------------------
@ Contributions, ideas, and improvements are  
welcome!

1 Fork the repo

2 Make your changes

3 Submit a pull request



📄 License
NSEC © rj-web-dev

Git :- https://github.com/ranjit800/create-express-app-backend