import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';

function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="text-xl font-bold text-blue-500">
            TaskApp
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              Home
            </Link>
            <Link 
              to="/tasks" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              Tasks
            </Link>
            <Link 
              to="/users" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              Users
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;