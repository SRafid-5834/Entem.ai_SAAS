"use client";

import { useState } from "react";

function CodeExamples() {
  const [activeTab, setActiveTab] = useState<"ts" | "curl">("ts");

  const tsCode = `const fileType = "mp4";
  // 1. Get upload URL
  const res = await fetch("/api/upload-url", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fileType: fileType }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.error || "Failed to get upload URL");
  }

  const { url, fileId, key } = await res.json();

  // 2. Upload file to S3
  const uploadRes = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": file.type },
    body: file,
  });

  if (!uploadRes.ok) {
    throw new Error("Failed to upload file");
  }

  setStatus("analyzing");

  // 3. Analyze video
  const analysisRes = await fetch("/api/sentiment-inference", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key }),
  });

  if (!analysisRes.ok) {
    const error = await analysisRes.json();
    throw new Error(error?.error || "Failed to analyze video");
  }

  const analysis = await analysisRes.json();

  console.log("Analysis: ", analysis);`;

  const curlCode = `# 1. Get upload URL
curl -X POST \\
  -H "Authorization: Bearer \${YOUR_API_KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"fileType": ".mp4"}' \\
  /api/upload-url

# Response contains url and key

# 2. Upload file to S3
curl -X PUT \\
  -H "Content-Type: video/mp4" \\
  --data-binary @video.mp4 \\
  "\${url}"

# 3. Analyze video
curl -X POST \\
  -H "Authorization: Bearer \${YOUR_API_KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"key": "\${key}"}' \\
  /api/sentiment-inference`;

  return (
    <div className="mt-3 flex h-fit w-full flex-col rounded-xl bg-gray-100 bg-opacity-70 p-4">
      <span className="text-sm">API Usage</span>
      <span className="mb-4 text-sm text-gray-500">
        Examples of how to use the API with TypeScript and cURL.
      </span>

      <div className="overflow-hidden rounded-md bg-gray-900">
        <div className="flex border-b border-gray-700">
          <button
            onClick={() => setActiveTab("ts")}
            className={`px-4 py-2 text-xs ${activeTab === "ts" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-gray-300"}`}
          >
            TypeScript
          </button>
          <button
            onClick={() => setActiveTab("curl")}
            className={`px-4 py-2 text-xs ${activeTab === "curl" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-gray-300"}`}
          >
            cURL
          </button>
        </div>
        <div className="p-4">
          <pre className="max-h-[300px] overflow-y-auto text-xs text-gray-300">
            <code>{activeTab === "ts" ? tsCode : curlCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default CodeExamples;
