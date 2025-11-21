import Image from "next/image";
import React from "react";

function Utilities() {
  return (
    <section className="w-full flex flex-wrap h-fit py-16 lg:py-24 justify-center bg-black">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-sm lg:text-lg font-semibold text-transparent uppercase tracking-wide mb-4">
            Our Premium Services
          </p>
          <h2 className="bg-gradient-to-r from-blue-800 via-blue-600 to-[#0DABF5] bg-clip-text text-3xl lg:text-6xl font-bold text-transparent mb-6 leading-tight">
            Absolutely everything your startup needs
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive suite of professional services
            meticulously designed to accelerate your business growth and drive
            sustainable success.
          </p>
        </div>

        <div className="relative flex justify-center items-center mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-xl"></div>
          <Image
            src="/stepsss.png"
            alt="Our Process Steps"
            width={400}
            height={300}
            style={{
              objectFit: "contain",
            }}
            priority
            className="z-20 w-sm sm:max-w-sm max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Additional Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Lightning Fast
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Optimized performance and rapid execution to keep your business
              ahead of the competition with cutting-edge solutions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Secure & Reliable
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Enterprise-grade security measures ensuring your data remains
              protected while maintaining 99.9% uptime reliability.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-400 leading-relaxed">
              Round-the-clock expert support team ready to assist you with any
              challenges and ensure seamless operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Utilities;
