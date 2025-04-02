import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  posted: string;
  deadline: string;
  skills: string[];
}

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="card hover:border-jobify-blue">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold text-lg text-jobify-dark">{job.title}</h3>
          <p className="text-gray-600 mt-1">{job.company}</p>
        </div>
        <Badge variant="outline" className="h-fit bg-blue-50 text-jobify-blue border-jobify-blue">
          {job.type}
        </Badge>
      </div>
      
      <div className="flex flex-wrap gap-4 mt-4 text-gray-500 text-sm">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1 text-gray-400" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center">
          <DollarSign className="h-4 w-4 mr-1 text-gray-400" />
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1 text-gray-400" />
          <span>Posted {job.posted}</span>
        </div>
      </div>
      
      <p className="mt-4 text-gray-600 line-clamp-2">{job.description}</p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {job.skills.slice(0, 3).map((skill, index) => (
          <Badge variant="secondary" key={index} className="bg-gray-100 text-gray-600">
            {skill}
          </Badge>
        ))}
        {job.skills.length > 3 && (
          <Badge variant="secondary" className="bg-gray-100 text-gray-600">
            +{job.skills.length - 3} more
          </Badge>
        )}
      </div>
      
      <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
        <p className="text-sm text-gray-500">
          <span className="font-medium">Deadline:</span> {job.deadline}
        </p>
        <Button asChild className="bg-jobify-blue hover:bg-blue-600">
          <Link to={`/jobs/${job.id}`}>Apply Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
