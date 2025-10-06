import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  MessageCircle, 
  Search, 
  Plus, 
  ThumbsUp, 
  MessageSquare,
  Clock,
  Tag,
  TrendingUp
} from 'lucide-react';

const questions = [
  {
    id: 1,
    title: 'How to optimize time complexity in sorting algorithms?',
    content: 'I\'m struggling with understanding when to use different sorting algorithms and their time complexities. Can someone explain the trade-offs?',
    author: 'Sarah Chen',
    authorInitials: 'SC',
    subject: 'Computer Science',
    tags: ['Algorithms', 'Sorting', 'Time Complexity'],
    upvotes: 15,
    answers: 8,
    timeAgo: '2 hours ago',
    isAnswered: true,
  },
  {
    id: 2,
    title: 'Integration by parts - when to use which method?',
    content: 'I understand the formula for integration by parts, but I\'m having trouble deciding which function to choose as u and which as dv.',
    author: 'Mike Johnson',
    authorInitials: 'MJ',
    subject: 'Mathematics',
    tags: ['Calculus', 'Integration', 'Techniques'],
    upvotes: 23,
    answers: 12,
    timeAgo: '4 hours ago',
    isAnswered: true,
  },
  {
    id: 3,
    title: 'Best practices for financial statement analysis?',
    content: 'What are the key ratios and metrics I should focus on when analyzing a company\'s financial statements for investment decisions?',
    author: 'Emma Davis',
    authorInitials: 'ED',
    subject: 'Business',
    tags: ['Finance', 'Analysis', 'Investment'],
    upvotes: 31,
    answers: 5,
    timeAgo: '6 hours ago',
    isAnswered: false,
  },
  {
    id: 4,
    title: 'Electron configuration exceptions - transition metals',
    content: 'Why do some transition metals have unexpected electron configurations? How do I predict these exceptions?',
    author: 'Alex Rivera',
    authorInitials: 'AR',
    subject: 'Chemistry',
    tags: ['Chemistry', 'Electrons', 'Transition Metals'],
    upvotes: 18,
    answers: 6,
    timeAgo: '1 day ago',
    isAnswered: true,
  },
];

const trendingTags = [
  'Algorithms', 'Calculus', 'Finance', 'Chemistry', 'Physics', 'Business Strategy', 'Data Structures', 'Statistics'
];

export default function Questions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         question.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || question.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const subjects = ['all', ...Array.from(new Set(questions.map(q => q.subject)))];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">Q&A Forum</h1>
            <p className="text-muted-foreground">
              Ask questions, share knowledge, and help your peers succeed
            </p>
          </div>
          <Button variant="hero" className="mt-4 md:mt-0">
            <Plus className="h-4 w-4 mr-2" />
            Ask Question
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search questions..."
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
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-input rounded-md bg-background"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="unanswered">Unanswered</option>
                </select>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {filteredQuestions.map((question) => (
                <Card key={question.id} className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{question.subject}</Badge>
                          {question.isAnswered && (
                            <Badge variant="default" className="bg-success text-white">
                              Answered
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg hover:text-primary transition-colors">
                          {question.title}
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-2">
                          {question.content}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1 mb-4">
                      {question.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {question.upvotes}
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {question.answers} answers
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {question.timeAgo}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">{question.authorInitials}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">{question.author}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Trending Tags */}
            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Trending Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {trendingTags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Questions</span>
                  <span className="font-semibold">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Answered Today</span>
                  <span className="font-semibold text-success">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Members</span>
                  <span className="font-semibold">342</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}