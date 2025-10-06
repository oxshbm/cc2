import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Search, 
  Plus, 
  Calendar, 
  MapPin, 
  Clock,
  BookOpen,
  Filter
} from 'lucide-react';

const studyGroups = [
  {
    id: 1,
    name: 'Data Structures & Algorithms',
    description: 'Weekly study sessions for DSA concepts and problem solving',
    subject: 'Computer Science',
    members: 12,
    maxMembers: 15,
    schedule: 'Tuesdays & Thursdays, 7:00 PM',
    location: 'Library Room 204',
    tags: ['Programming', 'Algorithms', 'Interview Prep'],
    nextMeeting: '2024-12-10',
  },
  {
    id: 2,
    name: 'Calculus Mastery',
    description: 'Group study for Calculus I and II concepts with practice problems',
    subject: 'Mathematics',
    members: 8,
    maxMembers: 12,
    schedule: 'Mondays & Wednesdays, 6:00 PM',
    location: 'Math Building 105',
    tags: ['Calculus', 'Problem Solving', 'Exam Prep'],
    nextMeeting: '2024-12-09',
  },
  {
    id: 3,
    name: 'Business Strategy Analysis',
    description: 'Case study discussions and strategy frameworks for business students',
    subject: 'Business',
    members: 10,
    maxMembers: 10,
    schedule: 'Fridays, 4:00 PM',
    location: 'Business Center 301',
    tags: ['Strategy', 'Case Studies', 'MBA Prep'],
    nextMeeting: '2024-12-13',
    isFull: true,
  },
  {
    id: 4,
    name: 'Organic Chemistry Lab Prep',
    description: 'Pre-lab discussions and concept review for organic chemistry',
    subject: 'Chemistry',
    members: 6,
    maxMembers: 8,
    schedule: 'Sundays, 2:00 PM',
    location: 'Chemistry Lab 201',
    tags: ['Chemistry', 'Lab Work', 'Organic'],
    nextMeeting: '2024-12-15',
  },
];

export default function StudyGroups() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const filteredGroups = studyGroups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || group.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const subjects = ['all', ...Array.from(new Set(studyGroups.map(group => group.subject)))];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">Study Groups</h1>
            <p className="text-muted-foreground">
              Join study groups or create your own to collaborate with peers
            </p>
          </div>
          <Button variant="hero" className="mt-4 md:mt-0">
            <Plus className="h-4 w-4 mr-2" />
            Create Group
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search study groups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-2 border border-input rounded-md bg-background"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>
                  {subject === 'all' ? 'All Subjects' : subject}
                </option>
              ))}
            </select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Study Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <Card key={group.id} className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="secondary" className="mb-2">
                    {group.subject}
                  </Badge>
                  {group.isFull && (
                    <Badge variant="destructive" className="text-xs">
                      Full
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{group.name}</CardTitle>
                <CardDescription className="text-sm">
                  {group.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {group.members}/{group.maxMembers} members
                  </div>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${(group.members / group.maxMembers) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{group.schedule}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{group.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>Next: {new Date(group.nextMeeting).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {group.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant={group.isFull ? "outline" : "default"} 
                  className="w-full"
                  disabled={group.isFull}
                >
                  {group.isFull ? 'Join Waitlist' : 'Join Group'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredGroups.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">
              No study groups found
            </h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or create a new study group.
            </p>
            <Button variant="default">
              <Plus className="h-4 w-4 mr-2" />
              Create New Group
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}