import React from "react";
import { ChevronRight, Lock, Coins, TrendingUp, Activity } from "lucide-react";

const Staking = () => {
  const stakingDetails = {
    totalStaked: "0",
    apr: "12.5%",
    validators: 10,
    rewardsDistributed: "0 REWA",
  };

  const stakingOptions = [
    {
      title: "Secure Staking",
      description: "Lock your REWA tokens and earn consistent rewards",
      icon: <Lock className="text-blue-600 w-12 h-12" />,
      minStake: "100 REWA",
    },
    {
      title: "Flexible Delegation",
      description: "Participate in network security without running a node",
      icon: <Coins className="text-green-600 w-12 h-12" />,
      minStake: "50 REWA",
    },
  ];

  const stakingBenefits = [
    {
      icon: <TrendingUp className="text-purple-600 w-8 h-8" />,
      title: "Attractive Returns",
      description: "Earn up to 12.5% APR on your staked REWA tokens",
    },
    {
      icon: <Activity className="text-orange-600 w-8 h-8" />,
      title: "Network Security",
      description:
        "Contribute to Dharitri blockchain's decentralization and security",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-900 min-h-screen py-36 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-6xl font-extrabold mb-6 text-blue-800 drop-shadow-lg">
            Dharitri Staking
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Secure the Dharitri network and earn passive income by staking your
            REWA tokens
          </p>
        </section>

        {/* Staking Statistics */}
        <section className="grid grid-cols-4 gap-6 mb-16 bg-white p-6 rounded-lg shadow-lg">
          {Object.entries(stakingDetails).map(([key, value]) => (
            <div key={key} className="text-center">
              <h3 className="text-3xl font-bold text-blue-700">{value}</h3>
              <p className="text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, " $1").toLowerCase()}
              </p>
            </div>
          ))}
        </section>

        {/* Staking Options */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10">
            Choose Your Staking Method
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {stakingOptions.map((option) => (
              <div
                key={option.title}
                className="bg-white border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
              >
                {option.icon}
                <h3 className="text-2xl font-bold mt-4 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Minimum Stake: {option.minStake}
                  <ChevronRight className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white p-12 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-10">
            Why Stake with Dharitri?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {stakingBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start p-6 bg-gray-50 rounded-lg shadow-md"
              >
                {benefit.icon}
                <div className="ml-4">
                  <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Staking Guide */}
        <section className="mt-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Staking?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Follow our simple guide to begin earning rewards and supporting the
            Dharitri network
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors shadow-lg">
            Start Staking
          </button>
        </section>
      </div>
    </div>
  );
};

export default Staking;
