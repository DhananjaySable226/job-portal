import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import SearchFilter from '@/components/SearchFilter/SearchFilter';
import FreelancerCard, { Freelancer } from '@/components/FreelancerCard/FreelancerCard';
import { Button } from '@/components/ui/button';
import { User, ArrowUp, ArrowDown, Star } from 'lucide-react';

// Mock data
const freelancersData: Freelancer[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    title: "Full Stack Developer",
    rating: 4.9,
    location: "Boston, MA",
    hourlyRate: "45",
    description: "Experienced full-stack developer with expertise in React, Node.js, and MongoDB. I've helped over 50 clients build scalable web applications.",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "TypeScript"],
    totalJobs: 68,
    totalHours: 1240
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    title: "UI/UX Designer",
    rating: 4.8,
    location: "San Francisco, CA",
    hourlyRate: "55",
    description: "Award-winning UI/UX designer with a passion for creating intuitive and beautiful digital experiences.",
    skills: ["Figma", "Adobe XD", "UI Design", "User Research", "Wireframing"],
    totalJobs: 42,
    totalHours: 890
  },
  {
    id: "3",
    name: "Jessica Williams",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    title: "Content Writer & SEO Expert",
    rating: 4.7,
    location: "Austin, TX",
    hourlyRate: "35",
    description: "I help businesses increase organic traffic through high-quality content and SEO optimization strategies.",
    skills: ["Content Writing", "SEO", "Copywriting", "Blog Posts", "Technical Writing"],
    totalJobs: 53,
    totalHours: 1120
  },
  {
    id: "4",
    name: "David Rodriguez",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    title: "Mobile App Developer",
    rating: 4.6,
    location: "Chicago, IL",
    hourlyRate: "60",
    description: "Specialized in creating native iOS and Android applications that deliver exceptional user experiences and performance.",
    skills: ["Swift", "Kotlin", "Flutter", "React Native", "Mobile UI"],
    totalJobs: 37,
    totalHours: 980
  },
  {
    id: "5",
    name: "Emily Thompson",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    title: "Graphic Designer",
    rating: 4.9,
    location: "New York, NY",
    hourlyRate: "40",
    description: "Creative graphic designer with a keen eye for detail and a passion for creating eye-catching visuals for both print and digital media.",
    skills: ["Adobe Photoshop", "Illustrator", "InDesign", "Brand Identity", "Typography"],
    totalJobs: 76,
    totalHours: 1580
  },
  {
    id: "6",
    name: "Jason Lee",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    title: "Digital Marketing Specialist",
    rating: 4.7,
    location: "Miami, FL",
    hourlyRate: "50",
    description: "Results-driven digital marketer specializing in PPC campaigns, social media marketing, and conversion optimization.",
    skills: ["Google Ads", "Facebook Ads", "SEO", "Analytics", "Content Strategy"],
    totalJobs: 58,
    totalHours: 1420
  }
];

type SortOption = 'rating-high' | 'rating-low' | 'hourly-high' | 'hourly-low';

const Freelancers = () => {
  const [searchFilters, setSearchFilters] = useState({
    keyword: '',
    location: '',
    category: '',
    jobType: '',
  });
  const [sortBy, setSortBy] = useState<SortOption>('rating-high');
  
  const handleSearch = (filters: typeof searchFilters) => {
    setSearchFilters(filters);
    console.log('Search with filters:', filters);
  };

  const handleSort = (option: SortOption) => {
    setSortBy(option);
  };

  // This would normally be done with API filtering in a real app
  const filteredFreelancers = freelancersData;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-jobify-indigo py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Find Talented Freelancers
          </h1>
          <p className="text-lg text-blue-100 mb-4 max-w-3xl mx-auto">
            Discover skilled professionals for your next project
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
            <User className="mr-2 text-jobify-blue" />
            <h2 className="text-xl font-semibold text-jobify-dark">
              {filteredFreelancers.length} Freelancers Available
            </h2>
          </div>
          
          <div className="flex items-center">
            <span className="mr-2 text-gray-600 hidden sm:inline">Sort by:</span>
            <div className="flex space-x-2">
              <Button 
                variant={sortBy === 'rating-high' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => handleSort('rating-high')}
                className={sortBy === 'rating-high' ? 'bg-jobify-blue' : ''}
              >
                Rating <ArrowUp className="ml-1 h-4 w-4" />
              </Button>
              <Button 
                variant={sortBy === 'hourly-high' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => handleSort('hourly-high')}
                className={sortBy === 'hourly-high' ? 'bg-jobify-blue' : ''}
              >
                Hourly Rate <ArrowUp className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Freelancer Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredFreelancers.map(freelancer => (
            <FreelancerCard key={freelancer.id} freelancer={freelancer} />
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

export default Freelancers;
