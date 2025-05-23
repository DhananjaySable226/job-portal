import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Layout from "@/components/Layout/Layout";
import { BriefcaseBusiness } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const registerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  accountType: z.enum(["user", "business"], {
    required_error: "Please select an account type",
  }),
});

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      accountType: "user",
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    setIsLoading(true);
  
    const [firstName, ...rest] = values.name.trim().split(" ");
    const lastName = rest.join(" ") || "";
  
    try {
      const response = await axios.post("http://localhost:4000/job-portal/api/v1/users/", {
        first_name: firstName,
        last_name: lastName,
        email: values.email,
        password: values.password,
      });
      toast.success("Account created successfully!");
  
      if (values.accountType === "business") {
        navigate("/login");
      } else {
        navigate("/login");
      }
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Failed to create account. Please try again.";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-jobify-blue/10">
              <BriefcaseBusiness className="h-8 w-8 text-jobify-blue" />
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-jobify-dark">
              Create your account
            </h2>
            <p className="mt-2 text-gray-500">
              Join Jobify and connect with local opportunities
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your full name" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="Enter your email" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="••••••••" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select account type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="user">user</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-jobify-blue hover:bg-blue-600"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>

              <div className="text-center text-sm">
                <p className="text-gray-500">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-jobify-blue hover:text-blue-500"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
