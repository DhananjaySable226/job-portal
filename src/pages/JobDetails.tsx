import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Clock, DollarSign, Building, Share2, BookmarkPlus, ListChecks, Calendar, User, Award, Briefcase } from 'lucide-react';
import { Job } from '@/components/JobCard/JobCard';

// Mock job data (in a real app, you'd fetch this from an API)
const jobsData: Record<string, Job> = {
  "1": {
    id: "1",
    title: "Web Developer",
    company: "TechSolutions Inc.",
    location: "New York, NY",
    type: "Full-time",
    salary: "$60,000 - $80,000",
    description: "We are looking for an experienced web developer to join our team and help us build amazing websites and applications for our clients. The ideal candidate will have strong knowledge of JavaScript, React, and Node.js, and be passionate about creating user-friendly web experiences.\n\nAs a Web Developer at TechSolutions, you will be responsible for designing and implementing new features and functionality, maintaining and improving existing codebase, and collaborating with the design and product teams to ensure we deliver high-quality solutions to our clients.",
    posted: "2 days ago",
    deadline: "July 15, 2023",
    skills: ["JavaScript", "React", "Node.js", "HTML/CSS", "Git", "RESTful APIs"]
  }
};

interface CompanyInfo {
  name: string;
  website: string;
  industry: string;
  founded: string;
  employees: string;
  location: string;
  about: string;
}

