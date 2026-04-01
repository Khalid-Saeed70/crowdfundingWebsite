// // // // import { useEffect, useState } from "react";
// // // // import { useParams } from "react-router-dom";
// // // // import API from "../services/api";

// // // // const ProjectDetails = () => {
// // // //   const { id } = useParams();

// // // //   const [project, setProject] = useState(null);
// // // //   const [amount, setAmount] = useState("");

// // // //   useEffect(() => {
// // // //     const fetchProject = async () => {
// // // //       try {
// // // //         const res = await API.get(`/projects/${id}`);
// // // //         setProject(res.data.data);
// // // //       } catch (err) {
// // // //         console.log(err);
// // // //       }
// // // //     };

// // // //     fetchProject();
// // // //   }, [id]);

// // // //   // 🔥 INVEST FUNCTION
// // // //   const handleInvest = async () => {
// // // //     try {
// // // //       const user = JSON.parse(localStorage.getItem("user"));

// // // //       if (!user) {
// // // //         alert("Please login as Investor first");
// // // //         return;
// // // //       }

// // // //       if (user.role !== "INVESTOR") {
// // // //         alert("Only Investors can invest");
// // // //         return;
// // // //       }

// // // //       // 1️⃣ Create Investment
// // // //       const invRes = await API.post("/investments", {
// // // //         projectId: id,
// // // //         amount: Number(amount),
// // // //       });

// // // //       const investmentId = invRes.data.data.investmentId;

// // // //       // 2️⃣ Create Transaction
// // // //       await API.post("/transactions", {
// // // //         investmentId,
// // // //         transactionId: "TXN_" + Date.now(),
// // // //         amount: Number(amount),
// // // //       });

// // // //       alert("Investment Successful 🚀");

// // // //     } catch (err) {
// // // //       alert(err.response?.data?.message || "Error");
// // // //     }
// // // //   };

// // // //   if (!project) return <p>Loading...</p>;

// // // //   const percent =
// // // //     (project.fundedAmount / project.targetAmount) * 100;

// // // //   return (
// // // //     <div className="p-6">
// // // //       <h1 className="text-2xl font-bold">{project.title}</h1>
// // // //       <p>{project.description}</p>

// // // //       <div className="bg-gray-200 h-3 mt-2 rounded">
// // // //         <div
// // // //           className="bg-green-500 h-3 rounded"
// // // //           style={{ width: `${percent}%` }}
// // // //         />
// // // //       </div>

// // // //       <p className="mt-2">
// // // //         ₹{project.fundedAmount} / ₹{project.targetAmount}
// // // //       </p>

// // // //       {/* 💰 Invest Section */}
// // // //       <div className="mt-4">
// // // //         <input
// // // //           type="number"
// // // //           placeholder="Enter amount"
// // // //           className="border p-2 mr-2"
// // // //           onChange={(e) => setAmount(e.target.value)}
// // // //         />

// // // //         <button
// // // //           onClick={handleInvest}
// // // //           className="bg-blue-500 text-white px-4 py-2"
// // // //         >
// // // //           Invest
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProjectDetails;
// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import API from "../services/api";

// // const ProjectDetails = () => {
// //   const { id } = useParams();

// //   const [project, setProject] = useState(null);
// //   const [amount, setAmount] = useState("");

// //   useEffect(() => {
// //     const fetchProject = async () => {
// //       try {
// //         const res = await API.get(`/projects/${id}`);
// //         setProject(res.data.data);
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };

// //     fetchProject();
// //   }, [id]);

// //   // 🔥 INVEST FUNCTION
// //   const handleInvest = async () => {
// //     try {
// //       const user = JSON.parse(localStorage.getItem("user"));

// //       if (!user) {
// //         alert("Please login as Investor first");
// //         return;
// //       }

// //       if (user.role !== "INVESTOR") {
// //         alert("Only Investors can invest");
// //         return;
// //       }

// //       if (!amount || amount <= 0) {
// //         alert("Enter valid amount");
// //         return;
// //       }

// //       // 1️⃣ Create Investment
// //       const invRes = await API.post("/investments", {
// //         projectId: id,
// //         amount: Number(amount),
// //       });

// //       const investmentId = invRes.data.data.investmentId;

