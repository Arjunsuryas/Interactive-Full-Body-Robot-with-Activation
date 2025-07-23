import React, { useState, useEffect } from 'react';
              <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-6 rounded-full transition-colors duration-500 ${
                isActivated ? 'bg-green-400' : 'bg-gray-500'
              }`}>
                <div className="flex justify-center items-center h-full gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-1 h-3 rounded-full transition-all duration-300 ${
                      isActivated ? 'bg-green-800 animate-pulse' : 'bg-gray-700'
                    }`} style={{ animationDelay: `${i * 0.1}s` }}></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Robot Body/Torso */}
            <div className={`relative w-64 h-80 mx-auto mb-4 rounded-2xl transition-all duration-500 ${
              isActivated 
                ? 'bg-gradient-to-br from-blue-500 to-indigo-700 shadow-blue-400/30 shadow-xl' 
                : 'bg-gradient-to-br from-gray-600 to-gray-800'
            }`}>
              
              {/* Chest Panel */}
              <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-20 rounded-xl transition-colors duration-500 ${
                isActivated ? 'bg-gray-800 border-2 border-cyan-400' : 'bg-gray-700 border-2 border-gray-600'
              }`}>
                <div className="flex flex-col items-center justify-center h-full">
                  <Settings className={`w-8 h-8 transition-all duration-500 ${
                    isActivated ? 'text-cyan-400 animate-spin' : 'text-gray-400'
                  }`} />
                  <div className={`mt-2 text-xs font-mono transition-colors duration-500 ${
                    isActivated ? 'text-green-400' : 'text-gray-500'
                  }`}>
                    PWR: {powerLevel}%
                  </div>
                </div>
              </div>

              {/* Side Panels */}
              <div className={`absolute top-20 left-4 w-8 h-16 rounded-lg transition-colors duration-500 ${
                isActivated ? 'bg-cyan-400' : 'bg-gray-500'
              }`}></div>
              <div className={`absolute top-20 right-4 w-8 h-16 rounded-lg transition-colors duration-500 ${
                isActivated ? 'bg-cyan-400' : 'bg-gray-500'
              }`}></div>

              {/* Status Lights */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`w-4 h-4 rounded-full transition-all duration-500 ${
                    isActivated && powerLevel > i * 25 
                      ? 'bg-green-400 shadow-green-400/70 shadow-lg animate-pulse' 
                      : 'bg-gray-600'
                  }`} style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
              </div>
            </div>

            {/* Robot Arms */}
            <div className="absolute top-52 -left-20 w-16 h-32 rounded-2xl transition-all duration-500" style={{
              background: isActivated 
                ? 'linear-gradient(135deg, #3b82f6, #1e40af)' 
                : 'linear-gradient(135deg, #6b7280, #374151)',
              transform: isActivated ? 'rotate(-10deg)' : 'rotate(0deg)'
            }}></div>
            <div className="absolute top-52 -right-20 w-16 h-32 rounded-2xl transition-all duration-500" style={{
              background: isActivated 
                ? 'linear-gradient(135deg, #3b82f6, #1e40af)' 
                : 'linear-gradient(135deg, #6b7280, #374151)',
              transform: isActivated ? 'rotate(10deg)' : 'rotate(0deg)'
            }}></div>

            {/* Robot Legs */}
            <div className="flex justify-center gap-8">
export default App;
