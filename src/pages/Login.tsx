import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Mail, Lock } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, this would validate credentials
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and title */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <GraduationCap className="h-10 w-10 text-white" />
            <span className="text-2xl font-bold text-white">Campus Connect</span>
          </Link>
          <h2 className="text-3xl font-bold text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-white/80">
            Sign in to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-strong">
          <CardHeader>
            <CardTitle className="text-center text-primary">Sign In</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="pl-10"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="pl-10"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a href="#" className="text-primary hover:text-primary/80">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full"
              >
                Sign In
              </Button>

              <div className="text-center">
                <span className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-primary hover:text-primary/80 font-medium">
                    Sign up here
                  </Link>
                </span>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}