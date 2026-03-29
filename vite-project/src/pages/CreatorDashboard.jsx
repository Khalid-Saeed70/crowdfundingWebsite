// import { useEffect, useState } from "react";
// import API from "../services/api";
// import { Link } from "react-router-dom";

// const CreatorDashboard = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchMyProjects = async () => {
//       try {
//         const res = await API.get("/projects/my/projects");
//         setProjects(res.data.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchMyProjects();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl mb-4">My Projects</h1>

//       <Link
//         to="/create"
//         className="bg-blue-500 text-white px-4 py-2"
//       >
//         + Create New Project
//       </Link>

//       <div className="mt-4">
//         {projects.map((p) => (
//           <div key={p._id} className="border p-3 mb-3">
//             <h2 className="font-bold">{p.title}</h2>
//             <p>Status: {p.status}</p>
//             <p>₹{p.fundedAmount} / ₹{p.targetAmount}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CreatorDashboard;
import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

export default function CreatorDashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchMyProjects = async () => {
      try {
        const res = await API.get("/projects/my/projects");
        setProjects(res.data.data || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMyProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Creator Dashboard 🎯</h1>
            <p className="text-blue-200">
              Manage your projects and track performance
            </p>
          </div>

          <Link
            to="/create"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-2 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition shadow-lg"
          >
            + Create Project
          </Link>
        </div>

        {/* Projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.length > 0 ? (
            projects.map((p) => {
              const raised = p.fundedAmount || 0;
              const goal = p.targetAmount || 1;
              const progress = Math.min((raised / goal) * 100, 100);

              return (
                <div
                  key={p._id}
                  className="bg-white/95 text-black rounded-3xl shadow-xl p-5 hover:scale-[1.03] transition duration-300"
                >
                  <h2 className="text-lg font-semibold mb-1">
                    {p.title}
                  </h2>

                  <p className="text-sm text-gray-600 mb-2">
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

                  {/* Progress */}
                  <div className="mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1 text-gray-600">
                      <span>₹{raised}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mb-3">
                    Goal: ₹{goal}
                  </p>

                  {/* Actions */}
                  <div className="flex justify-between">
                    <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                      View
                    </button>

                    <button className="text-sm bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300 transition">
                      Edit
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-blue-200">No projects created yet</p>
          )}
        </div>

      </div>
    </div>
  );
}