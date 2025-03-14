
import { useState } from 'react';
import { Bell, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      toast({
        title: "Search initiated",
        description: `Searching for "${searchTerm}"`,
      });
    }
  };
  
  return (
    <header className="sticky top-0 z-10 border-b border-gym-purpleLight/20 bg-gym-purpleBase/95 backdrop-blur supports-[backdrop-filter]:bg-gym-purpleBase/60">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2 md:w-64">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <div className="relative hidden md:flex">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search anything..."
                  className="h-9 w-64 rounded-full border border-gym-purpleHighlight/30 bg-gym-purpleDark pl-10 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-purpleHighlight/50 focus-visible:ring-offset-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </form>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              className="rounded-full p-2 hover:bg-gym-purpleLight/20 transition-colors relative"
              onClick={() => {
                toast({
                  title: "Notifications",
                  description: "You have 3 unread notifications",
                });
              }}
            >
              <Bell className="h-5 w-5 text-gym-purpleHighlight" />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gym-purpleProgress text-[10px] font-medium text-white">
                3
              </span>
            </button>
            
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gym-purpleProgress flex items-center justify-center">
                <span className="text-xs font-medium text-white">j</span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Jafar</p>
                <p className="text-xs text-muted-foreground">Admin</p>
              </div>
            </div>
            
            <button className="hidden md:block ml-2 text-xs font-medium text-white bg-gym-purpleProgress hover:bg-gym-purpleHighlight px-3 py-1.5 rounded-md">
              Add Policy
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
