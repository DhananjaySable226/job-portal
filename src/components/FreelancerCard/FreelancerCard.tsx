import { Badge } from '@/components/ui/badge';
import { Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avtar';
import { Link } from 'react-router-dom';

export interface Freelancer {
  id: string;
  name: string;
  avatar: string;
  title: string;
  rating: number;
  location: string;
  hourlyRate: string;
  description: string;
  skills: string[];
  totalJobs: number;
  totalHours: number;
}

interface FreelancerCardProps {
  freelancer: Freelancer;
}

const FreelancerCard = ({ freelancer }: FreelancerCardProps) => {
  return (
    <div className="card hover:border-jobify-blue">
      <div className="flex items-start gap-4">
        <Avatar className="h-14 w-14">
          <AvatarImage src={freelancer.avatar} alt={freelancer.name} />
          <AvatarFallback>{freelancer.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg text-jobify-dark">{freelancer.name}</h3>
              <p className="text-gray-600">{freelancer.title}</p>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-medium">{freelancer.rating.toFixed(1)}</span>
            </div>
          </div>
          
          <div className="flex items-center mt-1 text-gray-500 text-sm">
            <MapPin className="h-4 w-4 mr-1 text-gray-400" />
            <span>{freelancer.location}</span>
          </div>
          
          <p className="mt-3 text-gray-600 line-clamp-2">{freelancer.description}</p>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {freelancer.skills.slice(0, 4).map((skill, index) => (
          <Badge variant="secondary" key={index} className="bg-gray-100 text-gray-600">
            {skill}
          </Badge>
        ))}
        {freelancer.skills.length > 4 && (
          <Badge variant="secondary" className="bg-gray-100 text-gray-600">
            +{freelancer.skills.length - 4} more
          </Badge>
        )}
      </div>
      
      <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm">
          <p className="text-gray-500">
            <span className="font-medium">{freelancer.totalJobs}</span> Jobs
          </p>
          <p className="text-gray-500">
            <span className="font-medium">{freelancer.totalHours}</span> Hours
          </p>
          <p className="text-jobify-blue font-medium">
            ${freelancer.hourlyRate}/hr
          </p>
        </div>
        <Button asChild className="bg-jobify-blue hover:bg-blue-600">
          <Link to={`/freelancers/${freelancer.id}`}>View Profile</Link>
        </Button>
      </div>
    </div>
  );
};

export default FreelancerCard;
