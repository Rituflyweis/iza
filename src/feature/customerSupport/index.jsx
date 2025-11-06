import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import CustomerSupportHeading from './components/CustomerSupportHeading';
import CustomerSupportTable from './components/CustomerSupportTable';
import FAQList from './components/FAQList';
import ContactSupportTable from './components/ContactSupportTable';
import ChatPanel from './components/ChatPanel';

const CustomerSupport = () => {
  const [tab, setTab] = useState(1); // Default to "Ticket Raised"

  return (
    <div className="w-full">
      <CustomerSupportHeading />
      
      {/* Tabs */}
      <div className="mb-6">
        <Tabs value={tab} onChange={(_, v) => setTab(v)}>
          <Tab disableRipple label="FAQ" />
          <Tab disableRipple label="Ticket Raised" />
          <Tab disableRipple label="Contact Support" />
          <Tab
            disableRipple
            label={
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Chat Panel
              </div>
            }
          />
        </Tabs>
      </div>

      {/* Content */}
      <div>
        {tab === 0 && <FAQList />}
        {tab === 1 && <CustomerSupportTable />}
        {tab === 2 && <ContactSupportTable />}
        {tab === 3 && <ChatPanel />}
      </div>
    </div>
  );
};

export default CustomerSupport;


