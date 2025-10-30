# Task Management App with API Integration

A modern, responsive React application built with Vite, Tailwind CSS, and React Router. This project demonstrates component architecture, state management, custom hooks, API integration, and a beautiful dark mode theme switcher.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8)
![Vite](https://img.shields.io/badge/Vite-5.0+-646cff)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- ✅ **Task Manager** - Create, complete, delete, and filter tasks
- 👥 **Users Directory** - Browse users fetched from JSONPlaceholder API
- 🌓 **Dark Mode** - Toggle between light and dark themes with persistent preference
- 💾 **Auto-Save** - Tasks are automatically saved to localStorage
- 🔍 **Search & Filter** - Search users and filter tasks by status
- 📱 **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- 📄 **Pagination** - Navigate through user data with ease
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

## 🚀 Live Demo

[View Live Demo](https://startling-stroopwafel-ed3bf2.netlify.app/)

## 📸 Screenshots

### Home Page
### Task Manager
### Users Directory
### Dark Mode

## 🛠️ Technologies Used

- **React** - UI library for building user interfaces
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **JSONPlaceholder API** - Fake REST API for testing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn**

Check your versions:
```bash
node --version
npm --version
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/task-management-app.git
cd task-management-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

## 📁 Project Structure

```
my-task-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.jsx          # Reusable button component
│   │   ├── Card.jsx            # Card container component
│   │   ├── Footer.jsx          # Footer with links
│   │   ├── Layout.jsx          # Main layout wrapper
│   │   └── Navbar.jsx          # Navigation bar
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark mode context
│   ├── hooks/
│   │   └── useLocalStorage.jsx # Custom hook for localStorage
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── TaskManager.jsx     # Task management page
│   │   └── Users.jsx           # Users directory page
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── images                     # Screenshots of the app
└── README.md
```

## 🎯 Core Features Explained

### Task Manager
- **Add Tasks** - Create new tasks with a simple input
- **Complete Tasks** - Mark tasks as done with a checkbox
- **Delete Tasks** - Remove tasks you no longer need
- **Filter Tasks** - View All, Active, or Completed tasks
- **Statistics** - See total, completed, and active task counts
- **Persistent Storage** - Tasks are saved automatically to localStorage

### Users Directory
- **API Integration** - Fetches real user data from JSONPlaceholder
- **Search Functionality** - Search users by name or email
- **Pagination** - Navigate through users 6 at a time
- **Loading States** - Shows spinner while fetching data
- **Error Handling** - Displays error messages with retry option
- **Responsive Grid** - Adapts to different screen sizes

### Theme System
- **Dark Mode Toggle** - Switch between light and dark themes
- **Persistent Preference** - Theme choice is saved to localStorage
- **Context API** - Theme state is shared across all components
- **Smooth Transitions** - Animated theme switching

## 🎨 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (if configured)
npm run lint
```

## 🔧 Configuration

### Tailwind CSS

The `tailwind.config.js` file includes:
- Dark mode support (`class` strategy)
- Content paths for purging unused styles
- Custom theme extensions (if needed)

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Vite

The `vite.config.js` includes React plugin configuration:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

## 🌐 API Reference

This project uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/):

```
GET https://jsonplaceholder.typicode.com/users
```

Returns an array of 10 user objects with:
- `id` - User ID
- `name` - Full name
- `username` - Username
- `email` - Email address
- `phone` - Phone number
- `website` - Personal website

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Palette

### Light Mode
- Background: `#F9FAFB` (gray-50)
- Cards: `#FFFFFF` (white)
- Text: `#111827` (gray-900)
- Primary: `#3B82F6` (blue-500)

### Dark Mode
- Background: `#030712` (gray-950)
- Cards: `#1F2937` (gray-800)
- Text: `#F9FAFB` (gray-100)
- Primary: `#3B82F6` (blue-500)

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Build your project:
   ```bash
   npm run build
   ```
2. Drag and drop the `dist` folder to [netlify.com](https://netlify.com)

### Manual Build

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🧪 Testing

### Manual Testing Checklist

- [ ] Home page loads correctly
- [ ] Navigation between pages works
- [ ] Tasks can be added, completed, and deleted
- [ ] Task filters work (All, Active, Completed)
- [ ] Tasks persist after page refresh
- [ ] Users load from API
- [ ] User search works correctly
- [ ] Pagination works
- [ ] Dark mode toggles correctly
- [ ] Dark mode preference persists
- [ ] Responsive design works on mobile
- [ ] Loading states display correctly
- [ ] Error states display with retry option

## 🐛 Troubleshooting

### Issue: Tailwind styles not working

**Solution:**
```bash
npm install -D tailwindcss@3.4.1 postcss autoprefixer
npx tailwindcss init -p
```

### Issue: Tasks not saving

**Solution:** Check if localStorage is enabled in your browser. Some privacy modes block it.

### Issue: API not loading

**Solution:** Check your internet connection and verify the API URL is correct.

### Issue: Dark mode not persisting

**Solution:** Clear localStorage and try again:
```javascript
localStorage.clear()
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**

- GitHub: https://github.com/Jenny-light
- LinkedIn: www.linkedin.com/in/jenniferomoregie
- Email: jennylightomoregie@gmail.com

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [Lucide React Icons](https://lucide.dev/)

## 📚 Learning Resources

- [React Official Tutorial](https://react.dev/learn)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/installation)
- [React Router Documentation](https://reactrouter.com/)
- [Modern JavaScript Tutorial](https://javascript.info/)

## 🔮 Future Enhancements

- [ ] Add task categories/tags
- [ ] Implement task due dates
- [ ] Add task priority levels
- [ ] User authentication
- [ ] Backend integration
- [ ] Task sharing functionality
- [ ] Export tasks to CSV/JSON
- [ ] Add animations and transitions
- [ ] Implement drag-and-drop for tasks
- [ ] Add unit and integration tests

## 📊 Project Stats

- **Lines of Code**: ~1000+
- **Components**: 8
- **Pages**: 3
- **Custom Hooks**: 2
- **API Endpoints**: 1

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ and React
