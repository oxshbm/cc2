import { Layout } from '@/components/layout/Layout';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, Clock, Users, Star, BookOpen } from 'lucide-react';

const workshops = [
  {
    id: 1,
    title: "Advanced React Development",
    instructor: "Dr. Sarah Johnson",
    rating: 4.8,
    reviews: 124,
    price: 299,
    duration: "8 weeks",
    enrolled: 45,
    maxStudents: 50,
    category: "Web Development",
    level: "Advanced",
    startDate: "2024-09-15",
    description: "Master advanced React concepts including hooks, context, performance optimization, and testing strategies.",
    skills: ["React Hooks", "Performance", "Testing", "State Management"]
  },
  {
    id: 2,
    title: "Data Science with Python",
    instructor: "Prof. Michael Chen",
    rating: 4.9,
    reviews: 89,
    price: 399,
    duration: "10 weeks",
    enrolled: 38,
    maxStudents: 40,
    category: "Data Science",
    level: "Intermediate",
    startDate: "2024-09-22",
    description: "Learn data analysis, visualization, and machine learning using Python and popular libraries.",
    skills: ["Python", "Pandas", "Matplotlib", "Scikit-learn"]
  },
  {
    id: 3,
    title: "Digital Marketing Strategy",
    instructor: "Emma Williams",
    rating: 4.7,
    reviews: 156,
    price: 199,
    duration: "6 weeks",
    enrolled: 67,
    maxStudents: 80,
    category: "Marketing",
    level: "Beginner",
    startDate: "2024-10-01",
    description: "Comprehensive guide to modern digital marketing including SEO, social media, and analytics.",
    skills: ["SEO", "Social Media", "Analytics", "Content Marketing"]
  }
];

const categories = ["All", "Web Development", "Data Science", "Marketing", "Design", "Business"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export default function Workshops() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">Professional Workshops</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your skills with expert-led workshops and advance your career
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search workshops..."
                className="pl-10 bg-card/50"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2">
                {levels.map((level) => (
                  <Button
                    key={level}
                    variant={level === "All" ? "secondary" : "outline"}
                    size="sm"
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Workshop Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop) => (
              <Card key={workshop.id} className="glass-card hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{workshop.category}</Badge>
                    <Badge variant="outline">{workshop.level}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                    {workshop.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    by {workshop.instructor}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {workshop.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span>{workshop.rating}</span>
                      <span>({workshop.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{workshop.enrolled}/{workshop.maxStudents}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{workshop.startDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{workshop.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {workshop.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {workshop.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{workshop.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-2xl font-bold text-primary">
                      ${workshop.price}
                    </div>
                    <Button className="gradient-bg">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 glass-card">
            <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-muted-foreground mb-6">
              Suggest a workshop topic and we'll find expert instructors to create it
            </p>
            <Button size="lg" className="gradient-bg">
              Request Workshop
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}