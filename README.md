# ✨ Todo Manager

A beautiful, modern todo application built with Angular 19 and Express.js, featuring stunning gradients, smooth animations, and full CRUD functionality.

![Todo Manager](https://img.shields.io/badge/Angular-19-red?style=for-the-badge&logo=angular)
![Express](https://img.shields.io/badge/Express-5.2-green?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green?style=for-the-badge&logo=mongodb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

## 🎨 Features

- ✨ **Beautiful UI/UX** - Modern gradients, smooth animations, and polished design
- 📝 **Full CRUD Operations** - Create, Read, Update, and Delete todos
- 🎯 **Form Validation** - Real-time validation with helpful error messages
- 📱 **Responsive Design** - Works perfectly on all screen sizes
- 💫 **Smooth Animations** - Fade-in, slide-up, and hover effects
- 🎨 **Card-Based Layout** - Elevated cards with beautiful shadows
- 🔄 **Real-time Updates** - Instant feedback on all operations

## 🚀 Tech Stack

### Frontend
- **Angular 19** - Standalone components architecture
- **TypeScript** - Type-safe development
- **RxJS** - Reactive programming
- **CSS3** - Modern styling with gradients and animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v6 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **Angular CLI** - Install globally: `npm install -g @angular/cli`
- **Git** - [Download](https://git-scm.com/)

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/To-Do-List-Gigs.git
cd To-Do-List-Gigs
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
# Copy the example below and paste into backend/.env
```

**Backend `.env` file:**
```env
MONGO_URI=mongodb://localhost:27017/todoassign
PORT=5000
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd ../frontend

# Install dependencies
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running on your system:

**Windows:**
```bash
# MongoDB should start automatically as a service
# Or run: mongod
```

**macOS/Linux:**
```bash
mongod
```

## 🎯 Running the Application

### Start Backend Server

```bash
# From the backend directory
cd backend
npm run dev
```

The backend will run on `http://localhost:5000`

### Start Frontend Server

```bash
# From the frontend directory (in a new terminal)
cd frontend
ng serve -o
```

The frontend will run on `http://localhost:4200` and open automatically in your browser.

## 📖 Usage

### Creating a Todo
1. Fill in the **Title** (minimum 3 characters)
2. Add a **Description** (minimum 5 characters)
3. Click **"Add Todo"**
4. Watch the smooth animation as your todo appears!

### Editing a Todo
1. Click the **"✏️ Edit"** button on any todo card
2. The form title changes to **"Update Todo"**
3. Modify the title or description
4. Click **"Update Todo"** to save changes
5. Or click **"Cancel"** to discard changes

### Deleting a Todo
1. Click the **"🗑️ Delete"** button on any todo card
2. Confirm the deletion in the dialog
3. Watch the smooth removal animation

## 🏗️ Project Structure

```
To-Do-List-Gigs/
├── backend/
│   ├── models/
│   │   └── Todo.js          # MongoDB schema
│   ├── routes/
│   │   └── todos.js         # API routes
│   ├── .env                 # Environment variables
│   ├── server.js            # Express server
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── todo-form/      # Form component
│   │   │   │   └── todo-list/      # List component
│   │   │   ├── services/
│   │   │   │   └── todo.service.ts # API service
│   │   │   ├── app.ts              # Main component
│   │   │   ├── app.html            # Main template
│   │   │   └── app.config.ts       # App configuration
│   │   └── styles.css              # Global styles
│   └── package.json
│
└── README.md
```

## 🎨 Design Features

- **Gradient Backgrounds** - Purple-to-pink gradients throughout
- **Modern Typography** - Inter font family from Google Fonts
- **Custom Scrollbar** - Styled scrollbar matching the theme
- **Micro-interactions** - Hover states and smooth transitions
- **Empty State** - Engaging animation when no todos exist
- **Responsive Grid** - Adaptive layout for all screen sizes

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create a new todo |
| PUT | `/api/todos/:id` | Update a todo |
| DELETE | `/api/todos/:id` | Delete a todo |

## 🛠️ Development

### Backend Development
```bash
cd backend
npm run dev  # Runs with nodemon for auto-reload
```

### Frontend Development
```bash
cd frontend
ng serve  # Runs with live reload
```

### Building for Production

**Frontend:**
```bash
cd frontend
ng build --configuration production
```

**Backend:**
```bash
cd backend
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)

## 🙏 Acknowledgments

- Angular Team for the amazing framework
- MongoDB for the flexible database
- Express.js for the simple and powerful backend framework

## 📸 Screenshots

### Main Interface
Beautiful gradient header with form and todo list

### Form Validation
Real-time validation with helpful error messages

### Edit Mode
Seamless editing experience with "Update Todo" mode

---

**Made with ❤️ and lots of ☕**
