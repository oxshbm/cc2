import { Layout } from '@/components/layout/Layout';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, Clock, MapPin, Users, Star } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Tech Career Fair 2024",
    date: "2024-09-20",
    time: "10:00 AM - 4:00 PM",
    location: "Main Campus Auditorium",
    type: "Career",
    attendees: 245,
    maxAttendees: 300,
    rating: 4.8,
    description: "Connect with top tech companies and explore exciting career opportunities in software development, AI, and cybersecurity.",
    organizer: "Career Services Department",
    tags: ["Career", "Technology", "Networking"],
    featured: true
  },
  {
    id: 2,
    title: "Alumni Networking Mixer",
    date: "2024-09-25",
    time: "6:00 PM - 9:00 PM",
    location: "University Club",
    type: "Networking",
    attendees: 89,
    maxAttendees: 120,
    rating: 4.6,
    description: "Meet successful alumni from various industries and build meaningful professional connections.",
    organizer: "Alumni Association",
    tags: ["Alumni", "Networking", "Professional"],
    featured: false
  },
  {
    id: 3,
    title: "Startup Pitch Competition",
    date: "2024-09-28",
    time: "1:00 PM - 5:00 PM",
    location: "Innovation Hub",
    type: "Competition",
    attendees: 156,
    maxAttendees: 200,
    rating: 4.9,
    description: "Watch student entrepreneurs pitch their innovative ideas and compete for funding opportunities.",
    organizer: "Entrepreneurship Center",
    tags: ["Startup", "Competition", "Innovation"],
    featured: true
  },
  {
    id: 4,
    title: "Research Symposium",
    date: "2024-10-05",
    time: "9:00 AM - 3:00 PM",
    location: "Science Building",
    type: "Academic",
    attendees: 78,
    maxAttendees: 150,
    rating: 4.7,
    description: "Explore cutting-edge research presentations from faculty and graduate students across disciplines.",
    organizer: "Graduate School",
    tags: ["Research", "Academic", "Science"],
    featured: false
  }
];

const eventTypes = ["All", "Career", "Networking", "Competition", "Academic", "Social", "Workshop"];

export default function Events() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">Campus Events</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover and participate in exciting events happening on campus
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                className="pl-10 bg-card/50"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {eventTypes.map((type) => (
                <Button
                  key={type}
                  variant={type === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Events */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Featured Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.filter(event => event.featured).map((event) => (
                <Card key={event.id} className="glass-card hover:shadow-elegant transition-all duration-300 group border-primary/20">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="default">{event.type}</Badge>
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                      {event.title}
                    </CardTitle>
                    <CardDescription>
                      Organized by {event.organizer}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees}/{event.maxAttendees}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{event.rating}</span>
                      <div className="flex flex-wrap gap-1 ml-auto">
                        {event.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full gradient-bg">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Events */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">All Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="glass-card hover:shadow-elegant transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{event.type}</Badge>
                      {event.featured && <Badge variant="outline">Featured</Badge>}
                    </div>
                    <CardTitle className="text-lg group-hover:gradient-text transition-all duration-300">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      by {event.organizer}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {event.description}
                    </p>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees}/{event.maxAttendees}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm font-medium">{event.rating}</span>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Calendar View Toggle */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Calendar className="h-4 w-4 mr-2" />
              Switch to Calendar View
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}