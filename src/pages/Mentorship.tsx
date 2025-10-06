import { Layout } from '@/components/layout/Layout';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Star, MapPin, Briefcase, GraduationCap, Clock, MessageCircle } from 'lucide-react';

const mentors = [
  {
    id: 1,
    name: "Dr. Jennifer Martinez",
    title: "Senior Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    expertise: ["Software Engineering", "Machine Learning", "Career Development"],
    rating: 4.9,
    reviews: 45,
    sessions: 120,
    experience: "8+ years",
    education: "PhD Computer Science - Stanford",
    languages: ["English", "Spanish"],
    timezone: "PST",
    availability: "Weekends",
    price: 0, // Free mentorship
    description: "Passionate about helping students transition into tech careers. Specialized in AI/ML and software architecture.",
    featured: true
  },
  {
    id: 2,
    name: "Michael Thompson",
    title: "Product Manager",
    company: "Meta",
    location: "Seattle, WA",
    expertise: ["Product Management", "Strategy", "Leadership"],
    rating: 4.8,
    reviews: 38,
    sessions: 95,
    experience: "6+ years",
    education: "MBA - Wharton, BS Engineering - MIT",
    languages: ["English"],
    timezone: "PST",
    availability: "Evenings",
    price: 50,
    description: "Former engineer turned PM. Help students understand product thinking and career pivots in tech.",
    featured: true
  },
  {
    id: 3,
    name: "Sarah Kim",
    title: "UX Design Director",
    company: "Adobe",
    location: "San Francisco, CA",
    expertise: ["UX Design", "Design Systems", "User Research"],
    rating: 4.9,
    reviews: 52,
    sessions: 140,
    experience: "10+ years",
    education: "MFA Design - RISD, BS Psychology - UCLA",
    languages: ["English", "Korean"],
    timezone: "PST",
    availability: "Flexible",
    price: 75,
    description: "Award-winning designer with expertise in enterprise and consumer products. Mentored 50+ junior designers.",
    featured: false
  },
  {
    id: 4,
    name: "David Chen",
    title: "Data Science Manager",
    company: "Netflix",
    location: "Los Gatos, CA",
    expertise: ["Data Science", "Analytics", "Team Leadership"],
    rating: 4.7,
    reviews: 29,
    sessions: 78,
    experience: "7+ years",
    education: "MS Statistics - UC Berkeley, BS Math - Caltech",
    languages: ["English", "Mandarin"],
    timezone: "PST",
    availability: "Weekends",
    price: 0,
    description: "Building recommendation systems and leading data teams. Love helping students break into data science.",
    featured: false
  }
];

const expertiseAreas = ["All", "Software Engineering", "Data Science", "Product Management", "UX Design", "Marketing", "Finance"];
const companies = ["All", "Google", "Meta", "Apple", "Netflix", "Adobe", "Amazon"];

export default function Mentorship() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">Find Your Mentor</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with industry professionals and alumni to accelerate your career growth
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search mentors..."
                className="pl-10 bg-card/50"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="flex gap-1">
                {expertiseAreas.map((area) => (
                  <Button
                    key={area}
                    variant={area === "All" ? "default" : "outline"}
                    size="sm"
                    className="text-xs"
                  >
                    {area}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="flex gap-1">
                {companies.map((company) => (
                  <Button
                    key={company}
                    variant={company === "All" ? "secondary" : "outline"}
                    size="sm"
                    className="text-xs"
                  >
                    {company}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Mentors */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Featured Mentors</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mentors.filter(mentor => mentor.featured).map((mentor) => (
                <Card key={mentor.id} className="glass-card hover:shadow-elegant transition-all duration-300 group border-primary/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                          {mentor.name}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {mentor.title} at {mentor.company}
                        </CardDescription>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{mentor.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span>{mentor.rating} ({mentor.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {mentor.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Briefcase className="h-4 w-4" />
                          <span>{mentor.experience}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <GraduationCap className="h-4 w-4" />
                          <span className="line-clamp-1">{mentor.education}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{mentor.availability}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MessageCircle className="h-4 w-4" />
                          <span>{mentor.sessions} sessions</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {mentor.expertise.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-lg font-bold">
                        {mentor.price === 0 ? (
                          <span className="text-green-600">Free</span>
                        ) : (
                          <span>${mentor.price}/session</span>
                        )}
                      </div>
                      <Button className="gradient-bg">
                        Request Mentorship
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Mentors Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">All Mentors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentors.map((mentor) => (
                <Card key={mentor.id} className="glass-card hover:shadow-elegant transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="text-xs">{mentor.company}</Badge>
                      {mentor.featured && <Badge variant="outline" className="text-xs">Featured</Badge>}
                    </div>
                    <CardTitle className="text-lg group-hover:gradient-text transition-all duration-300">
                      {mentor.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {mentor.title}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {mentor.description}
                    </p>

                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{mentor.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-primary text-primary" />
                        <span>{mentor.rating} ({mentor.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        <span>{mentor.sessions} sessions</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {mentor.expertise.slice(0, 2).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {mentor.expertise.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{mentor.expertise.length - 2}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="text-sm font-bold">
                        {mentor.price === 0 ? (
                          <span className="text-green-600">Free</span>
                        ) : (
                          <span>${mentor.price}</span>
                        )}
                      </div>
                      <Button size="sm" variant="outline">
                        Connect
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Become a Mentor CTA */}
          <div className="text-center mt-16 p-8 glass-card">
            <h2 className="text-2xl font-bold mb-4">Become a Mentor</h2>
            <p className="text-muted-foreground mb-6">
              Share your expertise and help the next generation of professionals grow
            </p>
            <Button size="lg" className="gradient-bg">
              Apply as Mentor
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}