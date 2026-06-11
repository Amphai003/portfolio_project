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
      {navItems.map(({ icon:  label, path }) => (
        <button
          key={label}
          onClick={() => navigate(path)}
          className="flex flex-col items-center text-white transition-colors duration-200 hover:text-blue-600"
        >
          <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
          <span className="mt-1 text-xs lg:text-sm">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default Navbar;