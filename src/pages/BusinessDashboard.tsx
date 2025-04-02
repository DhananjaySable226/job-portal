import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  PlusCircle, 
  Briefcase, 
  ListChecks, 
  Users, 
  MessageSquare, 
  Clock, 
  DollarSign,
  FileText,
  ArrowUp,
  User,
  Star,
  Bell
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const BusinessDashboard = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-jobify-dark">Business Dashboard</h1>
            <p className="text-gray-600">Manage your jobs, applications, and freelancers</p>
          </div>
          <Button className="bg-jobify-blue hover:bg-blue-600">
            <PlusCircle className="mr-2 h-4 w-4" />
            Post a New Job
          </Button>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Active Jobs</p>
                  <h3 className="text-2xl font-bold mt-1">5</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-jobify-blue" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Applications</p>
                  <h3 className="text-2xl font-bold mt-1">27</h3>
                </div>
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-jobify-indigo" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Active Contracts</p>
                  <h3 className="text-2xl font-bold mt-1">3</h3>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Spent</p>
                  <h3 className="text-2xl font-bold mt-1">$2,580</h3>
                </div>
                <div className="bg-yellow-100 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-green-600 text-sm">
                <ArrowUp className="h-3 w-3 mr-1" />
                <span>12% from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Dashboard Tabs */}
        <Tabs defaultValue="jobs" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="jobs" className="flex gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">My Jobs</span>
            </TabsTrigger>
            <TabsTrigger value="applications" className="flex gap-2">
              <ListChecks className="h-4 w-4" />
              <span className="hidden sm:inline">Applications</span>
            </TabsTrigger>
            <TabsTrigger value="contracts" className="flex gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Contracts</span>
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Messages</span>
              <Badge className="ml-1 bg-jobify-blue">3</Badge>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="jobs">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>My Jobs</CardTitle>
                <CardDescription>Manage all your job postings</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="border-b">
                  <ul>
                    <li className="border-b last:border-b-0">
                      <div className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg text-jobify-dark">Web Developer</h3>
                            <p className="text-gray-600 mt-1">Posted 2 days ago • Full-time • Remote</p>
                            <div className="flex items-center mt-1 text-sm text-gray-500">
                              <Users className="h-4 w-4 mr-1" />
                              <span>12 Applications</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="h-fit bg-green-50 text-green-600 border-green-200">
                            Active
                          </Badge>
                        </div>
                      </div>
                    </li>
                    
                    <li className="border-b last:border-b-0">
                      <div className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg text-jobify-dark">UI/UX Designer</h3>
                            <p className="text-gray-600 mt-1">Posted 5 days ago • Part-time • New York, NY</p>
                            <div className="flex items-center mt-1 text-sm text-gray-500">
                              <Users className="h-4 w-4 mr-1" />
                              <span>8 Applications</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="h-fit bg-green-50 text-green-600 border-green-200">
                            Active
                          </Badge>
                        </div>
                      </div>
                    </li>
                    
                    <li className="border-b last:border-b-0">
                      <div className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg text-jobify-dark">Marketing Specialist</h3>
                            <p className="text-gray-600 mt-1">Posted 1 week ago • Contract • Los Angeles, CA</p>
                            <div className="flex items-center mt-1 text-sm text-gray-500">
                              <Users className="h-4 w-4 mr-1" />
                              <span>7 Applications</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="h-fit bg-green-50 text-green-600 border-green-200">
                            Active
                          </Badge>
                        </div>
                      </div>
                    </li>
                    
                    <li className="border-b last:border-b-0">
                      <div className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg text-jobify-dark">Content Writer</h3>
                            <p className="text-gray-600 mt-1">Posted 2 weeks ago • Freelance • Remote</p>
                            <div className="flex items-center mt-1 text-sm text-gray-500">
                              <Users className="h-4 w-4 mr-1" />
                              <span>0 Applications</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="h-fit bg-amber-50 text-amber-600 border-amber-200">
                            Expiring Soon
                          </Badge>
                        </div>
                      </div>
                    </li>
                    
                    <li className="border-b last:border-b-0">
                      <div className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg text-jobify-dark">Data Analyst</h3>
                            <p className="text-gray-600 mt-1">Posted 3 weeks ago • Full-time • Chicago, IL</p>
                            <div className="flex items-center mt-1 text-sm text-gray-500">
                              <Users className="h-4 w-4 mr-1" />
                              <span>5 Applications</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="h-fit bg-gray-100 text-gray-600 border-gray-300">
                            Closed
                          </Badge>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="px-6 py-4 flex justify-center">
                  <Button variant="outline" className="w-full sm:w-auto">
                    View All Jobs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="applications">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Review candidates who applied to your jobs</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="border-b">
                  <ul>
                    <li className="border-b last:border-b-0">
                      <div className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Applicant" />
                            </div>
                          </div>
                          
                          <div className="flex-grow">
                            <h3 className="font-semibold text-jobify-dark">Alex Johnson</h3>
                            <p className="text-sm text-gray-600">Applied for <span className="font-medium">Web Developer</span></p>
                            <div className="flex items-center mt-1 text-xs text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>Applied 2 days ago</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-2 ml-auto">
                            <Button size="sm" variant="outline">View</Button>
                            <Button size="sm" className="bg-jobify-blue hover:bg-blue-600">Contact</Button>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li className="border-b last:border-b-0">
                      <div className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Applicant" />
                            </div>
                          </div>
                          
                          <div className="flex-grow">
                            <h3 className="font-semibold text-jobify-dark">Sarah Miller</h3>
                            <p className="text-sm text-gray-600">Applied for <span className="font-medium">UI/UX Designer</span></p>
                            <div className="flex items-center mt-1 text-xs text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>Applied 3 days ago</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-2 ml-auto">
                            <Button size="sm" variant="outline">View</Button>
                            <Button size="sm" className="bg-jobify-blue hover:bg-blue-600">Contact</Button>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li className="border-b last:border-b-0">
                      <div className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                              <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Applicant" />
                            </div>
                          </div>
                          
                          <div className="flex-grow">
                            <h3 className="font-semibold text-jobify-dark">Michael Lee</h3>
                            <p className="text-sm text-gray-600">Applied for <span className="font-medium">Marketing Specialist</span></p>
                            <div className="flex items-center mt-1 text-xs text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>Applied 4 days ago</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-2 ml-auto">
                            <Button size="sm" variant="outline">View</Button>
                            <Button size="sm" className="bg-jobify-blue hover:bg-blue-600">Contact</Button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="px-6 py-4 flex justify-center">
                  <Button variant="outline" className="w-full sm:w-auto">
                    View All Applications
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contracts">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Active Contracts</CardTitle>
                <CardDescription>Manage your ongoing projects with freelancers</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="border-b">
                  <ul>
                    <li className="border-b last:border-b-0">
                      <div className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Freelancer" />
                            </div>
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                              <div>
                                <h3 className="font-semibold text-jobify-dark">Website Development</h3>
                                <p className="text-sm text-gray-600">with <span className="font-medium">Alex Johnson</span></p>
                              </div>
                              <div className="flex items-center mt-2 sm:mt-0">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium ml-1">4.9</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-xs text-gray-500">
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>Started May 15, 2023</span>
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="h-3 w-3 mr-1" />
                                <span>$2,500 total</span>
                              </div>
                              <div className="flex items-center">
                                <ListChecks className="h-3 w-3 mr-1" />
                                <span>In Progress</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-2 lg:ml-auto">
                            <Button size="sm" variant="outline">View Details</Button>
                            <Button size="sm" className="bg-jobify-blue hover:bg-blue-600">Message</Button>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li className="border-b last:border-b-0">
                      <div className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Freelancer" />
                            </div>
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                              <div>
                                <h3 className="font-semibold text-jobify-dark">Logo Design & Branding</h3>
                                <p className="text-sm text-gray-600">with <span className="font-medium">Sarah Miller</span></p>
                              </div>
                              <div className="flex items-center mt-2 sm:mt-0">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium ml-1">4.8</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-xs text-gray-500">
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>Started June 2, 2023</span>
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="h-3 w-3 mr-1" />
                                <span>$800 total</span>
                              </div>
                              <div className="flex items-center">
                                <ListChecks className="h-3 w-3 mr-1" />
                                <span>Review Pending</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-2 lg:ml-auto">
                            <Button size="sm" variant="outline">View Details</Button>
                            <Button size="sm" className="bg-jobify-blue hover:bg-blue-600">Message</Button>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li className="border-b last:border-b-0">
                      <div className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                              <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Freelancer" />
                            </div>
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                              <div>
                                <h3 className="font-semibold text-jobify-dark">Social Media Campaign</h3>
                                <p className="text-sm text-gray-600">with <span className="font-medium">Michael Lee</span></p>
                              </div>
                              <div className="flex items-center mt-2 sm:mt-0">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium ml-1">4.7</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-xs text-gray-500">
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>Started May 28, 2023</span>
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="h-3 w-3 mr-1" />
                                <span>$1,200 total</span>
                              </div>
                              <div className="flex items-center">
                                <ListChecks className="h-3 w-3 mr-1" />
                                <span>In Progress</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-2 lg:ml-auto">
                            <Button size="sm" variant="outline">View Details</Button>
                            <Button size="sm" className="bg-jobify-blue hover:bg-blue-600">Message</Button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="px-6 py-4 flex justify-center">
                  <Button variant="outline" className="w-full sm:w-auto">
                    View All Contracts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="messages">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Recent Messages</CardTitle>
                <CardDescription>Communication with your freelancers</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="border-b">
                  <ul>
                    <li className="border-b last:border-b-0">
                      <div className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 relative">
                            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Contact" />
                            </div>
                            <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                          </div>
                          
                          <div className="flex-grow min-w-0">
                            <div className="flex justify-between items-center mb-1">
                              <h3 className="font-semibold text-jobify-dark truncate">Alex Johnson</h3>
                              <span className="text-xs text-gray-500">2:45 PM</span>
                            </div>
                            <p className="text-sm text-gray-600 truncate">I've completed the initial wireframes for the website redesign. Would you like to schedule a review call?</p>
                          </div>
                          <div className="ml-2 flex-shrink-0">
                            <Badge className="bg-jobify-blue">New</Badge>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li className="border-b last:border-b-0">
                      <div className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 relative">
                            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Contact" />
                            </div>
                            <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                          </div>
                          
                          <div className="flex-grow min-w-0">
                            <div className="flex justify-between items-center mb-1">
                              <h3 className="font-semibold text-jobify-dark truncate">Sarah Miller</h3>
                              <span className="text-xs text-gray-500">10:23 AM</span>
                            </div>
                            <p className="text-sm text-gray-600 truncate">I've sent over the final logo files in both JPG and PNG formats. Let me know if you need any adjustments!</p>
                          </div>
                          <div className="ml-2 flex-shrink-0">
                            <Badge className="bg-jobify-blue">New</Badge>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li className="border-b last:border-b-0">
                      <div className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 relative">
                            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                              <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Contact" />
                            </div>
                            <span className="absolute bottom-0 right-0 h-3 w-3 bg-gray-300 rounded-full border-2 border-white"></span>
                          </div>
                          
                          <div className="flex-grow min-w-0">
                            <div className="flex justify-between items-center mb-1">
                              <h3 className="font-semibold text-jobify-dark truncate">Michael Lee</h3>
                              <span className="text-xs text-gray-500">Yesterday</span>
                            </div>
                            <p className="text-sm text-gray-600 truncate">We need to discuss the target demographics for the upcoming social media campaign. When are you available for a call?</p>
                          </div>
                          <div className="ml-2 flex-shrink-0">
                            <Badge className="bg-jobify-blue">New</Badge>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li className="border-b last:border-b-0">
                      <div className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 relative">
                            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Contact" />
                            </div>
                            <span className="absolute bottom-0 right-0 h-3 w-3 bg-gray-300 rounded-full border-2 border-white"></span>
                          </div>
                          
                          <div className="flex-grow min-w-0">
                            <div className="flex justify-between items-center mb-1">
                              <h3 className="font-semibold text-jobify-dark truncate">Emily Davis</h3>
                              <span className="text-xs text-gray-500">2 days ago</span>
                            </div>
                            <p className="text-sm text-gray-600 truncate">Thank you for the opportunity! I'm excited to work on this content writing project with you.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="px-6 py-4 flex justify-center">
                  <Button variant="outline" className="w-full sm:w-auto">
                    View All Messages
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Notifications */}
        <Card className="mb-8">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle>Recent Notifications</CardTitle>
              <Button variant="ghost" size="sm" className="text-gray-500">
                Mark all as read
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="border-b">
              <ul>
                <li className="border-b last:border-b-0">
                  <div className="px-6 py-4 hover:bg-gray-50 flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                      <Bell className="h-5 w-5 text-jobify-blue" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium">New application</span> received for Web Developer position.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">10 minutes ago</p>
                    </div>
                  </div>
                </li>
                
                <li className="border-b last:border-b-0">
                  <div className="px-6 py-4 hover:bg-gray-50 flex items-start gap-4">
                    <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                      <User className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium">Sarah Miller</span> submitted deliverables for Logo Design project.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                  </div>
                </li>
                
                <li className="border-b last:border-b-0">
                  <div className="px-6 py-4 hover:bg-gray-50 flex items-start gap-4">
                    <div className="bg-indigo-100 p-2 rounded-full flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-jobify-indigo" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium">3 new messages</span> from your active contracts.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">4 hours ago</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="px-6 py-4 flex justify-center">
              <Button variant="outline" className="w-full sm:w-auto">
                View All Notifications
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default BusinessDashboard;
