import { Layout } from '@/components/layout/Layout';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Users, Calendar, Code, Star, Plus, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "EcoTrack - Carbon Footprint App",
    description: "Mobile app to track personal carbon footprint with gamification elements and community challenges.",
    category: "Mobile Development",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
    teamSize: 4,
    maxMembers: 6,
    duration: "3 months",
    difficulty: "Intermediate",
    status: "Active",
    leader: "Sarah Chen",
    tags: ["Sustainability", "Mobile", "Full-Stack"],
    likes: 24,
    applicants: 12,
    featured: true
  },
  {
    id: 2,
    title: "Campus Food Delivery Platform",
    description: "Web platform connecting students with local restaurants and campus food vendors with real-time delivery tracking.",
    category: "Web Development",
    tech: ["React", "Express.js", "PostgreSQL", "Socket.io"],
    teamSize: 3,
    maxMembers: 5,
    duration: "4 months",
    difficulty: "Advanced",
    status: "Recruiting",
    leader: "Mike Rodriguez",
    tags: ["E-commerce", "Real-time", "Full-Stack"],
    likes: 31,
    applicants: 18,
    featured: false
  },
  {
    id: 3,
    title: "AI Study Buddy",
    description: "AI-powered study assistant that generates personalized quizzes and study materials based on course content.",
    category: "AI/ML",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    teamSize: 2,
    maxMembers: 4,
    duration: "6 months",
    difficulty: "Advanced",
    status: "Planning",
    leader: "Emily Zhang",
    tags: ["AI", "Education", "NLP"],
    likes: 45,
    applicants: 22,
    featured: true
  },
  {
    id: 4,
    title: "Campus Event Manager",
    description: "Comprehensive event management system for student organizations with booking, promotion, and analytics features.",
    category: "Web Development",
    tech: ["Vue.js", "Laravel", "MySQL", "Stripe"],
    teamSize: 5,
    maxMembers: 7,
    duration: "5 months",
    difficulty: "Intermediate",
    status: "Active",
    leader: "Alex Kumar",
    tags: ["Management", "Events", "Payment"],
    likes: 18,
    applicants: 9,
    featured: false
  }
];

const categories = ["All", "Web Development", "Mobile Development", "AI/ML", "Data Science", "Game Development"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
const statuses = ["All", "Planning", "Recruiting", "Active", "Completed"];

export default function Projects() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">Student Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborate on exciting projects and build something amazing together
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                className="pl-10 bg-card/50"
              />
            </div>
            <Button className="gradient-bg">
              <Plus className="h-4 w-4 mr-2" />
              Post New Project
            </Button>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="flex gap-1">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                    className="text-xs"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="flex gap-1">
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={difficulty === "All" ? "secondary" : "outline"}
                    size="sm"
                    className="text-xs"
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>
              <div className="flex gap-1">
                {statuses.map((status) => (
                  <Button
                    key={status}
                    variant={status === "All" ? "secondary" : "outline"}
                    size="sm"
                    className="text-xs"
                  >
                    {status}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.filter(project => project.featured).map((project) => (
                <Card key={project.id} className="glass-card hover:shadow-elegant transition-all duration-300 group border-primary/20">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="default">{project.category}</Badge>
                      <div className="flex gap-2">
                        <Badge variant="outline">{project.difficulty}</Badge>
                        <Badge variant="secondary">{project.status}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription>
                      Led by {project.leader}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{project.teamSize}/{project.maxMembers} members</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <span>{project.likes} likes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Code className="h-4 w-4" />
                        <span>{project.applicants} applicants</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button className="flex-1 gradient-bg">
                        Join Project
                      </Button>
                      <Button variant="outline" size="icon">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="glass-card hover:shadow-elegant transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                      <Badge variant="outline" className="text-xs">{project.status}</Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      by {project.leader}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{project.teamSize}/{project.maxMembers}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        <span>{project.likes}</span>
                      </div>
                      <Badge variant="outline" className="text-xs w-fit">
                        {project.difficulty}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    <Button className="w-full" variant="outline">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 glass-card">
            <h2 className="text-2xl font-bold mb-4">Have a Project Idea?</h2>
            <p className="text-muted-foreground mb-6">
              Start your own project and find talented teammates to bring your vision to life
            </p>
            <Button size="lg" className="gradient-bg">
              <Plus className="h-4 w-4 mr-2" />
              Create New Project
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}