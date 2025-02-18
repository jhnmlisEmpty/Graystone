const Header = () => {
  return (
    <header className="bg-red-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
      {/* Left side: Logo and Name */}
      <div className="flex items-center gap-3">
        <img src="/GIP LOGO.jpg" alt="Logo" className="h-10 w-10" />
        <span className="text-xl font-bold">Graystone Institute of the Philippines</span>
      </div>

      {/* Right side: Navigation */}
      <nav className="hidden md:flex gap-6">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Accreditations</a>
        <a href="#" className="hover:underline">About</a>
      </nav>

      {/* Login Button */}
      
    </header>
  );
};

export default Header;