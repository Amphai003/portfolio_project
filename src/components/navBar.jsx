import { Home, PhoneIcon, ToolCaseIcon, User } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const navItems = [
    {icon: Home, label: 'Home', path: '/home'},
    {icon: User, label: 'About', path: '/about'},
    {icon: ToolCaseIcon, label: 'Experience', path: '/experience'},
    {icon: PhoneIcon, label: 'Contact', path: '/contact'}
  ]

  return (
    <div className="flex flex-wrap gap-4 lg:gap-10 lg:space-x-10">
      {navItems.map(({ icon: Icon, label, path }) => (
        <button
          key={label}
          onClick={() => navigate(path)}
          className="flex flex-col items-center text-white hover:text-blue-600 transition-colors duration-200"
        >
          <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
          <span className="text-xs lg:text-sm mt-1">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default Navbar;