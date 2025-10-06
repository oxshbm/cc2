import { Layout } from '@/components/layout/Layout';
import { FeatureCard } from '@/components/ui/feature-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  MessageCircle, 
  UserCheck, 
  FolderOpen, 
  Heart,
  Calendar,
  BookOpen,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Study Groups',
    description: 'Join or create study groups to collaborate with peers',
    icon: Users,
    href: '/groups',
  },
  {
    title: 'Q&A Forum',
    description: 'Ask questions and help others with their academic queries',
    icon: MessageCircle,
    href: '/questions',
  },
  {
    title: 'Alumni Network',
    description: 'Connect with alumni for career guidance and mentorship',
    icon: UserCheck,
    href: '/alumni',
  },
  {
    title: 'Projects',
    description: 'Collaborate on projects and showcase your work',
    icon: FolderOpen,
    href: '/projects',
  },
  {
    title: 'Mentorship',
    description: 'Find mentors or become one to help others grow',
    icon: Heart,
    href: '/mentorship',
  },
  {
    title: 'Events',
    description: 'Discover and attend campus events and workshops',
    icon: Calendar,
    href: '/events',
  },
  {
    title: 'Workshops',
    description: 'Enroll in skill-building workshops and courses',
    icon: BookOpen,
    href: '/workshops',
  },
];

const quickStats = [
  { icon: Users, label: 'Study Groups Joined', value: '3', color: 'text-primary' },
  { icon: MessageCircle, label: 'Questions Asked', value: '12', color: 'text-accent' },
  { icon: Award, label: 'Points Earned', value: '248', color: 'text-success' },
  { icon: Clock, label: 'Hours Studied', value: '42', color: 'text-warning' },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening in your campus community today.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color} opacity-80`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Features Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Explore Campus Connect
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link key={index} to={feature.href}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  className="h-full"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-card shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Your latest interactions and achievements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                <Users className="h-4 w-4 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Joined "Data Structures Study Group"</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-accent/10 rounded-lg">
                <MessageCircle className="h-4 w-4 text-accent" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Answered a question in Q&A</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-success/10 rounded-lg">
                <Award className="h-4 w-4 text-success" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Earned "Helpful Member" badge</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Events
              </CardTitle>
              <CardDescription>
                Don't miss these campus activities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Career Fair 2024</p>
                  <p className="text-xs text-muted-foreground">Tomorrow, 9:00 AM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-accent/10 rounded-lg">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">React Workshop</p>
                  <p className="text-xs text-muted-foreground">Dec 15, 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-success/10 rounded-lg">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Alumni Networking Night</p>
                  <p className="text-xs text-muted-foreground">Dec 20, 6:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}