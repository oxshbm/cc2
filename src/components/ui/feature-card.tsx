import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  children, 
  className = '',
  onClick 
}: FeatureCardProps) {
  const CardWrapper = ({ children: cardChildren }: { children: ReactNode }) => {
    if (href) {
      return (
        <a href={href} className="block">
          {cardChildren}
        </a>
      );
    }
    return <div onClick={onClick}>{cardChildren}</div>;
  };

  return (
    <CardWrapper>
      <Card className={`bg-gradient-card hover:shadow-medium transition-all duration-300 hover:scale-105 cursor-pointer ${className}`}>
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        {children && (
          <CardContent className="pt-0">
            {children}
          </CardContent>
        )}
      </Card>
    </CardWrapper>
  );
}