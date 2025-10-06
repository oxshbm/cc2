import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GraduationCap, Mail, Lock, User, Building } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    university: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Simulate registration - in real app, this would create account
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
            Join Campus Connect
          </h2>
          <p className="mt-2 text-white/80">
            Create your account to start connecting
          </p>
        </div>

        {/* Registration Form */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-strong">
          <CardHeader>
            <CardTitle className="text-center text-primary">Create Account</CardTitle>
            <CardDescription className="text-center">
              Fill in your details to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="pl-10"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
              </div>

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
                    required
                    className="pl-10"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select onValueChange={(value) => handleInputChange('role', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="alumni">Alumni</SelectItem>
                    <SelectItem value="mentor">Mentor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="university" className="text-sm font-medium">
                  University
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="university"
                    name="university"
                    type="text"
                    required
                    className="pl-10"
                    placeholder="Enter your university"
                    value={formData.university}
                    onChange={(e) => handleInputChange('university', e.target.value)}
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
                    required
                    className="pl-10"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    className="pl-10"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full"
              >
                Create Account
              </Button>

              <div className="text-center">
                <span className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary hover:text-primary/80 font-medium">
                    Sign in here
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