// //       // 2️⃣ Create Transaction
// //       await API.post("/transactions", {
// //         investmentId,
// //         transactionId: "TXN_" + Date.now(),
// //         amount: Number(amount),
// //       });

// //       alert("Investment Successful 🚀");

// //       setAmount(""); // reset input
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Error");
// //     }
// //   };

// //   if (!project) return <p className="text-center mt-10">Loading...</p>;

// //   const percent = project.targetAmount
// //     ? (project.fundedAmount / project.targetAmount) * 100
// //     : 0;

// //   return (
// //     <div className="p-6 max-w-2xl mx-auto border rounded-xl shadow-md">
      
// //       {/* 📌 Title */}
// //       <h1 className="text-2xl font-bold">{project.title}</h1>

// //       {/* 📌 Description */}
// //       <p className="text-gray-600 mt-2">{project.description}</p>

// //       {/* 📊 Progress Bar */}
// //       <div className="mt-4 bg-gray-200 h-2 rounded">
// //         <div
// //           className="bg-green-500 h-2 rounded"
// //           style={{ width: `${percent}%` }}
// //         />
// //       </div>

// //       {/* 💰 Amount */}
// //       <p className="mt-2 font-medium">
// //         ₹{project.fundedAmount} / ₹{project.targetAmount}
// //       </p>

// //       {/* 💳 Invest Section */}
// //       <div className="mt-4 flex gap-2">
// //         <input
// //           type="number"
// //           placeholder="Amount"
// //           value={amount}
// //           className="border p-2 rounded w-full"
// //           onChange={(e) => setAmount(e.target.value)}
// //         />

// //         <button
// //           onClick={handleInvest}
// //           className="bg-blue-500 text-white px-4 py-2 rounded"
// //         >
// //           Invest
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProjectDetails;
// // import { useEffect, useState } from "react";
// // import { useParams, useSearchParams } from "react-router-dom";
// // import API from "../services/api";

// // const ProjectDetails = () => {
// //   const { id } = useParams();
// //   const [searchParams] = useSearchParams();

// //   const mode = searchParams.get("mode") || "view"; // 👈 default view

// //   const [project, setProject] = useState(null);
// //   const [amount, setAmount] = useState("");

// //   const user = JSON.parse(localStorage.getItem("user"));

// //   useEffect(() => {
// //     const fetchProject = async () => {
// //       try {
// //         const res = await API.get(`/projects/${id}`);
// //         setProject(res.data.data);
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };

// //     fetchProject();
// //   }, [id]);

// //   const handleInvest = async () => {
// //     try {
// //       if (!user) {
// //         alert("Please login as Investor first");
// //         return;
// //       }

// //       if (user.role !== "INVESTOR") {
// //         alert("Only Investors can invest");
// //         return;
// //       }

// //       if (!amount || amount <= 0) {
// //         alert("Enter valid amount");
// //         return;
// //       }

// //       const invRes = await API.post("/investments", {
// //         projectId: id,
// //         amount: Number(amount),
// //       });

// //       const investmentId = invRes.data.data.investmentId;

// //       await API.post("/transactions", {
// //         investmentId,
// //         transactionId: "TXN_" + Date.now(),
// //         amount: Number(amount),
// //       });

// //       alert("Investment Successful 🚀");
// //       setAmount("");

// //     } catch (err) {
// //       alert(err.response?.data?.message || "Error");
// //     }
// //   };

// //   if (!project)
// //     return <p className="text-center mt-10">Loading...</p>;

// //   const percent = project.targetAmount
// //     ? (project.fundedAmount / project.targetAmount) * 100
// //     : 0;

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      
// //       {/* WHITE CARD */}
// //       <div className="bg-white w-full max-w-2xl p-6 rounded-2xl shadow-lg text-black">

// //         {/* Title */}
// //         <h1 className="text-2xl font-bold mb-2">
// //           {project.title}
// //         </h1>

// //         {/* Description */}
// //         <p className="mb-3">{project.description}</p>

// //         {/* Progress */}
// //         <div className="w-full bg-gray-200 h-2 rounded">
// //           <div
// //             className="bg-green-500 h-2 rounded"
// //             style={{ width: `${percent}%` }}
// //           />
// //         </div>

