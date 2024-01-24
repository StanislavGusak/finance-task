import { useNavigate } from "react-router-dom";
import { VscWarning } from "react-icons/vsc";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="m-auto text-center w-80 bg-gray-100 p-4 rounded-xl drop-shadow-xl">
      <div className="flex items-center justify-center">
      <VscWarning className="w-8 h-8 text-red-500" />
      <i className="text-red-500 ml-3">error_outline</i>
      </div>
      <h2 className="text-2xl my-3 italic">Page not found</h2>
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-sky-500 rounded-full hover:bg-sky-800 hover:text-white"
      >
        Go back
      </button>
    </div>
  );
};

export default NotFound;
