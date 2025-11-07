import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      {/* Sidebar */}
      <Sidebar mobileOpen={mobileOpen} onMobileClose={handleDrawerToggle} />

      {/* Main Content Area */}
      <main className="flex-grow w-full md:w-[calc(100%-280px)] md:ml-[280px] flex flex-col overflow-hidden bg-[#F5F5F5]">
        {/* Page Content */}
        <div className="flex-grow pt-4 md:pt-6 pr-4 md:pr-6 pb-4 md:pb-6 pl-0 bg-[#F5F5F5] overflow-auto w-full">
          <div className="w-full bg-white border border-[#e0e0e0] rounded-xl p-3 md:p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] min-h-screen">
            {/* Header inside the same card */}
            <Header onMenuClick={handleDrawerToggle} embedded />
            
            {/* Page children */}
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;