// //         {/* Amount */}
// //         <p className="mt-2 font-medium">
// //           ₹{project.fundedAmount} / ₹{project.targetAmount}
// //         </p>

// //         {/* Extra Info */}
// //         <div className="mt-4 text-sm space-y-1">
// //           <p><b>Category:</b> {project.category}</p>
// //           <p><b>Status:</b> {project.status}</p>
// //           <p>
// //             <p><b>Description:</b> {project.description}</p>
// //           <p></p>
// //           <p><b>TargerAmount:</b> {project.targetAmount}</p>
// //           <p></p>
// //           <p><b>FundedAmount:</b> {project.fundedAmount}</p>
// //           <p></p>
// //             <b>Deadline:</b>{" "}
// //             {new Date(project.deadline).toDateString()}
// //           </p>
          

// //         </div>

// //         {/* 🔥 INVEST SECTION */}
// //         {mode === "invest" && (
// //           <div className="mt-6 border-t pt-4">

// //             {!user ? (
// //               <p className="text-red-500">
// //                 Please login as Investor to invest
// //               </p>
// //             ) : user.role !== "INVESTOR" ? (
// //               <p className="text-red-500">
// //                 Only Investors can invest
// //               </p>
// //             ) : (
// //               <div className="flex gap-2">
// //                 <input
// //                   type="number"
// //                   placeholder="Enter amount"
// //                   value={amount}
// //                   className="border p-2 rounded w-full"
// //                   onChange={(e) => setAmount(e.target.value)}
// //                 />

// //                 <button
// //                   onClick={handleInvest}
// //                   className="bg-blue-600 text-white px-4 py-2 rounded"
// //                 >
// //                   Invest
// //                 </button>
// //               </div>
// //             )}

// //           </div>
// //         )}

// //       </div>
// //     </div>
// //   );
// // };

// // export default ProjectDetails;
// import { useEffect, useState } from "react";
// import { useParams, useSearchParams, useNavigate } from "react-router-dom";
// import API from "../services/api";

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate(); // ✅ for back/close

//   const mode = searchParams.get("mode") || "view"; // default view

//   const [project, setProject] = useState(null);
//   const [amount, setAmount] = useState("");

//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const res = await API.get(`/projects/${id}`);
//         setProject(res.data.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchProject();
//   }, [id]);

//   const handleInvest = async () => {
//     try {
//       if (!user) {
//         alert("Please login as Investor first");
//         return;
//       }

//       if (user.role !== "INVESTOR") {
//         alert("Only Investors can invest");
//         return;
//       }

//       if (!amount || amount <= 0) {
//         alert("Enter valid amount");
//         return;
//       }

//       const invRes = await API.post("/investments", {
//         projectId: id,
//         amount: Number(amount),
//       });

//       const investmentId = invRes.data.data.investmentId;

//       await API.post("/transactions", {
//         investmentId,
//         transactionId: "TXN_" + Date.now(),
//         amount: Number(amount),
//       });

//       alert("Investment Successful 🚀");
//       setAmount("");

//     } catch (err) {
//       alert(err.response?.data?.message || "Error");
//     }
//   };

//   if (!project) return <p className="text-center mt-10">Loading...</p>;

//   const percent = project.targetAmount
//     ? (project.fundedAmount / project.targetAmount) * 100
//     : 0;

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      
//       {/* WHITE CARD */}
//       <div className="bg-white w-full max-w-2xl p-6 rounded-2xl shadow-lg text-black relative">

//         {/* CLOSE BUTTON */}
//         <button
//           onClick={() => navigate(-1)}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold"
//         >
//           ✕
//         </button>

//         {/* Title */}
//         <h1 className="text-2xl font-bold mb-2">{project.title}</h1>

//         {/* Description */}
//         <p className="mb-3">{project.description}</p>

//         {/* Progress */}
//         <div className="w-full bg-gray-200 h-2 rounded">
//           <div
//             className="bg-green-500 h-2 rounded"
//             style={{ width: `${percent}%` }}
//           />
//         </div>

//         {/* Amount */}
//         <p className="mt-2 font-medium">
//           ₹{project.fundedAmount} / ₹{project.targetAmount}
//         </p>

