
import { useState } from 'react';
import { 
  Search, 
  Plus, 
  Filter, 
  MoreHorizontal,
  Edit,
  Trash,
  Users,
  Clock,
  Calendar,
  LayoutGrid,
  List,
  Dumbbell
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

// Sample data
const classes = [
  {
    id: 1,
    name: 'HIIT Circuit',
    trainer: 'John Smith',
    type: 'High Intensity',
    time: '08:00 - 09:00',
    day: 'Monday, Wednesday, Friday',
    capacity: 15,
    enrolled: 12,
    room: 'Studio A',
    level: 'Advanced'
  },
  {
    id: 2,
    name: 'Yoga Flow',
    trainer: 'Emma Davis',
    type: 'Mind & Body',
    time: '10:30 - 11:30',
    day: 'Tuesday, Thursday',
    capacity: 12,
    enrolled: 9,
    room: 'Studio B',
    level: 'All Levels'
  },
  {
    id: 3,
    name: 'Strength Training',
    trainer: 'Michael Roberts',
    type: 'Strength',
    time: '17:00 - 18:00',
    day: 'Monday, Wednesday, Friday',
    capacity: 10,
    enrolled: 10,
    room: 'Weights Area',
    level: 'Intermediate'
  },
  {
    id: 4,
    name: 'Cycling',
    trainer: 'Sarah Johnson',
    type: 'Cardio',
    time: '18:30 - 19:30',
    day: 'Tuesday, Thursday',
    capacity: 20,
    enrolled: 15,
    room: 'Spin Studio',
    level: 'All Levels'
  },
  {
    id: 5,
    name: 'Pilates',
    trainer: 'Olivia Martinez',
    type: 'Mind & Body',
    time: '09:15 - 10:15',
    day: 'Wednesday, Friday',
    capacity: 12,
    enrolled: 8,
    room: 'Studio B',
    level: 'Beginner'
  },
  {
    id: 6,
    name: 'CrossFit',
    trainer: 'David Thompson',
    type: 'Cross Training',
    time: '19:00 - 20:00',
    day: 'Monday, Wednesday, Friday',
    capacity: 15,
    enrolled: 13,
    room: 'CrossFit Area',
    level: 'Advanced'
  }
];

const Classes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openMenu, setOpenMenu] = useState(null);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const { toast } = useToast();
  
  // Filter classes based on search term
  const filteredClasses = classes.filter(cls => 
    cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cls.trainer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cls.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    toast({
      title: "Search Results",
      description: `Found ${filteredClasses.length} classes matching "${searchTerm}"`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gym-blue to-gym-cyan bg-clip-text text-transparent">Classes</h1>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search classes..."
                  className="h-10 w-full rounded-md border border-gym-purple/30 bg-background pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-purple/50 focus-visible:ring-offset-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="bg-gym-dark rounded-md border border-gym-purple/30 flex">
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'text-gym-cyan' : 'text-muted-foreground'}`}
            >
              <List className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'text-gym-cyan' : 'text-muted-foreground'}`}
            >
              <LayoutGrid className="h-5 w-5" />
            </button>
          </div>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gym-dark text-white border border-gym-purple/30 hover:bg-gym-purple/20 h-10 px-4 py-2">
            <Filter className="mr-2 h-4 w-4 text-gym-cyan" />
            Filter
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gym-neonpink text-white hover:bg-gym-pink/90 h-10 px-4 py-2 neon-glow">
            <Plus className="mr-2 h-4 w-4" />
            Add Class
          </button>
        </div>
      </div>
      
      {viewMode === 'list' ? (
        /* Classes Table */
        <div className="dashboard-card">
          <div className="p-1">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b border-gym-purple/20">
                  <tr className="border-b text-left font-medium text-gym-cyan">
                    <th className="p-4">Class</th>
                    <th className="p-4">Type</th>
                    <th className="p-4">Schedule</th>
                    <th className="p-4">Capacity</th>
                    <th className="p-4">Level</th>
                    <th className="p-4">Room</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {filteredClasses.map((cls, index) => (
                    <motion.tr 
                      key={cls.id}
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
                            <div className="font-medium text-white">{cls.name}</div>
                            <div className="text-xs text-muted-foreground">by {cls.trainer}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-gym-neoncyan">
                        {cls.type}
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <div className="flex items-center text-white">
                            <Clock className="mr-1 h-3 w-3 text-gym-cyan" />
                            {cls.time}
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <Calendar className="mr-1 h-3 w-3 text-gym-pink" />
                            {cls.day}
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <div className="flex items-center text-white">
                            <Users className="mr-1 h-3 w-3 text-gym-neoncyan" />
                            {cls.enrolled}/{cls.capacity}
                          </div>
                          <div className="w-20 h-1.5 bg-gym-indigo rounded-full overflow-hidden mt-1">
                            <div 
                              className={`h-full rounded-full ${
                                cls.enrolled === cls.capacity 
                                  ? 'bg-gym-neonpink' 
                                  : 'bg-gym-neoncyan'
                              }`}
                              style={{ width: `${(cls.enrolled / cls.capacity) * 100}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          cls.level === 'Beginner'
                            ? 'bg-gym-blue/20 text-gym-blue'
                            : cls.level === 'Intermediate'
                            ? 'bg-gym-purple/20 text-gym-neonpurple'
                            : 'bg-gym-neonpink/20 text-gym-neonpink'
                        }`}>
                          {cls.level}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {cls.room}
                      </td>
                      <td className="p-4 text-right">
                        <div className="relative">
                          <button
                            onClick={() => toggleMenu(cls.id)}
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 w-8 p-0 text-muted-foreground hover:text-white"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                          {openMenu === cls.id && (
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
      ) : (
        /* Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((cls, index) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="dashboard-card p-5 relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gym-purple/10" />
              
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gym-indigo border border-gym-neonpurple/50 flex items-center justify-center">
                    <Dumbbell className="h-5 w-5 text-gym-neonpurple" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-white">{cls.name}</h3>
                    <p className="text-sm text-muted-foreground">by {cls.trainer}</p>
                  </div>
                </div>
                <div className="relative">
                  <button
                    onClick={() => toggleMenu(cls.id)}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 w-8 p-0 text-muted-foreground hover:text-white"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                  {openMenu === cls.id && (
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
              </div>
              
              <div className="mt-5 space-y-3">
                <div className="flex items-center text-sm">
                  <Clock className="mr-2 h-4 w-4 text-gym-neoncyan" />
                  <span className="text-white">{cls.time}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="mr-2 h-4 w-4 text-gym-pink" />
                  <span className="text-muted-foreground">{cls.day}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Capacity</span>
                  <span className="text-sm text-white">{cls.enrolled}/{cls.capacity}</span>
                </div>
                <div className="w-full h-1.5 bg-gym-indigo rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      cls.enrolled === cls.capacity 
                        ? 'bg-gym-neonpink' 
                        : 'bg-gym-neoncyan'
                    }`}
                    style={{ width: `${(cls.enrolled / cls.capacity) * 100}%` }}
                  />
                </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  cls.level === 'Beginner'
                    ? 'bg-gym-blue/20 text-gym-blue'
                    : cls.level === 'Intermediate'
                    ? 'bg-gym-purple/20 text-gym-neonpurple'
                    : 'bg-gym-neonpink/20 text-gym-neonpink'
                }`}>
                  {cls.level}
                </span>
                <span className="text-sm text-muted-foreground">{cls.room}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Classes;
