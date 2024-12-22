"use client"

import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaChevronUp, FaChevronDown } from "react-icons/fa";

const Faq = () => {
    const faqData = [
        {
            question: "What is RMax?",
            answer:
                "RMax is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.",
        },
        {
            question: "How does it work?",
            answer:
                "RMax works by providing tools for scheduling, invoicing, customer management, and more—all in one integrated platform.",
        },
        {
            question: "How much does it cost?",
            answer:
                "RMax offers flexible pricing plans based on your business needs. Visit our pricing page for details.",
        },
    ];

    // State to manage active question
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index); 
    };

    return (
        <div className="max-w-4xl mx-auto p-6 text-center">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                Frequently Asked Questions
            </h1>
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
                Find answers to common questions about our services and features. For
                more details, contact our support team.
            </p>

            {/* Search Bar */}
            <div className="flex items-center justify-center mb-8 border border-gray-300 rounded-md shadow-md p-3">
                <input
                    type="text"
                    placeholder="Ask Q! e.g Tell me about key Features."
                    className="flex-grow text-gray-600 px-4 outline-none"
                />
                <button className="text-gray-500">
                    <FaSearch size={20} />
                </button>
            </div>

            {/* FAQ Questions */}
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-md p-4 text-left"
                    >
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleAnswer(index)}
                        >
                            <h2 className="font-semibold text-base sm:text-lg">
                                {faq.question}
                            </h2>
                            {activeIndex === index ? (
                                <FaChevronUp size={20} className="text-gray-500" />
                            ) : (
                                <FaChevronDown size={20} className="text-gray-500" />
                            )}
                        </div>
                        {activeIndex === index && (
                            <p className="mt-3 text-gray-600 text-sm sm:text-base">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* Support Link */}
            <div className="mt-4 text-sm sm:text-base">
                Haven’t got your answer?{" "}
                <Link href="/pages/support">
                    <span className="text-blue-700">Contact our support now</span>
                </Link>
            </div>
        </div>
    );
};

export default Faq;
