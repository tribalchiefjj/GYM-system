
import { motion } from 'framer-motion';

const StatCard = ({ title, value, subtitle, icon: Icon, color = "purple", percent = 0 }) => {
  const colorClasses = {
    blue: "bg-blue-500/20 border-blue-500/30 text-blue-500",
    purple: "bg-purple-500/20 border-purple-500/30 text-purple-500",
    pink: "bg-pink-500/20 border-pink-500/30 text-pink-500",
    cyan: "bg-cyan-500/20 border-cyan-500/30 text-cyan-500",
  };

  const iconClass = colorClasses[color] || colorClasses.purple;
  
  return (
    <motion.div 
      className={`${colorClasses[color]} rounded-xl border p-4 shadow-sm`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-white/80">{title}</p>
          <div className="flex items-baseline gap-1">
            <h3 className="text-2xl font-bold mt-1 text-white">{value}</h3>
            <p className="text-xs text-white/60">{subtitle}</p>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <div className="h-16 w-16 rounded-full flex items-center justify-center">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
              <circle 
                className="text-white/10" 
                strokeWidth="8"
                stroke="currentColor" 
                fill="transparent" 
                r="38" 
                cx="50" 
                cy="50" 
              />
              <circle 
                className={`${Icon ? 'text-white/30' : `text-${color}-500/70`}`}
                strokeWidth="8"
                strokeDasharray={`${percent * 2.4}, 240`}
                strokeLinecap="round" 
                stroke="currentColor" 
                fill="transparent" 
                r="38" 
                cx="50" 
                cy="50" 
                transform="rotate(-90 50 50)"
              />
            </svg>
            {Icon && <Icon className="h-6 w-6 text-white" />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;
