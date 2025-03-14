
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'HIIT', value: 35, color: '#FF26B9' },
  { name: 'Yoga', value: 25, color: '#26C6FF' },
  { name: 'Weight Training', value: 20, color: '#7C4DFF' },
  { name: 'Cardio', value: 15, color: '#42FFEC' },
  { name: 'Pilates', value: 5, color: '#FF4D94' },
];

const COLORS = data.map(item => item.color);

const ClassesOverview = () => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gym-purpleCard/90 p-3 text-sm rounded-md border border-gym-purpleLight/30 shadow-md">
          <p className="font-medium text-white">{payload[0].name}</p>
          <p className="font-bold text-gym-purpleHighlight">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold mb-2 text-white">Popular Classes</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              innerRadius={40}
              paddingAngle={2}
              dataKey="value"
              animationDuration={1500}
              animationBegin={300}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                  stroke="transparent"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              align="center"
              verticalAlign="bottom"
              layout="horizontal"
              iconSize={10}
              iconType="circle"
              formatter={(value) => (
                <span className="text-xs font-medium text-white/80">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 text-sm text-white/60 text-center">
        Based on member attendance
      </div>
    </div>
  );
};

export default ClassesOverview;
