import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const navItems = [
    { emoji: '🏠', label: 'Home', path: '/home' },
    { emoji: '👤', label: 'About', path: '/about' },
    { emoji: '💼', label: 'Experience', path: '/experience' },
    { emoji: '📞', label: 'Contact', path: '/contact' }
  ];

  return (
    <div className="flex flex-wrap gap-4 lg:gap-10 lg:space-x-10">
      {navItems.map(({ emoji, label, path }) => (
        <button
          key={label}
          onClick={() => navigate(path)}
          className="flex flex-col items-center text-white transition-colors duration-200 hover:text-blue-600"
        >
          <span className="text-lg lg:text-xl">{emoji}</span>
          <span className="mt-1 text-xs lg:text-sm">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default Navbar;