import { useState, useEffect } from 'react';
import Card from '../components/Card';

function Users() {
  // State for storing user data
  const [users, setUsers] = useState([]);
  
  // State for loading status
  const [loading, setLoading] = useState(true);
  
  // State for errors
  const [error, setError] = useState(null);
  
  // State for search
  const [searchTerm, setSearchTerm] = useState('');
  
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  // Fetch users when component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filter users based on search
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Show loading state
  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading users...</p>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 text-xl">❌ Error: {error}</p>
        <button
          onClick={fetchUsers}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Users Directory</h1>

      {/* Search Bar */}
      <Card className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on search
          }}
          placeholder="Search by name or email..."
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        />
      </Card>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {currentUsers.map(user => (
          <Card key={user.id} className="hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {user.name.charAt(0)}
              </div>
              
              {/* User Info */}
              <div className="flex-1">
                <h3 className="font-bold text-lg">{user.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">@{user.username}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{user.email}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{user.phone}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{user.website}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Users;