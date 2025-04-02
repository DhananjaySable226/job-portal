import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import SearchFilter from '@/components/SearchFilter/SearchFilter';
import JobCard, { Job } from '@/components/JobCard/JobCard';
import FreelancerCard, { Freelancer } from '@/components/FreelancerCard/FreelancerCard';
import { ArrowRight, BriefcaseBusiness, TrendingUp, ShieldCheck, Clock, Award } from 'lucide-react';

// Mock data
const featuredJobs: Job[] = [
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
  }
];

const topFreelancers: Freelancer[] = [
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
  }
];

const Index = () => {
  const [searchFilters, setSearchFilters] = useState({
    keyword: '',
    location: '',
    category: '',
    jobType: '',
  });

  const handleSearch = (filters: typeof searchFilters) => {
    setSearchFilters(filters);
    console.log('Search with filters:', filters);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-jobify-indigo py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Local Talent or Work for Your Next Project
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Connect with local businesses and freelancers for short-term work opportunities that make a difference in your community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-jobify-blue hover:bg-gray-100" asChild>
              <Link to="/jobs">Find Jobs</Link>
            </Button>
            <Button size="lg" className="bg-jobify-indigo hover:bg-indigo-500" asChild>
              <Link to="/freelancers">Hire Freelancers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-6xl mx-auto px-4 -mt-8">
        <SearchFilter onSearch={handleSearch} />
      </section>

      {/* Featured Jobs Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-jobify-dark">Featured Jobs</h2>
            <Button variant="ghost" className="text-jobify-blue" asChild>
              <Link to="/jobs" className="flex items-center">
                View All Jobs <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-jobify-dark mb-2">How It Works</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our platform makes it easy to connect local talent with businesses in need
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <BriefcaseBusiness className="h-8 w-8 text-jobify-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Post a Job</h3>
              <p className="text-gray-600">
                Create a detailed job listing describing your project needs and budget.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-jobify-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect with Talent</h3>
              <p className="text-gray-600">
                Review proposals from qualified freelancers and choose the perfect match.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <ShieldCheck className="h-8 w-8 text-jobify-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Work Securely</h3>
              <p className="text-gray-600">
                Collaborate confidently with payment protection and dedicated support.
              </p>
            </div>
          </div>
          
          <Button className="mt-10 bg-jobify-blue hover:bg-blue-600" asChild>
            <Link to="/how-it-works">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Top Freelancers Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-jobify-dark">Top Freelancers</h2>
            <Button variant="ghost" className="text-jobify-blue" asChild>
              <Link to="/freelancers" className="flex items-center">
                View All Freelancers <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topFreelancers.map(freelancer => (
              <FreelancerCard key={freelancer.id} freelancer={freelancer} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-4 bg-jobify-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">Why Choose Jobify</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              We provide the best platform for connecting local talent with businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <TrendingUp className="h-10 w-10 text-jobify-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Focus</h3>
              <p className="text-gray-300">
                Support your local economy by hiring talent from your community.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="h-10 w-10 text-jobify-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-300">
                Our payment protection ensures you only pay for work you approve.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Award className="h-10 w-10 text-jobify-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Talent</h3>
              <p className="text-gray-300">
                Access skilled professionals with verified reviews and portfolios.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Clock className="h-10 w-10 text-jobify-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Matching</h3>
              <p className="text-gray-300">
                Our algorithm helps you find the perfect match for your project quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-jobify-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of businesses and freelancers who are already using Jobify to find work and hire talent.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-jobify-blue hover:bg-gray-100" asChild>
              <Link to="/signup">Create an Account</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-600" asChild>
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
