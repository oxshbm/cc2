import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, MessageCircle, ArrowRight, Star, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import campusHero from '@/assets/campus-hero.jpg';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${campusHero})` }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Connect. Collaborate. <br />
              <span className="text-accent">Grow Together.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Campus Connect brings students, alumni, and mentors together for learning, 
              collaboration, and career growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="hero" size="xl" className="group">
                  Join Campus Connect
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute bottom-32 right-16 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
            <Users className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute top-1/3 right-20 animate-bounce" style={{ animationDelay: '2s' }}>
          <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
            <MessageCircle className="h-7 w-7 text-white" />
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-primary-light/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with peers, learn from alumni, collaborate on projects, and grow your network.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Study Groups</h3>
              <p className="text-muted-foreground">
                Join study groups, collaborate on assignments, and learn together with your peers.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Q&A Platform</h3>
              <p className="text-muted-foreground">
                Ask questions, share knowledge, and get help from the community.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Alumni Network</h3>
              <p className="text-muted-foreground">
                Connect with alumni for career guidance, mentorship, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of students already connecting and growing together.
          </p>
          <Link to="/register">
            <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
