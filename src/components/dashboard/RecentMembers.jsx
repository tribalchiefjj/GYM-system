
import { useState } from 'react';
import { MoreHorizontal, Edit, Trash, UserRound } from 'lucide-react';
import { motion } from 'framer-motion';

const members = [
  {
    id: 1,
    name: 'Alex Johnson',
    plan: 'Premium',
    joined: '12 May 2023',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Sara Williams',
    plan: 'Basic',
    joined: '03 Jun 2023',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Mike Brown',
    plan: 'Premium',
    joined: '17 Jun 2023',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Jessica Taylor',
    plan: 'Standard',
    joined: '28 Jun 2023',
    status: 'Inactive',
  },
  {
    id: 5,
    name: 'David Miller',
    plan: 'Basic',
    joined: '05 Jul 2023',
    status: 'Active',
  }
];

const RecentMembers = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div className="bg-card rounded-xl shadow-md p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recent Members</h3>
        <a href="/members" className="text-sm text-gym-purpleHighlight hover:underline">View all</a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gym-purpleLight/20 text-left">
              <th className="pb-3 font-medium text-white/70 text-sm">Member</th>
              <th className="pb-3 font-medium text-white/70 text-sm">Plan</th>
              <th className="pb-3 font-medium text-white/70 text-sm">Joined</th>
              <th className="pb-3 font-medium text-white/70 text-sm">Status</th>
              <th className="pb-3 font-medium text-white/70 text-sm text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <motion.tr 
                key={member.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="border-b last:border-0 border-gym-purpleLight/20"
              >
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gym-purpleProgress/20 flex items-center justify-center">
                      <UserRound className="h-4 w-4 text-gym-purpleHighlight" />
                    </div>
                    <span className="font-medium text-white">{member.name}</span>
                  </div>
                </td>
                <td className="py-3 text-white/90">{member.plan}</td>
                <td className="py-3 text-white/70">{member.joined}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    member.status === 'Active'
                      ? 'bg-green-900/30 text-green-400'
                      : 'bg-red-900/30 text-red-400'
                  }`}>
                    {member.status}
                  </span>
                </td>
                <td className="py-3 text-right">
                  <div className="relative inline-block">
                    <button
                      onClick={() => toggleMenu(member.id)}
                      className="p-1 rounded-md hover:bg-gym-purpleDark transition-colors"
                    >
                      <MoreHorizontal className="h-4 w-4 text-white/70" />
                    </button>
                    {openMenu === member.id && (
                      <div className="absolute right-0 z-10 mt-1 w-32 rounded-md bg-gym-purpleCard shadow-lg ring-1 ring-gym-purpleLight/20 p-1">
                        <button className="flex w-full items-center gap-2 rounded-md px-2 py-1 text-sm text-white/90 hover:bg-gym-purpleDark transition-colors">
                          <Edit className="h-4 w-4" />
                          Edit
                        </button>
                        <button className="flex w-full items-center gap-2 rounded-md px-2 py-1 text-sm text-red-400 hover:bg-red-950/20 transition-colors">
                          <Trash className="h-4 w-4" />
                          Delete
                        </button>
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
  );
};

export default RecentMembers;
