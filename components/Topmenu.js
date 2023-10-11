import Link from 'next/link';
import { FaBell, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';

const TopMenu = ({ username }) => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-end">
         <div className="mx-2">Hello, {username}</div>
      {/* Notifications */}
      <Link href="/notifications" 
      className="mx-2"
      >
        <FaBell size={20} />
      </Link>

      {/* Messages */}
      <Link href="/messages"
      className="mx-2"
      >
        <FaEnvelope size={20} />
      </Link>

      {/* Settings */}
      <Link href="/settings"
      className="mx-2"
      >
        <FaCog size={20} />
      </Link>

      {/* Logout */}
      <Link href="/logout"
      className="mx-2"
      >
        <FaSignOutAlt size={20} />
      </Link>
    </div>
  );
};

export default TopMenu;
