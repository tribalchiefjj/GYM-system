// src/pages/Members.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Search, 
  Plus, 
  Filter, 
  UserRound, 
  MoreHorizontal,
  Edit,
  Trash,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';
import { motion } from 'framer-motion';
// Optional: If you need a token for auth, import your auth utility
// import { getToken } from '../utils/auth';

const Members = () => {
  // State for the fetched members
  const [members, setMembers] = useState([]);
  // State for the search input
  const [searchTerm, setSearchTerm] = useState('');
  // State to track which menu is open
  const [openMenu, setOpenMenu] = useState(null);

  // Fetch members from the API when the component mounts
  useEffect(() => {
    // Example with a JWT token if needed:
    // const token = getToken();

    axios.get('http://localhost:5000/api/members', {
      // headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {
      setMembers(res.data);
    })
    .catch((err) => {
      console.error('Error fetching members:', err);
    });
  }, []);

  // Filter members by search term
  const filteredMembers = members.filter((member) => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle the "more" menu for each row
  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold">Members</h1>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search members..."
              className="h-10 w-full rounded-md border border-input bg-background pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gym-blue text-white hover:bg-gym-blue/90 h-10 px-4 py-2">
            <Plus className="mr-2 h-4 w-4" />
            Add Member
          </button>
        </div>
      </div>
      
      {/* Members Table */}
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
        <div className="p-1">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b text-left font-medium">
                  <th className="p-4">Member</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Plan</th>
                  <th className="p-4">Joined</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Last Visit</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {filteredMembers.map((member, index) => (
                  <motion.tr 
                    key={member.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gym-lightblue flex items-center justify-center">
                          <UserRound className="h-5 w-5 text-gym-blue" />
                        </div>
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-xs text-muted-foreground">{member.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Mail className="mr-1 h-3 w-3" />
                          {member.email}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Phone className="mr-1 h-3 w-3" />
                          {member.phone}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      {member.plan}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        {member.joined}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        member.status === 'Active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {member.lastVisit}
                    </td>
                    <td className="p-4 text-right">
                      <div className="relative">
                        <button
                          onClick={() => toggleMenu(member.id)}
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 w-8 p-0"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                        {openMenu === member.id && (
                          <div className="absolute right-0 z-10 mt-1 w-36 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-card">
                            <div className="py-1">
                              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-muted transition-colors">
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </button>
                              <button className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors">
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

export default Members;
