import { Search, NotificationsOutlined } from '@mui/icons-material';

const Header = ({ onMenuClick, embedded = false }) => {
  return (
    <div
      className={`w-full bg-white border-b border-[#e0e0e0] px-0 py-0 mb-3 md:mb-4 ${
        embedded ? 'static' : 'sticky top-0'
      } ${embedded ? 'z-[1]' : 'z-[1100]'}`}
    >
      <div className="flex items-center justify-between px-3 md:px-4 py-3">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          aria-label="open drawer"
          className="mr-2 md:hidden p-2 rounded hover:bg-gray-100"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <div className="w-full h-0.5 bg-black rounded-sm" />
            <div className="w-full h-0.5 bg-black rounded-sm" />
            <div className="w-full h-0.5 bg-black rounded-sm" />
          </div>
        </button>

        {/* Search Bar */}
        <div className="flex items-center bg-[#F5F5F5] rounded-lg px-4 py-2 flex-1 max-w-full md:max-w-[400px] mr-4 md:mr-8">
          <Search className="text-[#9E9E9E] text-xl mr-3" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 text-sm bg-transparent border-none outline-none placeholder:text-[#9E9E9E] placeholder:opacity-100"
          />
        </div>

        {/* Right Section - Notifications & User Profile */}
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          <button className="text-[#5A6678] p-2 rounded hover:bg-[rgba(248,6,157,0.1)] transition-colors">
            <NotificationsOutlined />
          </button>

          {/* User Avatar & Name */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Alice Whitaker"
                onError={(e) => {
                  e.target.src = 'https://ui-avatars.com/api/?name=Alice+Whitaker&background=F8069D&color=fff&size=128';
                }}
                className="w-full h-full rounded-full object-cover border-2 border-[#F8069D] box-border block"
              />
            </div>
            <span className="hidden sm:block text-[#1A1A1A] text-sm font-semibold">
              Alice Whitaker
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

