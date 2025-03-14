
import { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Calendar, Dumbbell, Users } from 'lucide-react';

// Monthly revenue data
const revenueData = [
  { month: 'Jan', revenue: 15000 },
  { month: 'Feb', revenue: 18000 },
  { month: 'Mar', revenue: 16500 },
  { month: 'Apr', revenue: 17500 },
  { month: 'May', revenue: 21000 },
  { month: 'Jun', revenue: 23500 },
  { month: 'Jul', revenue: 22000 },
  { month: 'Aug', revenue: 24500 },
  { month: 'Sep', revenue: 26000 },
  { month: 'Oct', revenue: 29000 },
  { month: 'Nov', revenue: 31000 },
  { month: 'Dec', revenue: 34000 },
];

// Member growth data
const memberGrowthData = [
  { month: 'Jan', members: 1500 },
  { month: 'Feb', members: 1650 },
  { month: 'Mar', members: 1780 },
  { month: 'Apr', members: 1900 },
  { month: 'May', members: 2050 },
  { month: 'Jun', members: 2180 },
  { month: 'Jul', members: 2240 },
  { month: 'Aug', members: 2320 },
  { month: 'Sep', members: 2390 },
  { month: 'Oct', members: 2470 },
  { month: 'Nov', members: 2530 },
  { month: 'Dec', members: 2610 },
];

// Class attendance data
const classAttendanceData = [
  { name: 'HIIT', value: 35, color: '#E63946' },
  { name: 'Yoga', value: 25, color: '#457B9D' },
  { name: 'Weight Training', value: 20, color: '#4CAF50' },
  { name: 'Cardio', value: 15, color: '#FF9800' },
  { name: 'Pilates', value: 5, color: '#9C27B0' },
];

// Weekly attendance data
const weeklyAttendanceData = [
  { day: 'Mon', morning: 45, evening: 60 },
  { day: 'Tue', morning: 32, evening: 48 },
  { day: 'Wed', morning: 38, evening: 55 },
  { day: 'Thu', morning: 30, evening: 52 },
  { day: 'Fri', morning: 52, evening: 64 },
  { day: 'Sat', morning: 65, evening: 42 },
  { day: 'Sun', morning: 38, evening: 25 },
];

// Age distribution data
const ageDistributionData = [
  { age: '18-24', male: 300, female: 400 },
  { age: '25-34', male: 450, female: 480 },
  { age: '35-44', male: 320, female: 280 },
  { age: '45-54', male: 200, female: 220 },
  { age: '55+', male: 180, female: 160 },
];

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('year');
  
  const COLORS = classAttendanceData.map(item => item.color);
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <div className="inline-flex items-center rounded-md border border-input bg-transparent p-1 text-sm">
          <button
            className={`px-3 py-1.5 rounded-sm ${
              timeRange === 'month' ? 'bg-gym-blue text-white' : 'hover:bg-muted'
            }`}
            onClick={() => setTimeRange('month')}
          >
            Month
          </button>
          <button
            className={`px-3 py-1.5 rounded-sm ${
              timeRange === 'quarter' ? 'bg-gym-blue text-white' : 'hover:bg-muted'
            }`}
            onClick={() => setTimeRange('quarter')}
          >
            Quarter
          </button>
          <button
            className={`px-3 py-1.5 rounded-sm ${
              timeRange === 'year' ? 'bg-gym-blue text-white' : 'hover:bg-muted'
            }`}
            onClick={() => setTimeRange('year')}
          >
            Year
          </button>
        </div>
      </div>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="stat-card">
          <div className="flex items-center gap-4">
            <div className="stat-card-icon bg-gym-blue">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Total Members</h3>
              <p className="text-3xl font-bold mt-1">2,548</p>
              <span className="text-sm text-gym-green">+12% from last year</span>
            </div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="flex items-center gap-4">
            <div className="stat-card-icon bg-gym-green">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Classes Per Month</h3>
              <p className="text-3xl font-bold mt-1">345</p>
              <span className="text-sm text-gym-green">+8% from last year</span>
            </div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="flex items-center gap-4">
            <div className="stat-card-icon bg-gym-red">
              <Dumbbell className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Active Trainers</h3>
              <p className="text-3xl font-bold mt-1">18</p>
              <span className="text-sm text-gym-green">+4 from last year</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Revenue & Member Growth */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="chart-container">
          <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <Tooltip
                  formatter={(value) => [`$${value}`, "Revenue"]}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#4CAF50"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="chart-container">
          <h3 className="text-lg font-semibold mb-4">Member Growth</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={memberGrowthData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  formatter={(value) => [value, "Members"]}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="members"
                  stroke="#457B9D"
                  activeDot={{ r: 8 }}
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Class Attendance & Weekly Patterns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="chart-container">
          <h3 className="text-lg font-semibold mb-4">Class Attendance</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={classAttendanceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {classAttendanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value}%`, "Attendance"]}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="chart-container">
          <h3 className="text-lg font-semibold mb-4">Weekly Attendance Patterns</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weeklyAttendanceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Legend />
                <Bar dataKey="morning" name="Morning" fill="#457B9D" />
                <Bar dataKey="evening" name="Evening" fill="#E63946" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Age Distribution */}
      <div className="chart-container">
        <h3 className="text-lg font-semibold mb-4">Member Age Distribution</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ageDistributionData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" />
              <YAxis dataKey="age" type="category" />
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Legend />
              <Bar dataKey="male" name="Male" fill="#1D3557" />
              <Bar dataKey="female" name="Female" fill="#E63946" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
