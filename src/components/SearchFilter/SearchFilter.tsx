
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface SearchFilterProps {
  onSearch: (filters: {
    keyword: string;
    location: string;
    category: string;
    jobType: string;
  }) => void;
}

const SearchFilter = ({ onSearch }: SearchFilterProps) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    category: '',
    jobType: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleReset = () => {
    setFilters({
      keyword: '',
      location: '',
      category: '',
      jobType: '',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 p-5">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              name="keyword"
              value={filters.keyword}
              onChange={handleInputChange}
              placeholder="Job title or keyword"
              className="pl-10"
            />
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              name="location"
              value={filters.location}
              onChange={handleInputChange}
              placeholder="Location"
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <Button 
              type="submit" 
              className="flex-1 bg-jobify-blue hover:bg-blue-600"
            >
              Search
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
              className="px-3"
            >
              <SlidersHorizontal size={18} />
            </Button>
          </div>
        </div>
        
        {isAdvancedOpen && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Category
              </label>
              <Select 
                value={filters.category} 
                onValueChange={(value) => handleSelectChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="design">Design & Creative</SelectItem>
                  <SelectItem value="development">Development & IT</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="writing">Writing</SelectItem>
                  <SelectItem value="admin">Admin Support</SelectItem>
                  <SelectItem value="customer">Customer Service</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Job Type
              </label>
              <Select 
                value={filters.jobType} 
                onValueChange={(value) => handleSelectChange('jobType', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select job type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="freelance">Freelance</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="md:col-span-2 flex justify-end">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleReset}
                className="gap-2"
              >
                <X size={16} />
                Reset Filters
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchFilter;
