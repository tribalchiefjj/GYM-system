
import { motion } from 'framer-motion';
import { 
  Users, 
  Dumbbell, 
  Timer,
  Award,
  Calendar, 
  Activity,
  TrendingUp,
  BarChart3,
  AlertTriangle,
  Shield,
  Smartphone,
  MoreVertical,
  ChevronRight
} from 'lucide-react';

// Import dashboard components
import StatCard from '../components/dashboard/StatCard';
import MemberActivity from '../components/dashboard/MemberActivity';
import RevenueChart from '../components/dashboard/RevenueChart';
import ClassesOverview from '../components/dashboard/ClassesOverview';
import RecentMembers from '../components/dashboard/RecentMembers';
import UpcomingClasses from '../components/dashboard/UpcomingClasses';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      
      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard 
          title="Active Members" 
          value="254" 
          subtitle="↑ 12% increase"
          icon={Users}
          color="purple"
          percent={75}
        />
        <StatCard 
          title="Weekly Workouts" 
          value="189" 
          subtitle="↑ 8% increase"
          icon={Dumbbell}
          color="blue"
          percent={69}
        />
        <StatCard 
          title="Class Attendance" 
          value="86%" 
          subtitle="↑ 5% increase"
          icon={Timer}
          color="pink"
          percent={86}
        />
        <StatCard 
          title="Member Retention" 
          value="92%" 
          subtitle="↑ 3% increase"
          icon={Award}
          color="cyan"
          percent={92}
        />
      </div>
      
      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left section - 2/3 width */}
        <div className="lg:col-span-2 space-y-6">
          {/* Monthly Revenue chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-card rounded-xl p-5"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Monthly Revenue</h3>
              <p className="text-sm font-medium text-blue-500">$28,500</p>
            </div>
            <div className="h-72">
              <RevenueChart />
            </div>
          </motion.div>
          
          {/* Two columns for Fitness Programs and Workout Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="bg-card rounded-xl p-5"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Fitness Programs</h3>
                <button>
                  <MoreVertical size={16} />
                </button>
              </div>
              
              {/* Programs sections */}
              <div className="space-y-3">
                <div className="border border-gym-purple/20 rounded-lg p-3 hover:bg-gym-purple/10 transition-colors cursor-pointer">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">Weight Loss Challenge</p>
                    <ChevronRight size={16} />
                  </div>
                </div>
                <div className="border border-gym-purple/20 rounded-lg p-3 hover:bg-gym-purple/10 transition-colors cursor-pointer">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">Strength Training</p>
                    <ChevronRight size={16} />
                  </div>
                </div>
                <div className="border border-gym-purple/20 rounded-lg p-3 hover:bg-gym-purple/10 transition-colors cursor-pointer">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">HIIT Cardio</p>
                    <ChevronRight size={16} />
                  </div>
                </div>
                <div className="border border-gym-purple/20 rounded-lg p-3 hover:bg-gym-purple/10 transition-colors cursor-pointer">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">Yoga & Flexibility</p>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="bg-card rounded-xl p-5"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Member Activity</h3>
                <button>
                  <MoreVertical size={16} />
                </button>
              </div>
              
              <div className="py-4">
                <div className="h-32 w-full">
                  <MemberActivity />
                </div>
              </div>
              
              <div className="flex space-x-2 overflow-x-auto py-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <button
                    key={i}
                    className={`flex-shrink-0 h-7 w-7 rounded-md flex items-center justify-center text-xs ${
                      i === 3 ? 'bg-gym-purple text-white' : 'bg-gym-purple/20 text-white/70 hover:bg-gym-purple/30'
                    }`}
                  >
                    {i + 21}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Right section - 1/3 width */}
        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="bg-card rounded-xl p-5"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Gym Performance</h3>
              <button>
                <MoreVertical size={16} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="group border border-gym-purple/20 rounded-lg p-3 hover:bg-gym-purple/10 transition-colors cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Peak Hours</p>
                    <p className="text-xs text-white/60 mt-1">5:00 PM - 8:00 PM is your busiest time with 78 members on average.</p>
                  </div>
                  <ChevronRight size={16} className="text-white/60 group-hover:text-white" />
                </div>
              </div>
              
              <div className="group border border-gym-purple/20 rounded-lg p-3 hover:bg-gym-purple/10 transition-colors cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Equipment Usage</p>
                    <p className="text-xs text-white/60 mt-1">Cardio machines are used 32% more than weight equipment this month.</p>
                  </div>
                  <ChevronRight size={16} className="text-white/60 group-hover:text-white" />
                </div>
              </div>
              
              <div className="group border border-gym-purple/20 rounded-lg p-3 hover:bg-gym-purple/10 transition-colors cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Membership Growth</p>
                    <p className="text-xs text-white/60 mt-1">New memberships increased by 15% compared to last month.</p>
                  </div>
                  <ChevronRight size={16} className="text-white/60 group-hover:text-white" />
                </div>
              </div>
              
              <div className="group border border-gym-purple/20 rounded-lg p-3 hover:bg-gym-purple/10 transition-colors cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Personal Training</p>
                    <p className="text-xs text-white/60 mt-1">42 members booked personal training sessions this week.</p>
                  </div>
                  <ChevronRight size={16} className="text-white/60 group-hover:text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Additional content (can be toggled) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <RecentMembers />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <UpcomingClasses />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
