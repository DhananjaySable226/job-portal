import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import SearchFilter from '@/components/SearchFilter/SearchFilter';
import JobCard, { Job } from '@/components/JobCard/JobCard';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Clock, ArrowUp, ArrowDown } from 'lucide-react';

// Mock data
const jobsData: Job[] = [
  {
    id: "1",
    title: "Web Developer",
    company: "TechSolutions Inc.",
    location: "New York, NY",
    type: "Full-time",
    salary: "$60,000 - $80,000",
    description: "We are looking for an experienced web developer to join our team and help us build amazing websites and applications for our clients.",
    posted: "2 days ago",
    deadline: "July 15, 2023",
    skills: ["JavaScript", "React", "Node.js", "HTML/CSS"]
  },
  {
    id: "2",
    title: "Graphic Designer",
    company: "Creative Studios",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$25 - $35/hr",
    description: "Join our creative team to design stunning visual assets for our marketing campaigns and client projects.",
    posted: "3 days ago",
    deadline: "July 20, 2023",
    skills: ["Photoshop", "Illustrator", "InDesign", "UI/UX"]
  },
  {
    id: "3",
    title: "Marketing Specialist",
    company: "Growth Partners",
    location: "Chicago, IL (Remote)",
    type: "Contract",
    salary: "$40 - $50/hr",
    description: "Help us develop and execute marketing strategies that drive growth and engagement for our business clients.",
    posted: "1 week ago",
    deadline: "July 25, 2023",
    skills: ["Social Media", "SEO", "Content Marketing", "Analytics"]
  },
  {
    id: "4",
    title: "Content Writer",
    company: "WordCraft Publishing",
    location: "Remote",
    type: "Freelance",
    salary: "$30 - $40/hr",
    description: "Looking for a creative content writer who can produce high-quality blog posts, articles, and web content for our diverse client base.",
    posted: "1 week ago",
    deadline: "August 1, 2023",
    skills: ["Content Writing", "SEO", "Copywriting", "Research"]
  },
  {
    id: "5",
    title: "Mobile App Developer",
    company: "AppNova Technologies",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    description: "Join our development team to create cutting-edge mobile applications for iOS and Android platforms.",
    posted: "4 days ago",
    deadline: "July 30, 2023",
    skills: ["Swift", "Kotlin", "Flutter", "React Native", "Firebase"]
  },
  {
    id: "6",
    title: "Social Media Manager",
    company: "Digital Connect",
    location: "Miami, FL",
    type: "Part-time",
    salary: "$20 - $30/hr",
    description: "We're seeking a social media expert to manage and grow our clients' presence across multiple social platforms.",
    posted: "5 days ago",
    deadline: "July 22, 2023",
    skills: ["Social Media", "Content Creation", "Analytics", "Campaign Management"]
  }
];

type SortOption = 'latest' | 'oldest' | 'salary-high' | 'salary-low';

const Jobs = () => {
  const [searchFilters, setSearchFilters] = useState({
    keyword: '',
    location: '',
    category: '',
    jobType: '',
  });
  const [sortBy, setSortBy] = useState<SortOption>('latest');
  
  const handleSearch = (filters: typeof searchFilters) => {
    setSearchFilters(filters);
    console.log('Search with filters:', filters);
  };

  const handleSort = (option: SortOption) => {
    setSortBy(option);
  };

  // This would normally be done with API filtering in a real app
  const filteredJobs = jobsData;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-jobify-indigo py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Find The Perfect Job
          </h1>
          <p className="text-lg text-blue-100 mb-4 max-w-3xl mx-auto">
            Discover opportunities that match your skills and career goals
          </p>
        </div>
      </section>

      {/* Search Filter */}
      <section className="max-w-6xl mx-auto px-4 -mt-6 mb-8">
        <SearchFilter onSearch={handleSearch} />
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4 mb-12">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Briefcase className="mr-2 text-jobify-blue" />
            <h2 className="text-xl font-semibold text-jobify-dark">
              {filteredJobs.length} Jobs Available
            </h2>
          </div>
          
          <div className="flex items-center">
            <span className="mr-2 text-gray-600 hidden sm:inline">Sort by:</span>
            <div className="flex space-x-2">
              <Button 
                variant={sortBy === 'latest' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => handleSort('latest')}
                className={sortBy === 'latest' ? 'bg-jobify-blue' : ''}
              >
                Newest <Clock className="ml-1 h-4 w-4" />
              </Button>
              <Button 
                variant={sortBy === 'salary-high' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => handleSort('salary-high')}
                className={sortBy === 'salary-high' ? 'bg-jobify-blue' : ''}
              >
                Salary <ArrowUp className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-10 flex justify-center">
          <div className="flex space-x-2">
            <Button disabled variant="outline">Previous</Button>
            <Button className="bg-jobify-blue">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Jobs;
