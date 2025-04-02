import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Layout from '@/components/Layout/Layout';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avtar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Briefcase, Award, Mail, Phone, MapPin, Calendar, Edit2 } from 'lucide-react';

// Define form validation schema
const profileFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  location: z.string().min(2, { message: "Location must be at least 2 characters." }),
  bio: z.string().max(500, { message: "Bio must not exceed 500 characters." }),
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
});

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data - in a real app, this would come from an API/auth provider
  const [userData, setUserData] = useState({
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "555-123-4567",
    location: "San Francisco, CA",
    bio: "Experienced freelance graphic designer with over 5 years of experience working with startups and small businesses. Specialized in brand identity, UI/UX design, and print materials.",
    title: "Senior Graphic Designer",
    joinDate: "January, 2022",
    completedJobs: 47,
    rating: 4.8,
    skills: ["Graphic Design", "Branding", "UI/UX", "Illustration", "Adobe Creative Suite"]
  });

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: userData.fullName,
      email: userData.email,
      phone: userData.phone,
      location: userData.location,
      bio: userData.bio,
      title: userData.title,
    },
  });

  function onSubmit(values: z.infer<typeof profileFormSchema>) {
    // In a real app, this would make an API call to update the user's profile
    setUserData({...userData, ...values});
    setIsEditing(false);
    toast.success("Profile updated successfully");
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Layout>
      <div className="container max-w-5xl py-10">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User size={16} />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="jobs" className="flex items-center gap-2">
              <Briefcase size={16} />
              <span>Job History</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
              {/* Profile Card */}
              <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <Avatar className="w-32 h-32 mb-4">
                    <AvatarImage src="/placeholder.svg" alt={userData.fullName} />
                    <AvatarFallback className="text-xl">{getInitials(userData.fullName)}</AvatarFallback>
                  </Avatar>
                  
                  <h2 className="text-xl font-semibold">{userData.fullName}</h2>
                  <p className="text-jobify-blue font-medium">{userData.title}</p>
                  
                  <div className="flex items-center mt-4 text-sm text-gray-500">
                    <MapPin size={16} className="mr-1" />
                    <span>{userData.location}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full mt-6">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-lg font-semibold">{userData.completedJobs}</p>
                      <p className="text-xs text-gray-500">Jobs Completed</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-lg font-semibold">{userData.rating}/5</p>
                      <p className="text-xs text-gray-500">Rating</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 w-full">
                    <p className="text-sm font-medium text-left mb-2">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {userData.skills.map((skill) => (
                        <span key={skill} className="text-xs bg-jobify-blue/10 text-jobify-blue px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Profile Details */}
              <Card>
                <CardHeader className="pb-4 flex flex-row items-center justify-between">
                  <h3 className="text-lg font-semibold">Profile Information</h3>
                  {!isEditing && (
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                      <Edit2 size={16} className="mr-2" />
                      Edit Profile
                    </Button>
                  )}
                </CardHeader>
                
                <CardContent>
                  {isEditing ? (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Professional Title</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Location</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="bio"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Biography</FormLabel>
                              <FormControl>
                                <Textarea rows={5} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="flex justify-end gap-2 pt-2">
                          <Button 
                            type="button" 
                            variant="outline"
                            onClick={() => setIsEditing(false)}
                          >
                            Cancel
                          </Button>
                          <Button type="submit">Save Changes</Button>
                        </div>
                      </form>
                    </Form>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex gap-2">
                          <User className="w-5 h-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-500">Full Name</p>
                            <p>{userData.fullName}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Briefcase className="w-5 h-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-500">Professional Title</p>
                            <p>{userData.title}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Mail className="w-5 h-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p>{userData.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Phone className="w-5 h-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p>{userData.phone}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <MapPin className="w-5 h-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-500">Location</p>
                            <p>{userData.location}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Calendar className="w-5 h-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-500">Member Since</p>
                            <p>{userData.joinDate}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Biography</p>
                        <p className="text-sm">{userData.bio}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="jobs">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center p-8">
                  <Briefcase className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium mb-2">Job History</h3>
                  <p className="text-gray-500 mb-6">View your completed and ongoing jobs</p>
                  <Button>View All Jobs</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
