import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Users, 
  MessageCircle, 
  UserCheck, 
  FolderOpen, 
  Heart,
  Calendar,
  BookOpen,
  User,
  Menu,
  X
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: GraduationCap },
  { name: 'Study Groups', href: '/groups', icon: Users },
  { name: 'Q&A', href: '/questions', icon: MessageCircle },
  { name: 'Alumni', href: '/alumni', icon: UserCheck },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Mentorship', href: '/mentorship', icon: Heart },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'Workshops', href: '/workshops', icon: BookOpen },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isPublicRoute = ['/', '/login', '/register'].includes(location.pathname);

  if (isPublicRoute) return null;

  return (
    <nav className="bg-card border-b border-border shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">Campus Connect</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <Link to="/profile">
              <Button variant="ghost" size="sm" className="ml-4">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <Link
              to="/profile"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5"
              onClick={() => setIsOpen(false)}
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}