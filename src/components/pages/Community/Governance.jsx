import React from "react";
import { Card } from "../../ui/card";

const Governance = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Dharitri Governance
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Shape the future of the Dharitri ecosystem through community-driven
            governance
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white shadow-sm">
              <h3 className="font-bold text-lg mb-2">Total Value Locked</h3>
              <p className="text-2xl font-bold text-blue-600">$XXM</p>
            </Card>
            <Card className="p-6 bg-white shadow-sm">
              <h3 className="font-bold text-lg mb-2">Active Proposals</h3>
              <p className="text-2xl font-bold text-blue-600">XX</p>
            </Card>
            <Card className="p-6 bg-white shadow-sm">
              <h3 className="font-bold text-lg mb-2">REWA Staked</h3>
              <p className="text-2xl font-bold text-blue-600">XXM REWA</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            How Dharitri Governance Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-bold mb-2">Create Proposal</h3>
              <p className="text-gray-600">
                Submit your proposal for improving the Dharitri ecosystem
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-bold mb-2">Community Discussion</h3>
              <p className="text-gray-600">
                Engage in discussion and refine proposals with the community
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-bold mb-2">Voting Period</h3>
              <p className="text-gray-600">
                REWA holders vote to accept or reject proposals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proposals Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Active Proposals
          </h2>
          <div className="space-y-4">
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Example Proposal #1
                  </h3>
                  <p className="text-gray-600">
                    Proposal to improve staking rewards distribution
                  </p>
                </div>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">
                  Active
                </span>
              </div>
            </Card>
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Example Proposal #2
                  </h3>
                  <p className="text-gray-600">
                    Protocol upgrade implementation timeline
                  </p>
                </div>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  Pending
                </span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Governance Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 bg-white text-center">
              <p className="text-sm text-gray-600 mb-1">Total Proposals</p>
              <p className="text-2xl font-bold text-blue-600">XX</p>
            </Card>
            <Card className="p-6 bg-white text-center">
              <p className="text-sm text-gray-600 mb-1">Accepted Proposals</p>
              <p className="text-2xl font-bold text-blue-600">XX</p>
            </Card>
            <Card className="p-6 bg-white text-center">
              <p className="text-sm text-gray-600 mb-1">Total Voters</p>
              <p className="text-2xl font-bold text-blue-600">XXK</p>
            </Card>
            <Card className="p-6 bg-white text-center">
              <p className="text-sm text-gray-600 mb-1">Avg. Participation</p>
              <p className="text-2xl font-bold text-blue-600">XX%</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Governance;