// Mock company data
const companyInfo: CompanyInfo = {
  name: "TechSolutions Inc.",
  website: "www.techsolutions.com",
  industry: "Information Technology",
  founded: "2015",
  employees: "50-100",
  location: "New York, NY",
  about: "TechSolutions Inc. is a leading web development company specializing in creating innovative digital solutions for businesses of all sizes. We help our clients transform their ideas into functional, user-friendly websites and applications that drive growth and engagement."
};

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isApplying, setIsApplying] = useState(false);
  
  // In a real app, you'd fetch the job data based on the ID
  const job = jobsData[id || "1"]; // Fallback to first job if ID not found
  
  if (!job) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Not Found</h2>
          <p className="text-gray-600">The job listing you're looking for doesn't exist or has been removed.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Job Header */}
            <Card>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold text-jobify-dark mb-2">{job.title}</h1>
                    <div className="text-gray-600 mb-2">at {job.company}</div>
                    
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
                  </div>
                  
                  <Badge variant="outline" className="h-fit bg-blue-50 text-jobify-blue border-jobify-blue">
                    {job.type}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-4">
                  <Button className="bg-jobify-blue hover:bg-blue-600" onClick={() => setIsApplying(true)}>
                    Apply Now
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <BookmarkPlus size={16} />
                    Save
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Share2 size={16} />
                    Share
                  </Button>
                </div>
              </CardHeader>
            </Card>
            
            {/* Job Tabs */}
            <Tabs defaultValue="description" className="mt-6">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="company">Company</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description">
                <Card>
                  <CardHeader>
                    <CardTitle>Job Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p className="text-gray-700 whitespace-pre-line">
                        {job.description}
                      </p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-2">Responsibilities:</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Develop new user-facing features using React.js</li>
                        <li>Build reusable components and libraries for future use</li>
                        <li>Translate designs and wireframes into high-quality code</li>
                        <li>Optimize components for maximum performance</li>
                        <li>Coordinate with the rest of the team working on different layers of the infrastructure</li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-2">Benefits:</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Competitive salary package</li>
                        <li>Flexible working hours</li>
                        <li>Remote work options</li>
                        <li>Health insurance</li>
                        <li>Professional development opportunities</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="requirements">
                <Card>
                  <CardHeader>
                    <CardTitle>Job Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <h3 className="text-lg font-semibold mb-2">Qualifications:</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Bachelor's degree in Computer Science, Engineering, or a related field</li>
                        <li>3+ years of experience in web development</li>
                        <li>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model</li>
                        <li>Thorough understanding of React.js and its core principles</li>
                        <li>Experience with popular React workflows such as Redux or Context API</li>
                        <li>Familiarity with newer specifications of ECMAScript</li>
                        <li>Experience with data structure libraries such as Immutable.js</li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-2">Skills:</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {job.skills.map((skill, index) => (
                          <Badge variant="secondary" key={index} className="bg-gray-100 text-gray-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-2">Preferred Skills:</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Experience with testing frameworks such as Jest or Mocha</li>
                        <li>Knowledge of modern authorization mechanisms, such as OAuth 2.0</li>
                        <li>Familiarity with continuous integration</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="company">
                <Card>
                  <CardHeader>
                    <CardTitle>About {companyInfo.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p className="text-gray-700 mb-6">{companyInfo.about}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <Building className="h-5 w-5 text-jobify-blue mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-900">Industry</h4>
                            <p className="text-gray-600">{companyInfo.industry}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Calendar className="h-5 w-5 text-jobify-blue mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-900">Founded</h4>
                            <p className="text-gray-600">{companyInfo.founded}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <User className="h-5 w-5 text-jobify-blue mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-900">Company Size</h4>
                            <p className="text-gray-600">{companyInfo.employees} employees</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-jobify-blue mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-900">Location</h4>
                            <p className="text-gray-600">{companyInfo.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            {/* Application Form (conditionally rendered) */}
            {isApplying && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Apply for this Position</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="full-name" className="text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          id="full-name"
                          type="text"
                          className="w-full rounded-md border border-gray-300 p-2"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full rounded-md border border-gray-300 p-2"
                          placeholder="Your email address"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full rounded-md border border-gray-300 p-2"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="resume" className="text-sm font-medium text-gray-700">
                        Resume/CV
                      </label>
                      <input
                        id="resume"
                        type="file"
                        className="w-full rounded-md border border-gray-300 p-2"
                      />
                      <p className="text-xs text-gray-500">
                        Accepted formats: PDF, DOCX (Max size: 5MB)
                      </p>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="cover-letter" className="text-sm font-medium text-gray-700">
                        Cover Letter
                      </label>
                      <textarea
                        id="cover-letter"
                        rows={4}
                        className="w-full rounded-md border border-gray-300 p-2"
                        placeholder="Why do you think you're a good fit for this position?"
                      ></textarea>
                    </div>
                    <div className="flex justify-end space-x-3">
                      <Button variant="outline" type="button" onClick={() => setIsApplying(false)}>
                        Cancel
                      </Button>
                      <Button className="bg-jobify-blue hover:bg-blue-600" type="submit">
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Job Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Job Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-jobify-blue mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Date Posted</h4>
                    <p className="text-gray-600">{job.posted}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-jobify-blue mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Application Deadline</h4>
                    <p className="text-gray-600">{job.deadline}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-jobify-blue mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">{job.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 text-jobify-blue mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Job Type</h4>
                    <p className="text-gray-600">{job.type}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="h-5 w-5 text-jobify-blue mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Salary Range</h4>
                    <p className="text-gray-600">{job.salary}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Required Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Required Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} className="bg-blue-50 text-jobify-blue border-jobify-blue">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Share Job */}
            <Card>
              <CardHeader>
                <CardTitle>Share This Job</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-3">
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                    <svg className="h-5 w-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
                    </svg>
                  </Button>
                  
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                    <svg className="h-5 w-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.55016 21.7502C16.6045 21.7502 21.5583 14.2469 21.5583 7.74211C21.5583 7.53117 21.5536 7.31554 21.5442 7.10461C22.5079 6.40755 23.3395 5.54397 24 4.5553C23.1025 4.95436 22.1496 5.21467 21.1739 5.32898C22.2013 4.71315 22.9705 3.74572 23.3391 2.60654C22.3726 3.1788 21.3156 3.58426 20.2134 3.80096C19.4708 3.01181 18.489 2.48936 17.4197 2.31961C16.3504 2.14987 15.2532 2.33830 14.2977 2.85858C13.3423 3.37886 12.5818 4.20485 12.1338 5.20436C11.6859 6.20387 11.5754 7.32330 11.8195 8.39304C9.86249 8.29651 7.94794 7.7885 6.19998 6.90043C4.45203 6.01235 2.90969 4.76571 1.67297 3.24957C1.0444 4.35073 0.852057 5.64454 1.13503 6.88457C1.418 8.12459 2.15506 9.20116 3.19641 9.91964C2.41463 9.89528 1.64998 9.68410 0.965625 9.30654V9.36711C0.964925 10.5487 1.3581 11.6913 2.07831 12.6106C2.79852 13.53 3.80132 14.1685 4.91625 14.4054C4.19206 14.6019 3.43198 14.6312 2.69484 14.4916C3.00945 15.5026 3.62157 16.3925 4.44577 17.0467C5.26997 17.7008 6.26512 18.0871 7.29234 18.1064C5.54842 19.4825 3.39417 20.2137 1.17656 20.2104C0.783287 20.2099 0.390399 20.1869 0 20.1415C2.25286 21.5893 4.87353 22.3439 7.55016 22.3399"></path>
                    </svg>
                  </Button>
                  
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                    <svg className="h-5 w-5 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.7752 3H4.22185C3.54797 3 3 3.51613 3 4.14194V19.8548C3 20.4806 3.54797 21 4.22185 21H19.7752C20.449 21 21 20.4806 21 19.8548V4.14194C21 3.51613 20.449 3 19.7752 3ZM8.33582 18.3871H5.75324V9.74032H8.33582V18.3871ZM7.04453 8.60323C6.23539 8.60323 5.58649 7.95484 5.58649 7.14194C5.58649 6.32903 6.23539 5.68065 7.04453 5.68065C7.85013 5.68065 8.49902 6.32903 8.49902 7.14194C8.49902 7.95161 7.85013 8.60323 7.04453 8.60323ZM18.3337 18.3871H15.7547V14.0806C15.7547 13.129 15.7371 11.8935 14.4229 11.8935C13.0897 11.8935 12.8832 12.9419 12.8832 14.0323V18.3871H10.3076V9.74032H12.7832V10.8774H12.8183C13.1878 10.2323 14.0017 9.55161 15.1965 9.55161C17.8055 9.55161 18.3337 11.2645 18.3337 13.5V18.3871Z"></path>
                    </svg>
                  </Button>
                  
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2C22,19.4 19.4,22 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8C2,4.6 4.6,2 7.8,2M7.6,4C5.61,4 4,5.61 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4C18.39,20 20,18.39 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6Z"></path>
                      <path d="M17.25,7.8L17.28,7.63C17.28,7.45 17.16,7.28 16.97,7.28L16.08,7.25C15.9,7.25 15.73,7.39 15.73,7.61V7.8H17.25M18.85,8.65L18.73,7.91C18.73,7.91 17.15,7.8 16.08,7.8H15.73L15.67,7.8C15.19,7.8 14.32,8.33 14.32,9.61V10.59C14.32,11.76 15.16,12.35 15.67,12.35H16.13C17.47,12.35 18.23,11.52 18.46,11.53C18.68,11.54 18.85,11.88 18.85,11.88M15.76,11.88C15.34,11.88 15,11.5 15,11.05C15,10.61 15.34,10.23 15.76,10.23C16.18,10.23 16.5,10.61 16.5,11.05C16.5,11.5 16.18,11.88 15.76,11.88M12.41,14.5C12.36,13.77 11.86,13.45 11.17,13.09C10.67,12.87 10.44,12.68 10.44,12.38C10.44,12.14 10.64,11.93 10.95,11.93C11.47,11.93 11.61,12.2 11.62,12.45H12.39C12.37,11.82 11.95,11.44 10.96,11.44C10.06,11.44 9.66,11.9 9.66,12.39C9.66,13.06 10.1,13.34 10.9,13.71C11.58,14.03 11.69,14.29 11.69,14.58C11.69,14.86 11.43,15.12 10.95,15.12C10.48,15.12 10.2,14.81 10.17,14.5H9.38C9.39,15.31 9.94,15.62 10.94,15.62C11.96,15.62 12.47,15.16 12.47,14.56C12.47,14.54 12.44,14.5 12.41,14.5M8.33,15.56H7.8L6.33,13.19V15.56H5.5V11.5H6.33L7.46,13.23L8.33,11.5H9.16L8.33,13.28M3.33,20H20.67V21.33H3.33V20Z"></path>
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Similar Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="group">
                  <h4 className="font-medium text-jobify-dark group-hover:text-jobify-blue">
                    <a href="#">Frontend Developer</a>
                  </h4>
                  <p className="text-sm text-gray-600">WebCraft Studios</p>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>San Francisco, CA</span>
                    <span className="mx-2">•</span>
                    <span>$65,000 - $85,000</span>
                  </div>
                </div>
                
                <div className="group">
                  <h4 className="font-medium text-jobify-dark group-hover:text-jobify-blue">
                    <a href="#">Full Stack Developer</a>
                  </h4>
                  <p className="text-sm text-gray-600">Innovative Solutions</p>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Boston, MA</span>
                    <span className="mx-2">•</span>
                    <span>$70,000 - $90,000</span>
                  </div>
                </div>
                
                <div className="group">
                  <h4 className="font-medium text-jobify-dark group-hover:text-jobify-blue">
                    <a href="#">React Developer</a>
                  </h4>
                  <p className="text-sm text-gray-600">Digital Dynamics</p>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Remote</span>
                    <span className="mx-2">•</span>
                    <span>$50 - $70/hr</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobDetail;
