import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Search,
  MapPin,
  Building,
  Calendar,
  MessageSquare,
  Star,
  Filter,
  UserCheck,
  Briefcase
} from 'lucide-react';

const alumni = [
  {
    id: 1,
    name: 'Jennifer Williams',
    initials: 'JW',
    title: 'Senior Software Engineer',
    company: 'Google',
    location: 'San Francisco, CA',
    graduationYear: '2018',
    degree: 'Computer Science',
    specialties: ['Machine Learning', 'Backend Development', 'System Design'],
    bio: 'Passionate about ML and distributed systems. Love mentoring students and helping them break into tech.',
    rating: 4.9,
    totalMentored: 25,
    isAvailable: true,
  },
  {
    id: 2,
    name: 'David Chen',
    initials: 'DC',
    title: 'Investment Banking VP',
    company: 'Goldman Sachs',
    location: 'New York, NY',
    graduationYear: '2016',
    degree: 'Finance',
    specialties: ['Investment Banking', 'Financial Modeling', 'M&A'],
    bio: 'Finance professional with experience in M&A and capital markets. Happy to share insights on finance careers.',
    rating: 4.8,
    totalMentored: 18,
    isAvailable: true,
  },
  {
    id: 3,
    name: 'Sarah Martinez',
    initials: 'SM',
    title: 'Product Manager',
    company: 'Microsoft',
    location: 'Seattle, WA',
    graduationYear: '2019',
    degree: 'Business Administration',
    specialties: ['Product Strategy', 'User Research', 'Agile'],
    bio: 'Product leader focused on user-centric design and data-driven decisions. Love helping students transition to PM roles.',
    rating: 4.9,
    totalMentored: 32,
    isAvailable: false,
  },
  {
    id: 4,
    name: 'Dr. Michael Thompson',
    initials: 'MT',
    title: 'Research Scientist',
    company: 'Pfizer',
    location: 'Boston, MA',
    graduationYear: '2015',
    degree: 'Biochemistry',
    specialties: ['Drug Discovery', 'Research', 'Pharmaceutical'],
    bio: 'Research scientist in drug discovery. Passionate about advancing healthcare through innovative research.',
    rating: 4.7,
    totalMentored: 12,
    isAvailable: true,
  },
  {
    id: 5,
    name: 'Lisa Park',
    initials: 'LP',
    title: 'Marketing Director',
    company: 'Nike',
    location: 'Portland, OR',
    graduationYear: '2017',
    degree: 'Marketing',
    specialties: ['Brand Strategy', 'Digital Marketing', 'Campaign Management'],
    bio: 'Creative marketing professional with a passion for brand storytelling and consumer insights.',
    rating: 4.8,
    totalMentored: 21,
    isAvailable: true,
  },
];

const industries = ['All', 'Technology', 'Finance', 'Healthcare', 'Marketing', 'Consulting'];
const graduationYears = ['All', '2015-2017', '2018-2020', '2021-2023'];

export default function Alumni() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const filteredAlumni = alumni.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesAvailability = !showAvailableOnly || person.isAvailable;
    
    return matchesSearch && matchesAvailability;
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Alumni Network</h1>
          <p className="text-muted-foreground">
            Connect with successful alumni for career guidance, mentorship, and networking
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card p-6 rounded-lg shadow-soft mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, company, or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2 border border-input rounded-md bg-background"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-input rounded-md bg-background"
              >
                {graduationYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showAvailableOnly}
                onChange={(e) => setShowAvailableOnly(e.target.checked)}
                className="rounded border-gray-300"
              />
              <span className="text-sm text-muted-foreground">Show only available for mentorship</span>
            </label>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredAlumni.map((person) => (
            <Card key={person.id} className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4">
                  <AvatarFallback className="text-xl font-semibold bg-primary/10 text-primary">
                    {person.initials}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{person.name}</CardTitle>
                <CardDescription className="space-y-1">
                  <div className="flex items-center justify-center text-sm">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {person.title}
                  </div>
                  <div className="flex items-center justify-center text-sm">
                    <Building className="h-4 w-4 mr-1" />
                    {person.company}
                  </div>
                  <div className="flex items-center justify-center text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {person.location}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Class of {person.graduationYear}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-warning" />
                      {person.rating}
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-3">
                    {person.degree}
                  </Badge>
                </div>

                <div className="text-sm text-muted-foreground text-center">
                  <p className="line-clamp-3">{person.bio}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-1">
                  {person.specialties.slice(0, 3).map((specialty, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <UserCheck className="h-4 w-4 mr-1" />
                    Mentored {person.totalMentored} students
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <Button 
                    variant={person.isAvailable ? "default" : "secondary"}
                    size="sm" 
                    className="flex-1"
                    disabled={!person.isAvailable}
                  >
                    {person.isAvailable ? 'Request Mentorship' : 'Unavailable'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <UserCheck className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">
              No alumni found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria to find more alumni.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}