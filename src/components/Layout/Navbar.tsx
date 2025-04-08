import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, BriefcaseBusiness, User } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avtar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/drower-menu';
import axios from 'axios';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: '' });
  const [userType, setUserType] = useState();

  const fecthUserName = async (token) => {
    if (token) {
      try {
        const response = await axios.get('http://localhost:4000/job-portal/api/v1/users/get/user-name', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userType = response.data.user.user_role;
        setUserType(userType);
        setUser({ name: response.data.user.name })
        setIsLoggedIn(true);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.removeItem('jobify-token');
          setIsLoggedIn(false);
          setUser({ name: '' });
        } else {
          console.error('Failed to fetch user name', error);
        }
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('jobify-token');
    if (token) {
      fecthUserName(token);
    } else {
      setIsLoggedIn(false);
      setUser({ name: '' });
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLogin = () => {
    localStorage.removeItem('jobify-token');
    setIsLoggedIn(false);
    navigate('/');
    window.location.reload();
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Find Jobs', path: '/jobs' },
    { name: 'Find Freelancers', path: '/freelancers' },
    { name: 'For Businesses', path: '/business' },
  ];

  const filteredNavLinks = navLinks.filter(
    (link) => !(userType === 'user' && link.name === 'For Businesses')
  );

  const isActive = (path: string) => location.pathname === path;

  function getInitials(name?: string) {
    if (!name || typeof name !== 'string') return 'NA';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <BriefcaseBusiness className="h-8 w-8 text-jobify-blue" />
              <span className="ml-2 text-xl font-bold text-jobify-dark">Jobify</span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {filteredNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive(link.path)
                      ? 'border-b-2 border-jobify-blue text-jobify-blue'
                      : 'text-gray-500 hover:text-jobify-dark hover:border-b-2 hover:border-gray-300'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="rounded-full h-10 w-10 p-0">
                    <Avatar>
                      <AvatarFallback>{isLoggedIn && user.name ? getInitials(user.name) : 'NA'}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600 cursor-pointer" onClick={toggleLogin}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link to="/login">Log In</Link>
                </Button>
                <Button className="bg-jobify-blue hover:bg-blue-600" asChild>
                  <Link to="/register">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                    ? 'bg-jobify-blue bg-opacity-10 text-jobify-blue'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-jobify-dark'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 px-4 flex flex-col space-y-3">
            {isLoggedIn ? (
              <>
                <div className="flex items-center px-3">
                  <div className="flex-shrink-0">
                    <Avatar>
                      <AvatarFallback>{getInitials(user.name || "")}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{user.name}</div>
                  </div>
                </div>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-jobify-dark"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <button
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-50"
                  onClick={() => {
                    toggleLogin();
                    setIsOpen(false);
                  }}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Button variant="outline" className="w-full justify-center" asChild>
                  <Link to="/login" onClick={() => setIsOpen(false)}>Log In</Link>
                </Button>
                <Button className="w-full justify-center bg-jobify-blue hover:bg-blue-600" asChild>
                  <Link to="/register" onClick={() => setIsOpen(false)}>Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