//         {/* Extra Info */}
//         <div className="mt-4 text-sm space-y-1">
//           <p><b>Category:</b> {project.category}</p>
//           <p><b>Status:</b> {project.status}</p>
//           <p><b>Description:</b> {project.description}</p>
//           <p><b>Target Amount:</b> {project.targetAmount}</p>
//           <p><b>Funded Amount:</b> {project.fundedAmount}</p>
//           <p><b>Deadline:</b> {new Date(project.deadline).toDateString()}</p>
//         </div>

//         {/* INVEST SECTION */}
//         {mode === "invest" && (
//           <div className="mt-6 border-t pt-4">

//             {!user ? (
//               <p className="text-red-500">Please login as Investor to invest</p>
//             ) : user.role !== "INVESTOR" ? (
//               <p className="text-red-500">Only Investors can invest</p>
//             ) : (
//               <div className="flex gap-2">
//                 <input
//                   type="number"
//                   placeholder="Enter amount"
//                   value={amount}
//                   className="border p-2 rounded w-full"
//                   onChange={(e) => setAmount(e.target.value)}
//                 />

//                 <button
//                   onClick={handleInvest}
//                   className="bg-blue-600 text-white px-4 py-2 rounded"
//                 >
//                   Invest
//                 </button>
//               </div>
//             )}

//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
import { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import API from "../services/api";

const ProjectDetails = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const mode = searchParams.get("mode") || "view"; // default view

  const [project, setProject] = useState(null);
  const [amount, setAmount] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await API.get(`/projects/${id}`);
        setProject(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProject();
  }, [id]);

  const handleInvest = async () => {
    try {
      if (!user) {
        alert("Please login as Investor first");
        return;
      }

      if (user.role !== "INVESTOR") {
        alert("Only Investors can invest");
        return;
      }

      if (!amount || amount <= 0) {
        alert("Enter valid amount");
        return;
      }

      const invRes = await API.post("/investments", {
        projectId: id,
        amount: Number(amount),
      });

      const investmentId = invRes.data.data.investmentId;

      await API.post("/transactions", {
        investmentId,
        transactionId: "TXN_" + Date.now(),
        amount: Number(amount),
      });

      alert("Investment Successful 🚀");
      setAmount("");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  if (!project) return <p className="text-center mt-10">Loading...</p>;

  const percent = project.targetAmount
    ? (project.fundedAmount / project.targetAmount) * 100
    : 0;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div
        className={`w-full max-w-2xl p-6 rounded-2xl shadow-lg relative ${
          mode === "view" || mode === "invest"
            ? "bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white"
            : "bg-white text-black"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className={`absolute top-4 right-4 font-bold ${
            mode === "view" || mode === "invest"
              ? "text-white hover:text-gray-200"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          ✕
        </button>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-2">{project.title}</h1>

        {/* Description */}
        <p className="mb-3">{project.description}</p>

        {/* Progress */}
        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className="bg-green-500 h-2 rounded"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Amount */}
        <p className="mt-2 font-medium">
          ₹{project.fundedAmount} / ₹{project.targetAmount}
        </p>

        {/* Extra Info */}
        <div className="mt-4 text-sm space-y-1">
          <p>
            <b>Category:</b> {project.category}
          </p>
          <p>
            <b>Status:</b> {project.status}
          </p>
          <p>
            <b>Description:</b> {project.description}
          </p>
          <p>
            <b>Target Amount:</b> {project.targetAmount}
          </p>
          <p>
            <b>Funded Amount:</b> {project.fundedAmount}
          </p>
          <p>
            <b>Deadline:</b> {new Date(project.deadline).toDateString()}
          </p>
        </div>

        {/* INVEST SECTION */}
        {mode === "invest" && (
          <div className="mt-6 border-t pt-4">
            {!user ? (
              <p className="text-red-300">Please login as Investor to invest</p>
            ) : user.role !== "INVESTOR" ? (
              <p className="text-red-300">Only Investors can invest</p>
            ) : (
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  className="border p-2 rounded w-full text-black"
                  onChange={(e) => setAmount(e.target.value)}
                />
                <button
                  onClick={handleInvest}
                  className="px-4 py-2 rounded bg-white text-black"
                >
                  Invest
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
