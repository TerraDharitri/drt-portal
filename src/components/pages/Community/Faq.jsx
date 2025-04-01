import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = ({ title, questions }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border rounded-lg bg-white shadow-sm">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center"
              onClick={() => toggleQuestion(index)}
            >
              <span className="font-medium text-gray-700">{item.question}</span>
              {expandedIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {expandedIndex === index && (
              <div className="px-6 py-4 text-gray-600 border-t">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Faq = () => {
  const generalQuestions = [
    {
      question: "What is Dharitri?",
      answer:
        "Dharitri is a highly scalable, fast, and secure blockchain platform for distributed apps, enterprise use cases, and the new internet economy.",
    },
    {
      question: "What is REWA?",
      answer:
        "REWA is the native token of the Dharitri network, used for staking, governance, and transactions within the ecosystem.",
    },
    {
      question: "How does Dharitri achieve scalability?",
      answer:
        "Dharitri uses advanced sharding technology and a unique Secure Proof of Stake consensus mechanism to achieve high throughput and scalability.",
    },
  ];

  const technicalQuestions = [
    {
      question: "How do I create a Dharitri wallet?",
      answer:
        "You can create a Dharitri wallet through our web wallet interface or by using one of our recommended wallet applications. The process involves generating a secure key pair and backing up your secret phrase.",
    },
    {
      question: "What programming languages are supported?",
      answer:
        "Dharitri supports smart contract development in multiple languages, with our primary focus on providing robust tools and frameworks for developers.",
    },
  ];

  const stakingQuestions = [
    {
      question: "How does staking work on Dharitri?",
      answer:
        "Staking on Dharitri allows token holders to participate in network security and earn rewards. You can stake your REWA tokens through validated nodes or delegation services.",
    },
    {
      question: "What are the minimum staking requirements?",
      answer:
        "The minimum staking amount and requirements are designed to be accessible while ensuring network security and stability.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center mt-20">
        Frequently Asked Questions
      </h1>

      <FAQSection title="General Questions" questions={generalQuestions} />

      <FAQSection title="Technical Questions" questions={technicalQuestions} />

      <FAQSection title="Staking & Rewards" questions={stakingQuestions} />
    </div>
  );
};

export default Faq;
