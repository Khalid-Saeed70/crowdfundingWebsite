// import { useNavigate } from "react-router-dom";

// const ProjectCard = ({ project }) => {
//   const navigate = useNavigate();

//   const percent =
//     (project.fundedAmount / project.targetAmount) * 100;

//   return (
//     <div className="border p-4 rounded shadow">
//       <h2 className="text-xl font-bold">{project.title}</h2>
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

//       <button
//         onClick={() => navigate(`/project/${project._id}`)}
//         className="bg-blue-500 text-white px-3 py-1 mt-2"
//       >
//         View & Invest
//       </button>
//     </div>
//   );
// };

// export default ProjectCard;
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const percent =
    (project.fundedAmount / project.targetAmount) * 100;

  return (
    <div className="card">
      <h2 className="text-lg font-bold mb-1">{project.title}</h2>
      <p className="text-sm text-gray-600 mb-2">
        {project.description}
      </p>

      {/* Progress */}
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-blue-600 h-2 rounded"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="text-sm mt-2">
        ₹{project.fundedAmount} raised of ₹{project.targetAmount}
      </p>

      <button
        onClick={() => navigate(`/project/${project._id}`)}
        className="btn btn-primary mt-3 w-full"
      >
        View & Invest
      </button>
    </div>
  );
};

export default ProjectCard;
