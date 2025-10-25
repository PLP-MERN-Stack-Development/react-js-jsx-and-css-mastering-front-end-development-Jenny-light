import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          Welcome to TaskApp
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Manage your tasks and explore user data with ease
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Task Manager Card */}
        <Card className="hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-3">📝 Task Manager</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Create, manage, and track your daily tasks with an intuitive interface
          </p>
          <Link to="/tasks">
            <Button>Go to Tasks</Button>
          </Link>
        </Card>

        {/* Users Directory Card */}
        <Card className="hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-3">👥 Users Directory</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Browse and search through a directory of users from our API
          </p>
          <Link to="/users">
            <Button>View Users</Button>
          </Link>
        </Card>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <Card className="text-center">
          <div className="text-4xl mb-2">⚡</div>
          <h3 className="font-bold mb-2">Fast & Responsive</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built with React and optimized for speed
          </p>
        </Card>

        <Card className="text-center">
          <div className="text-4xl mb-2">🌓</div>
          <h3 className="font-bold mb-2">Dark Mode</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Switch between light and dark themes
          </p>
        </Card>

        <Card className="text-center">
          <div className="text-4xl mb-2">💾</div>
          <h3 className="font-bold mb-2">Auto-Save</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Your tasks are saved automatically
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Home;