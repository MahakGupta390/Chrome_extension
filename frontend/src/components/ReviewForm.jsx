import { useState } from "react";

export default function ReviewForm() {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

//   const submitReview = async () => {
//     if (!message.trim()) return alert("Please write feedback");

//     setLoading(true);
//     const res = await fetch("/api/reviews", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ message, rating }),
//     });

//     const data = await res.json();
//     setLoading(false);

//     if (!res.ok) return alert(data.message || "Error");

//     setMessage("");
//     alert("Thanks for your feedback!");
//   };
const submitReview = async () => {
  if (!message.trim()) return alert("Please write feedback");
  setLoading(true);

  try {
    const res = await fetch("https://chrome-extension-3.onrender.com/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ message, rating }),
    });

    const data = await res.json().catch(() => ({})); // Shorter safe parse

    if (!res.ok) {
      throw new Error(data.message || `Server responded with ${res.status}`);
    }

    setMessage("");
    alert("Thanks for your feedback! Kindly refresh to see it.");
  } catch (err) {
    // Check if it's a network error vs a server error
    if (err.name === 'TypeError' && err.message === 'Failed to fetch') {
      alert("Network error: Cannot reach the server. Is your backend running?");
    } else {
      alert(err.message);
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-2">Share your feedback</h3>

      <select
        className="border p-2 mb-3 w-full"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        {[1,2,3,4,5].map(r => (
          <option key={r} value={r}>{r} ⭐</option>
        ))}
      </select>

      <textarea
        className="border p-2 w-full mb-3"
        rows={4}
        placeholder="What do you think about our platform?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={submitReview}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? "Submitting..." : "Submit Feedback"}
      </button>
    </div>
  );
}
