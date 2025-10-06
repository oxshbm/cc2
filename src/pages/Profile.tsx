import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User,
  MapPin,
  Calendar,
  Mail,
  Building,
  Users,
  MessageCircle,
  FolderOpen,
  Award,
  Edit,
  Settings,
  BookOpen,
  Star
} from 'lucide-react';

const userProfile = {
  name: 'Raj Mishra',
  email: 'raj@sinhgad.edu',
  role: 'Student',
  university: 'sppu',
  major: 'Computer Science',
  graduationYear: '2026',
  location: 'pune, IN',
  bio: 'Passionate computer science student interested in machine learning and web development. Love collaborating on projects and helping fellow students.',
  joinDate: 'September 2025',
  profileCompletion: 85,
};

const stats = [
  { label: 'Study Groups', value: '5', icon: Users },
  { label: 'Questions Asked', value: '12', icon: MessageCircle },
  { label: 'Projects', value: '8', icon: FolderOpen },
  { label: 'Points Earned', value: '248', icon: Award },
];

const studyGroups = [
  { name: 'Data Structures & Algorithms', role: 'Member', status: 'Active' },
  { name: 'Machine Learning Study Group', role: 'Co-leader', status: 'Active' },
  { name: 'Web Development Bootcamp', role: 'Member', status: 'Completed' },
];

const projects = [
  {
    title: 'E-commerce Website',
    description: 'Full-stack web application built with React and Node.js',
    technologies: ['React', 'Node.js', 'MongoDB'],
    status: 'Completed',
    collaborators: 3,
  },
  {
    title: 'Machine Learning Classifier',
    description: 'Image classification model using TensorFlow',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
    status: 'In Progress',
    collaborators: 2,
  },
];

const recentQuestions = [
  {
    title: 'How to optimize database queries in Node.js?',
    answers: 5,
    upvotes: 12,
    timeAgo: '2 days ago',
  },
  {
    title: 'Best practices for React state management?',
    answers: 8,
    upvotes: 15,
    timeAgo: '1 week ago',
  },
];

const achievements = [
  { name: 'First Question', description: 'Asked your first question', earned: true },
  { name: 'Helpful Member', description: 'Received 10+ upvotes on answers', earned: true },
  { name: 'Collaborative Spirit', description: 'Joined 5+ study groups', earned: true },
  { name: 'Project Leader', description: 'Led a successful project', earned: false },
];

export default function Profile() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-gradient-card rounded-lg shadow-soft p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="text-2xl font-semibold bg-primary/10 text-primary">
                AM
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-primary mb-2">{userProfile.name}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      {userProfile.email}
                    </div>
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-1" />
                      {userProfile.university}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {userProfile.location}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <Badge variant="secondary" className="justify-center">
                  {userProfile.role}
                </Badge>
                <Badge variant="outline" className="justify-center">
                  {userProfile.major}
                </Badge>
                <Badge variant="outline" className="justify-center">
                  Class of {userProfile.graduationYear}
                </Badge>
                <Badge variant="outline" className="justify-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Joined {userProfile.joinDate}
                </Badge>
              </div>
              
              <p className="text-muted-foreground mb-4">{userProfile.bio}</p>
              
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${userProfile.profileCompletion}%` }}
                  />
                </div>
                <span className="text-sm text-muted-foreground">
                  Profile {userProfile.profileCompletion}% complete
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-gradient-card shadow-soft text-center">
                <CardContent className="p-4">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="groups">Study Groups</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Recent Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentQuestions.map((question, index) => (
                    <div key={index} className="p-3 bg-primary/5 rounded-lg">
                      <h4 className="font-medium text-sm mb-2">{question.title}</h4>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-3">
                          <span>{question.answers} answers</span>
                          <span>{question.upvotes} upvotes</span>
                        </div>
                        <span>{question.timeAgo}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Learning Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Data Structures</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Web Development</span>
                        <span>72%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Machine Learning</span>
                        <span>60%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-success h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="groups">
            <div className="space-y-4">
              {studyGroups.map((group, index) => (
                <Card key={index} className="bg-gradient-card shadow-soft">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{group.name}</h3>
                        <p className="text-sm text-muted-foreground">Role: {group.role}</p>
                      </div>
                      <Badge variant={group.status === 'Active' ? 'default' : 'secondary'}>
                        {group.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="space-y-4">
              {projects.map((project, index) => (
                <Card key={index} className="bg-gradient-card shadow-soft">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold mb-1">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                      </div>
                      <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {project.collaborators} collaborators
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`shadow-soft ${achievement.earned ? 'bg-gradient-card border-success/20' : 'bg-muted/50'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${achievement.earned ? 'bg-success/10' : 'bg-muted'}`}>
                        {achievement.earned ? (
                          <Star className="h-5 w-5 text-success" />
                        ) : (
                          <Award className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <div>
                        <h3 className={`font-semibold ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {achievement.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}