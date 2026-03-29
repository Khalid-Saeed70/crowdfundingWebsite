// import { useState } from "react";
// import API from "../services/api";
// import { useNavigate } from "react-router-dom";

// const CreateProject = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     category: "",
//     targetAmount: "",
//     deadline: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await API.post("/projects", form);
//       alert("Project Created (Draft)");
//       navigate("/creator");
//     } catch (err) {
//       alert(err.response?.data?.message || "Error");
//     }
//   };

//   return (
//     <div className="flex justify-center mt-10">
//       <form onSubmit={handleSubmit} className="border p-6 w-96">
//         <h2 className="text-xl mb-4">Create Project</h2>

//         <input className="border p-2 w-full mb-3" placeholder="Title"
//           onChange={(e)=>setForm({...form,title:e.target.value})}/>

//         <textarea className="border p-2 w-full mb-3" placeholder="Description"
//           onChange={(e)=>setForm({...form,description:e.target.value})}/>

//         <input className="border p-2 w-full mb-3" placeholder="Category"
//           onChange={(e)=>setForm({...form,category:e.target.value})}/>

//         <input type="number" className="border p-2 w-full mb-3" placeholder="Target Amount"
//           onChange={(e)=>setForm({...form,targetAmount:e.target.value})}/>

//         <input type="date" className="border p-2 w-full mb-3"
//           onChange={(e)=>setForm({...form,deadline:e.target.value})}/>

//         <button className="bg-green-500 text-white w-full p-2">
//           Create
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateProject;
import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function CreateProject() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    targetAmount: "",
    deadline: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/projects", form);
      alert("Project Created (Draft)");
      navigate("/creator");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
      
      <div className="bg-white/95 text-black backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-lg">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Create Project 🚀</h1>
          <p className="text-gray-500 text-sm">
            Turn your idea into reality by raising funds
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="text"
            placeholder="Project Title"
            className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            required
          />

          <textarea
            placeholder="Project Description"
            rows="3"
            className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            required
          ></textarea>

          <input
            type="text"
            placeholder="Category (Tech, Health, etc.)"
            className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          />

          <input
            type="number"
            placeholder="Target Amount (₹)"
            className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, targetAmount: e.target.value })
            }
            required
          />

          <input
            type="date"
            className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, deadline: e.target.value })
            }
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition font-semibold shadow-lg"
          >
            Create Project
          </button>
        </form>

        {/* Footer Tip */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          Tip: Add a clear title and description to attract more investors 💡
        </p>

      </div>
    </div>
  );
}