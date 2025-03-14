
import { Clock, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const classes = [
  {
    id: 1,
    name: 'HIIT Circuit',
    time: '08:00 - 09:00',
    date: 'Today',
    trainer: 'John Smith',
    participants: 12,
    maxParticipants: 15,
  },
  {
    id: 2,
    name: 'Yoga Flow',
    time: '10:30 - 11:30',
    date: 'Today',
    trainer: 'Emma Davis',
    participants: 8,
    maxParticipants: 12,
  },
  {
    id: 3,
    name: 'Strength Training',
    time: '17:00 - 18:00',
    date: 'Today',
    trainer: 'Michael Roberts',
    participants: 10,
    maxParticipants: 10,
  },
  {
    id: 4,
    name: 'Cycling',
    time: '08:00 - 09:00',
    date: 'Tomorrow',
    trainer: 'Sarah Johnson',
    participants: 14,
    maxParticipants: 20,
  },
];

const UpcomingClasses = () => {
  return (
    <div className="bg-card rounded-xl shadow-md p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Upcoming Classes</h3>
        <a href="/classes" className="text-sm text-gym-purpleHighlight hover:underline">
          View all
        </a>
      </div>
      
      <div className="space-y-4">
        {classes.map((cls, index) => (
          <motion.div 
            key={cls.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="flex items-center justify-between rounded-lg border border-gym-purpleLight/20 p-3 hover:bg-gym-purpleDark/50 transition-colors"
          >
            <div>
              <h4 className="font-medium text-white">{cls.name}</h4>
              <div className="mt-1 flex items-center text-sm text-white/70 gap-3">
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{cls.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{cls.date}</span>
                </div>
              </div>
              <p className="text-sm mt-1 text-white/80">Trainer: {cls.trainer}</p>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1 text-sm mb-1 text-white/80">
                <Users className="h-3.5 w-3.5" />
                <span>
                  {cls.participants}/{cls.maxParticipants}
                </span>
              </div>
              <div className="w-20 h-1.5 bg-gym-purpleDark rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    cls.participants === cls.maxParticipants 
                      ? 'bg-gym-red' 
                      : 'bg-gym-purpleHighlight'
                  }`}
                  style={{ width: `${(cls.participants / cls.maxParticipants) * 100}%` }}
                />
              </div>
              <span className="text-xs mt-1 text-white/70">
                {cls.participants === cls.maxParticipants ? 'Full' : 'Available'}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingClasses;
