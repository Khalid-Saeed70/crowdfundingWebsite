// // // import { useEffect, useState } from "react";
// // // import API from "../services/api";
// // // import ProjectCard from "../components/ProjectCard";

// // // const Home = () => {
// // //   const [projects, setProjects] = useState([]);

// // //   useEffect(() => {
// // //     const fetchProjects = async () => {
// // //       try {
// // //         const res = await API.get("/projects");
// // //         setProjects(res.data.data); // IMPORTANT
// // //       } catch (err) {
// // //         console.log(err);
// // //       }
// // //     };

// // //     fetchProjects();
// // //   }, []);

// // //   return (
// // //     <div className="p-4 grid grid-cols-3 gap-4">
// // //       {projects.map((project) => (
// // //         <ProjectCard key={project._id} project={project} />
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default Home;
// // import { useEffect, useState } from "react";
// // import API from "../services/api";
// // import ProjectCard from "../components/ProjectCard";

// // const Home = () => {
// //   const [projects, setProjects] = useState([]);

// //   useEffect(() => {
// //     const fetchProjects = async () => {
// //       try {
// //         const res = await API.get("/projects");
// //         setProjects(res.data.data); // IMPORTANT
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };

// //     fetchProjects();
// //   }, []);

// //  return (
// //   <div className="p-6">
// //     <h1 className="text-2xl font-bold mb-4">
// //       Explore Projects 🚀
// //     </h1>

// //     <div className="grid md:grid-cols-3 gap-6">
// //       {projects.map((project) => (
// //         <ProjectCard key={project._id} project={project} />
// //       ))}
// //     </div>
// //   </div>
// // );
// // };

// // export default Home;
// import { useEffect, useState } from "react";
// import API from "../services/api";
// import ProjectCard from "../components/ProjectCard";

// export default function Home() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await API.get("/projects");
//         setProjects(res.data.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900">
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         {/* Header */}
//         <div className="mb-8 text-white">
//           <h1 className="text-3xl font-bold">Explore Projects 🚀</h1>
//           <p className="text-blue-200 mt-1">
//             Discover and support innovative ideas
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {projects.length > 0 ? (
//             projects.map((project) => (
//               <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-5 hover:scale-[1.03] transition duration-300">
//                 <ProjectCard key={project._id} project={project} />
//               </div>
//             ))
//           ) : (
//             <p className="text-blue-200">No projects found</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import API from "../services/api";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects");
        setProjects(res.data.data || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Header */}
        <div className="mb-8 text-white">
          <h1 className="text-3xl font-bold">Explore Projects 🚀</h1>
          <p className="text-blue-200 mt-1">
            Discover and support innovative ideas
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                key={project._id} // ✅ FIXED (important)
                className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-5 hover:scale-[1.03] transition duration-300"
              >
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <p className="text-blue-200">No projects found</p>
          )}
        </div>
      </div>
    </div>
  );
}