
import { useState } from 'react';
import { 
  Search, 
  Plus, 
  Filter, 
  Dumbbell, 
  MoreHorizontal,
  Edit,
  Trash,
  Mail,
  Phone,
  Star,
  Calendar
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';


const trainers = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-7890',
    specialty: 'Weight Training',
    experience: '8 years',
    rating: 4.8,
    status: 'Active',
    clients: 15,
    nextSession: 'Today, 2:00 PM'
  },
  {
    id: 2,
    name: 'Emma Davis',
    email: 'emma.d@example.com',
    phone: '+1 (555) 987-6543',
    specialty: 'Yoga',
    experience: '6 years',
    rating: 4.9,
    status: 'Active',
    clients: 12,
    nextSession: 'Today, 4:30 PM'
  },
  {
    id: 3,
    name: 'Michael Roberts',
    email: 'michael.r@example.com',
    phone: '+1 (555) 456-7890',
    specialty: 'CrossFit',
    experience: '10 years',
    rating: 4.7,
    status: 'Active',
    clients: 18,
    nextSession: 'Tomorrow, 9:00 AM'
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+1 (555) 789-0123',
    specialty: 'Cardio',
    experience: '5 years',
    rating: 4.6,
    status: 'On Leave',
    clients: 10,
    nextSession: 'Next Week'
  },
  {
    id: 5,
    name: 'David Thompson',
    email: 'david.t@example.com',
    phone: '+1 (555) 234-5678',
    specialty: 'Nutrition',
    experience: '7 years',
    rating: 4.5,
    status: 'Active',
    clients: 14,
    nextSession: 'Today, 6:00 PM'
  },
  {
    id: 6,
    name: 'Olivia Martinez',
    email: 'olivia.m@example.com',
    phone: '+1 (555) 345-6789',
    specialty: 'Pilates',
    experience: '4 years',
    rating: 4.7,
    status: 'Active',
    clients: 9,
    nextSession: 'Tomorrow, 11:00 AM'
  }
];

const Trainers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openMenu, setOpenMenu] = useState(null);
  const { toast } = useToast();
  
  
  const filteredTrainers = trainers.filter(trainer => 
    trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trainer.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trainer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    toast({
      title: "Search Results",
      description: `Found ${filteredTrainers.length} trainers matching "${searchTerm}"`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gym-pink to-gym-purple bg-clip-text text-transparent">Trainers</h1>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search trainers..."
                  className="h-10 w-full rounded-md border border-gym-purple/30 bg-background pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-purple/50 focus-visible:ring-offset-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </form>
          </div>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gym-dark text-white border border-gym-purple/30 hover:bg-gym-purple/20 h-10 px-4 py-2">
            <Filter className="mr-2 h-4 w-4 text-gym-cyan" />
            Filter
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gym-neonpink text-white hover:bg-gym-pink/90 h-10 px-4 py-2 neon-glow">
            <Plus className="mr-2 h-4 w-4" />
            Add Trainer
          </button>
        </div>
      </div>
      
      {/* Trainers Table */}
      <div className="dashboard-card">
        <div className="p-1">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b border-gym-purple/20">
                <tr className="border-b text-left font-medium text-gym-cyan">
                  <th className="p-4">Trainer</th>
                  <th className="p-4">Specialty</th>
                  <th className="p-4">Experience</th>
                  <th className="p-4">Rating</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Clients</th>
                  <th className="p-4">Next Session</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {filteredTrainers.map((trainer, index) => (
                  <motion.tr 
                    key={trainer.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    className="border-b border-gym-purple/20 transition-colors hover:bg-gym-purple/5"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gym-indigo border border-gym-neonpurple/50 flex items-center justify-center">
                          <Dumbbell className="h-5 w-5 text-gym-neonpurple" />
                        </div>
                        <div>
                          <div className="font-medium text-white">{trainer.name}</div>
                          <div className="flex flex-col text-xs text-muted-foreground">
                            <span className="flex items-center">
                              <Mail className="mr-1 h-3 w-3 text-gym-cyan" />
                              {trainer.email}
                            </span>
                            <span className="flex items-center mt-1">
                              <Phone className="mr-1 h-3 w-3 text-gym-pink" />
                              {trainer.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-gym-neoncyan">
                      {trainer.specialty}
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {trainer.experience}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-white">{trainer.rating}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        trainer.status === 'Active'
                          ? 'bg-gym-neoncyan/20 text-gym-neoncyan'
                          : 'bg-gym-neonpink/20 text-gym-neonpink'
                      }`}>
                        {trainer.status}
                      </span>
                    </td>
                    <td className="p-4 text-white">
                      {trainer.clients}
                    </td>
                    <td className="p-4 text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-gym-pink" />
                        {trainer.nextSession}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="relative">
                        <button
                          onClick={() => toggleMenu(trainer.id)}
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 w-8 p-0 text-muted-foreground hover:text-white"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                        {openMenu === trainer.id && (
                          <div className="absolute right-0 z-10 mt-1 w-36 rounded-md bg-gym-indigo border border-gym-purple/30 shadow-lg focus:outline-none">
                            <div className="py-1">
                              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-gym-purple/20 transition-colors text-gym-cyan">
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </button>
                              <button className="flex w-full items-center px-4 py-2 text-sm text-gym-neonpink hover:bg-gym-neonpink/10 transition-colors">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
