
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

// Mock data for blockchain transactions
const transactions = [
  { id: '0x8f7d...3a2b', from: 'Red Cross', to: 'Miami Relief', amount: 25000, timestamp: '2023-10-15 14:22:45', status: 'Completed' },
  { id: '0x3e1c...9d4f', from: 'UNICEF', to: 'Houston Medical', amount: 42000, timestamp: '2023-10-14 09:18:32', status: 'Completed' },
  { id: '0x6b9a...2c7d', from: 'Save the Children', to: 'LA Shelter', amount: 18500, timestamp: '2023-10-13 16:45:07', status: 'Completed' },
  { id: '0x1f4e...7a9b', from: 'WHO', to: 'SF Emergency', amount: 33750, timestamp: '2023-10-12 11:37:29', status: 'Completed' },
  { id: '0x5d2e...8c3f', from: 'Doctors Without Borders', to: 'NY Medical', amount: 51200, timestamp: '2023-10-11 13:22:14', status: 'Completed' },
];

const BlockchainTransactions = () => {
  const [activeTab, setActiveTab] = useState('transactions');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="blockchain" 
      className="py-24 px-6"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium mb-4 inline-block">
            BLOCKCHAIN POWERED
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Transparent Fund Distribution
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our blockchain technology ensures complete transparency in how disaster relief funds are distributed, allowing donors to track exactly where their contributions go.
          </p>
        </div>
        
        <div 
          className={cn(
            "rounded-xl overflow-hidden shadow-2xl neo-effect transition-all duration-1000 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
          <div className="bg-white rounded-t-xl border-b border-gray-100">
            <div className="flex">
              <button 
                className={cn(
                  "px-6 py-4 text-sm font-medium transition-colors",
                  activeTab === 'transactions' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                )}
                onClick={() => setActiveTab('transactions')}
              >
                Transactions
              </button>
              <button 
                className={cn(
                  "px-6 py-4 text-sm font-medium transition-colors",
                  activeTab === 'analytics' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                )}
                onClick={() => setActiveTab('analytics')}
              >
                Analytics
              </button>
              <button 
                className={cn(
                  "px-6 py-4 text-sm font-medium transition-colors",
                  activeTab === 'contracts' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                )}
                onClick={() => setActiveTab('contracts')}
              >
                Smart Contracts
              </button>
            </div>
          </div>
          
          <div className="bg-white p-6">
            {activeTab === 'transactions' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Transaction ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">From</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">To</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Amount (USD)</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Timestamp</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx, index) => (
                      <tr 
                        key={tx.id} 
                        className={cn(
                          "transition-colors hover:bg-gray-50",
                          index !== transactions.length - 1 ? "border-b border-gray-100" : ""
                        )}
                      >
                        <td className="px-4 py-4 text-sm text-blue-600 font-mono">{tx.id}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{tx.from}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{tx.to}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">${tx.amount.toLocaleString()}</td>
                        <td className="px-4 py-4 text-sm text-gray-600">{tx.timestamp}</td>
                        <td className="px-4 py-4 text-sm">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            {tx.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'analytics' && (
              <div className="flex flex-col space-y-6">
                <div className="text-center py-8">
                  <h3 className="text-lg font-medium mb-4">Fund Distribution by Disaster Type</h3>
                  <div className="h-64 mx-auto">
                    {/* Simple chart visualization */}
                    <div className="flex h-full items-end justify-center space-x-6">
                      <div className="flex flex-col items-center">
                        <div className="w-16 bg-blue-500 rounded-t-md" style={{ height: '70%' }}></div>
                        <span className="mt-2 text-xs text-gray-600">Flood</span>
                        <span className="text-sm font-medium">$142,500</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 bg-cyan-500 rounded-t-md" style={{ height: '50%' }}></div>
                        <span className="mt-2 text-xs text-gray-600">Earthquake</span>
                        <span className="text-sm font-medium">$98,750</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 bg-teal-500 rounded-t-md" style={{ height: '85%' }}></div>
                        <span className="mt-2 text-xs text-gray-600">Hurricane</span>
                        <span className="text-sm font-medium">$217,200</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 bg-green-500 rounded-t-md" style={{ height: '35%' }}></div>
                        <span className="mt-2 text-xs text-gray-600">Wildfire</span>
                        <span className="text-sm font-medium">$63,800</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 bg-lime-500 rounded-t-md" style={{ height: '20%' }}></div>
                        <span className="mt-2 text-xs text-gray-600">Drought</span>
                        <span className="text-sm font-medium">$42,150</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Total Funds Distributed</h4>
                    <p className="text-3xl font-bold text-gray-900">$564,400</p>
                    <div className="mt-4 flex items-center">
                      <span className="text-green-600 text-sm font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                        12.5%
                      </span>
                      <span className="text-xs text-gray-600 ml-2">from last month</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Number of Transactions</h4>
                    <p className="text-3xl font-bold text-gray-900">297</p>
                    <div className="mt-4 flex items-center">
                      <span className="text-green-600 text-sm font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                        8.3%
                      </span>
                      <span className="text-xs text-gray-600 ml-2">from last month</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Organizations Assisted</h4>
                    <p className="text-3xl font-bold text-gray-900">42</p>
                    <div className="mt-4 flex items-center">
                      <span className="text-green-600 text-sm font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                        15.7%
                      </span>
                      <span className="text-xs text-gray-600 ml-2">from last month</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'contracts' && (
              <div className="flex flex-col space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">How Our Smart Contracts Work</h3>
                  <p className="text-gray-700 mb-6">
                    Our smart contracts automate fund distribution based on predefined conditions, ensuring immediate aid when disasters strike without bureaucratic delays.
                  </p>
                  
                  <div className="flex flex-col space-y-6">
                    <div className="flex">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-blue-500 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-base font-medium mb-2">Condition Triggering</h4>
                        <p className="text-sm text-gray-600">Smart contracts monitor real-time data feeds for disaster indicators like earthquake magnitude or flood levels.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-blue-500 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-base font-medium mb-2">Automatic Execution</h4>
                        <p className="text-sm text-gray-600">When predefined conditions are met, funds are automatically released to verified aid organizations in the affected area.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-blue-500 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-base font-medium mb-2">Transparent Verification</h4>
                        <p className="text-sm text-gray-600">All transactions are recorded on the blockchain, providing an immutable audit trail accessible to donors and recipients.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="text-base font-medium mb-4 text-blue-800">Sample Smart Contract Code</h4>
                  <pre className="bg-white p-4 rounded-md text-xs overflow-x-auto font-mono text-gray-800 border border-gray-200">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DisasterReliefFund {
    address public owner;
    mapping(address => bool) public verifiedOrganizations;
    mapping(string => DisasterZone) public disasterZones;
    
    struct DisasterZone {
        string name;
        uint256 threshold;
        uint256 fundsAllocated;
        bool active;
    }
    
    event FundsReleased(string zone, address recipient, uint256 amount);
    
    constructor() {
        owner = msg.sender;
    }
    
    function addVerifiedOrganization(address _organization) external {
        require(msg.sender == owner, "Not authorized");
        verifiedOrganizations[_organization] = true;
    }
    
    function setupDisasterZone(
        string memory _zoneId,
        string memory _name,
        uint256 _threshold
    ) external {
        require(msg.sender == owner, "Not authorized");
        disasterZones[_zoneId] = DisasterZone(_name, _threshold, 0, true);
    }
    
    function triggerFundRelease(
        string memory _zoneId,
        address _recipient,
        uint256 _amount,
        uint256 _disasterMagnitude
    ) external {
        DisasterZone storage zone = disasterZones[_zoneId];
        require(zone.active, "Zone not active");
        require(verifiedOrganizations[_recipient], "Not a verified organization");
        require(_disasterMagnitude >= zone.threshold, "Threshold not met");
        
        // Logic to transfer funds would go here
        zone.fundsAllocated += _amount;
        
        emit FundsReleased(_zoneId, _recipient, _amount);
    }
}`}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainTransactions;
