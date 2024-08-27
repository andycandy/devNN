import { FaSearch } from "react-icons/fa"; // Search icon from react-icons
import { AiOutlineUser } from "react-icons/ai"; // Profile picture icon from react-icons
import nnUrl from "../assets/NN.png";
import StorageMeter from "../components/CircularProgress";

interface DashHeaderProps {
  isExpanded: boolean;
}

const DashHeader: React.FC<DashHeaderProps> = ({ isExpanded }) => {
  return (
    <header
      className={`bg-[#797B82] bg-opacity-30 backdrop-blur-lg h-20 flex items-center justify-between
          px-4 shadow-md transform transition-transform duration-300`}
    >
      {/* Website Logo */}
      <div className="flex flex-row items-center">
        <div className="flex items-center">
          <img
            src={nnUrl}
            alt="Website Logo"
            className="mr-4 w-36"
            style={{
              pointerEvents: "none", // Disable pointer events to prevent interactions with hidden part
            }}
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center mx-4 p-2 shadow-inner drop-shadow-md rounded-full
         font-ABeeZee bg-white w-96">
          <FaSearch className="mx-4 text-gray-400" />
          <input
            type="text"
            placeholder="Find something"
            className="w-[100%] font-ABeeZee bg-transparent text-[#616266] focus:outline-none "
          />
        </div>
      </div>

      <div className="flex">
        <StorageMeter percent={69} />

        {/* Profile Picture */}
        <div className="flex items-center mx-4">
          <AiOutlineUser className="text-3xl" />
        </div>
      </div>
    </header>
  );
};

export default DashHeader;
