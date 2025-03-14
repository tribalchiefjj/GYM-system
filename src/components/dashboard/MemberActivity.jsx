
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', visits: 45 },
  { day: 'Tue', visits: 32 },
  { day: 'Wed', visits: 38 },
  { day: 'Thu', visits: 30 },
  { day: 'Fri', visits: 52 },
  { day: 'Sat', visits: 25 },
  { day: 'Sun', visits: 18 },
  { day: 'Mon', visits: 40 },
  { day: 'Tue', visits: 42 },
  { day: 'Wed', visits: 48 },
];

const MemberActivity = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
        <defs>
          <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#755FE2" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#755FE2" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area 
          type="monotone" 
          dataKey="visits" 
          stroke="#755FE2" 
          fillOpacity={1}
          fill="url(#colorActivity)"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MemberActivity;
