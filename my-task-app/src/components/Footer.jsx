function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
              About
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
              Contact
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
              Privacy
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} TaskApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;