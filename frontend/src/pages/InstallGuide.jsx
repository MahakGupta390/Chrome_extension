
import React, { useState } from 'react';
import devModeImg from '../assets/dev_mode.png';
import distImg from '../assets/dist.png';
import changesImg from '../assets/change.png';
export default function InstallGuide() {
  const [extId, setExtId] = useState('');

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12 bg-white text-gray-900">
      <h1 className="text-3xl font-bold text-center">
        How to Install the Extension
      </h1>

      {/* Step 1 */}
      <div className="border rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span className="bg-yellow-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
          Download & Extract
        </h2>
        <p className="mt-2 text-gray-600">
          Download the ZIP and extract it. <b>Important:</b> Select the <code>dist</code> folder when loading.
        </p>
        <a
          href="https://drive.google.com/file/d/1692dGM5n3RUP9AzfMiTOxOaLulDGU-t8/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-5 py-2 bg-yellow-500 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Download Extension ZIP
        </a>
      </div>

      {/* Step 2 & 3 Combined with SS Placeholder */}
      <div className="border rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span className="bg-yellow-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
          Enable Developer Mode
        </h2>
        <p className="mt-2 text-gray-600">
          Go to <code className="bg-gray-100 px-2 py-1 rounded">chrome://extensions</code> and toggle <b>Developer Mode</b> on the top right.
        </p>
        {/* <div className="mt-4 border-2 border-dashed border-gray-200 rounded-lg h-48 flex items-center justify-center bg-gray-50">
           <span className="text-gray-400">[Insert Screenshot of Developer Mode Toggle Here]</span>
        </div> */}
        <div className="mt-4 border-2 border-dashed border-gray-200 rounded-lg h-48 flex items-center justify-center bg-gray-50 overflow-hidden">
  <img
    src={devModeImg}
    alt="Enable Developer Mode in Chrome Extensions"
    className="h-full object-contain"
  />
</div>

      </div>

      {/* Step 4 with SS Placeholder */}
      <div className="border rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span className="bg-yellow-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">3</span>
          Load the "dist" Folder
        </h2>
        <p className="mt-2 text-gray-600">
          Click <b>Load unpacked</b> and select the <code>dist</code> folder from your extracted files.
        </p>
        <div className="mt-4 border-2 border-dashed border-gray-200 rounded-lg h-48 flex items-center justify-center bg-gray-50">
            <img
    src={distImg}
    alt="Dist folder"
    className="h-full object-contain"
  />
        </div>
      </div>

      {/* Step 5: The "Keep Changes" Warning */}
      <div className="border-2 border-blue-100 bg-blue-50 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-blue-800 flex items-center gap-2">
          <span className="bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">4</span>
          The "Keep Changes" Popup
        </h2>
        <p className="mt-2 text-blue-900 font-medium">
          Open a New Tab. Chrome will ask if you want to keep the changes. 
        </p>
        <p className="text-blue-700 text-sm">You MUST click <b>"Keep changes"</b> for the extension to work traditionally.</p>
        <div className="mt-4 border-2 border-blue-200 rounded-lg h-32 flex items-center justify-center bg-white">
          <img
    src={changesImg}
    alt="Final browser view"
    className="h-full object-contain"
  /> 
        </div>
      </div>

      {/* Step 6: The Manual Link Generator (Alternative Method) */}
      <div className="border-2 border-red-100 bg-red-50 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-red-800">Can't see the New Tab?</h2>
        <p className="mt-2 text-red-700">
          If Chrome blocked the popup, you can open the extension manually. 
          Paste your <b>Extension ID</b> below:
        </p>
        
        <div className="mt-4 space-y-3">
          <input 
            type="text" 
            placeholder="Paste Extension ID here (from chrome://extensions)"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 outline-none"
            onChange={(e) => setExtId(e.target.value)}
          />
          
          {extId && (
            <div className="p-4 bg-white rounded-lg border border-red-200 animate-pulse">
              <p className="text-xs text-gray-500 uppercase font-bold">Your Manual Link:</p>
              <code className="break-all text-red-600 font-mono text-sm">
                chrome-extension://{extId}/index.html
              </code>
              <p className="mt-2 text-xs text-red-500 italic">Copy and paste this into your address bar.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}