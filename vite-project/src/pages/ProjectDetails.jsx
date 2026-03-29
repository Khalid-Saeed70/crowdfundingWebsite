// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import API from "../services/api";

// const ProjectDetails = () => {
//   const { id } = useParams();

//   const [project, setProject] = useState(null);
//   const [amount, setAmount] = useState("");

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

//   // 🔥 INVEST FUNCTION
//   const handleInvest = async () => {
//     try {
//       const user = JSON.parse(localStorage.getItem("user"));

//       if (!user) {
//         alert("Please login as Investor first");
//         return;
//       }

//       if (user.role !== "INVESTOR") {
//         alert("Only Investors can invest");
//         return;
//       }

//       // 1️⃣ Create Investment
//       const invRes = await API.post("/investments", {
//         projectId: id,
//         amount: Number(amount),
//       });

//       const investmentId = invRes.data.data.investmentId;

//       // 2️⃣ Create Transaction
//       await API.post("/transactions", {
//         investmentId,
//         transactionId: "TXN_" + Date.now(),
//         amount: Number(amount),
//       });

//       alert("Investment Successful 🚀");

//     } catch (err) {
//       alert(err.response?.data?.message || "Error");
//     }
//   };

//   if (!project) return <p>Loading...</p>;

//   const percent =
//     (project.fundedAmount / project.targetAmount) * 100;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">{project.title}</h1>
//       <p>{project.description}</p>

//       <div className="bg-gray-200 h-3 mt-2 rounded">
//         <div
//           className="bg-green-500 h-3 rounded"
//           style={{ width: `${percent}%` }}
//         />
//       </div>

//       <p className="mt-2">
//         ₹{project.fundedAmount} / ₹{project.targetAmount}
//       </p>

//       {/* 💰 Invest Section */}
//       <div className="mt-4">
//         <input
//           type="number"
//           placeholder="Enter amount"
//           className="border p-2 mr-2"
//           onChange={(e) => setAmount(e.target.value)}
//         />

//         <button
//           onClick={handleInvest}
//           className="bg-blue-500 text-white px-4 py-2"
//         >
//           Invest
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

const ProjectDetails = () => {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [amount, setAmount] = useState("");

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

  // 🔥 INVEST FUNCTION
  const handleInvest = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

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

      // 1️⃣ Create Investment
      const invRes = await API.post("/investments", {
        projectId: id,
        amount: Number(amount),
      });

      const investmentId = invRes.data.data.investmentId;

      // 2️⃣ Create Transaction
      await API.post("/transactions", {
        investmentId,
        transactionId: "TXN_" + Date.now(),
        amount: Number(amount),
      });

      alert("Investment Successful 🚀");

      setAmount(""); // reset input
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  if (!project) return <p className="text-center mt-10">Loading...</p>;

  const percent = project.targetAmount
    ? (project.fundedAmount / project.targetAmount) * 100
    : 0;

  return (
    <div className="p-6 max-w-2xl mx-auto border rounded-xl shadow-md">
      
      {/* 📌 Title */}
      <h1 className="text-2xl font-bold">{project.title}</h1>

      {/* 📌 Description */}
      <p className="text-gray-600 mt-2">{project.description}</p>

      {/* 📊 Progress Bar */}
      <div className="mt-4 bg-gray-200 h-2 rounded">
        <div
          className="bg-green-500 h-2 rounded"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* 💰 Amount */}
      <p className="mt-2 font-medium">
        ₹{project.fundedAmount} / ₹{project.targetAmount}
      </p>

      {/* 💳 Invest Section */}
      <div className="mt-4 flex gap-2">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          className="border p-2 rounded w-full"
          onChange={(e) => setAmount(e.target.value)}
        />

        <button
          onClick={handleInvest}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Invest
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;