// import { useEffect, useState } from "react";
// import API from "../services/api";

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({});
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     fetchStats();
//     fetchProjects();
//   }, []);

//   // 📊 Dashboard Stats
//   const fetchStats = async () => {
//     try {
//       const res = await API.get("/admin/dashboard");
//       setStats(res.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // 📁 All Projects
//   const fetchProjects = async () => {
//     try {
//       const res = await API.get("/admin/projects");
//       setProjects(res.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // ✅ Approve Project
//   const handleApprove = async (id) => {
//     try {
//       await API.put(`/admin/projects/${id}/status`, {
//         status: "ACTIVE",
//       });

//       alert("Project Approved");
//       fetchProjects();
//     } catch (err) {
//       alert("Error");
//     }
//   };

//   // ❌ Reject Project
//   const handleReject = async (id) => {
//     try {
//       await API.put(`/admin/projects/${id}/status`, {
//         status: "FAILED",
//       });

//       alert("Project Rejected");
//       fetchProjects();
//     } catch (err) {
//       alert("Error");
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

//       {/* 📊 Stats */}
//       <div className="grid grid-cols-4 gap-4 mb-6">
//         <div className="border p-4">Users: {stats.totalUsers}</div>
//         <div className="border p-4">Projects: {stats.totalProjects}</div>
//         <div className="border p-4">Active: {stats.activeProjects}</div>
//         <div className="border p-4">
//           Fund: ₹{stats.totalFundRaised}
//         </div>
//       </div>

//       {/* 📁 Projects */}
//       <h2 className="text-xl mb-2">All Projects</h2>

//       {projects.map((p) => (
//         <div key={p._id} className="border p-3 mb-3">
//           <h3 className="font-bold">{p.title}</h3>
//           <p>Status: {p.status}</p>
//           <p>Creator: {p.creatorId?.name}</p>

//           <div className="mt-2 space-x-2">
//             <button
//               onClick={() => handleApprove(p._id)}
//               className="bg-green-500 text-white px-2 py-1"
//             >
//               Approve
//             </button>

//             <button
//               onClick={() => handleReject(p._id)}
//               className="bg-red-500 text-white px-2 py-1"
//             >
//               Reject
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdminDashboard;
import { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminDashboard() {
  const [stats, setStats] = useState({});
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchStats();
    fetchProjects();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await API.get("/admin/dashboard");
      setStats(res.data.data || {});
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await API.get("/admin/projects");
      setProjects(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  const handleApprove = async (id) => {
    try {
      await API.put(`/admin/projects/${id}/status`, {
        status: "ACTIVE",
      });
      fetchProjects();
    } catch {
      alert("Error");
    }
  };

  const handleReject = async (id) => {
    try {
      await API.put(`/admin/projects/${id}/status`, {
        status: "FAILED",
      });
      fetchProjects();
    } catch {
      alert("Error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard 👑</h1>
          <p className="text-blue-200">
            Manage users, projects and platform activity
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white/95 text-black rounded-2xl p-5 shadow-lg">
            <p className="text-sm text-gray-500">Users</p>
            <h2 className="text-2xl font-bold">{stats.totalUsers || 0}</h2>
          </div>

          <div className="bg-white/95 text-black rounded-2xl p-5 shadow-lg">
            <p className="text-sm text-gray-500">Projects</p>
            <h2 className="text-2xl font-bold">{stats.totalProjects || 0}</h2>
          </div>

          <div className="bg-white/95 text-black rounded-2xl p-5 shadow-lg">
            <p className="text-sm text-gray-500">Active</p>
            <h2 className="text-2xl font-bold">{stats.activeProjects || 0}</h2>
          </div>

          <div className="bg-white/95 text-black rounded-2xl p-5 shadow-lg">
            <p className="text-sm text-gray-500">Total Fund</p>
            <h2 className="text-2xl font-bold">
              ₹{stats.totalFundRaised || 0}
            </h2>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            All Projects 📁
          </h2>

          <div className="space-y-4">
            {projects.length > 0 ? (
              projects.map((p) => (
                <div
                  key={p._id}
                  className="bg-white/95 text-black rounded-2xl shadow-lg p-5 hover:scale-[1.01] transition"
                >
                  <div className="flex justify-between items-center">
                    
                    <div>
                      <h3 className="text-lg font-semibold">
                        {p.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Creator: {p.creatorId?.name || "Unknown"}
                      </p>
                      <p className="text-sm mt-1">
                        Status:{" "}
                        <span
                          className={`font-semibold ${
                            p.status === "ACTIVE"
                              ? "text-green-600"
                              : p.status === "PENDING"
                              ? "text-yellow-600"
                              : "text-red-600"
                          }`}
                        >
                          {p.status}
                        </span>
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApprove(p._id)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => handleReject(p._id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                      >
                        Reject
                      </button>
                    </div>

                  </div>
                </div>
              ))
            ) : (
              <p className="text-blue-200">No projects found</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}