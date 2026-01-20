import { useEffect, useState } from "react";

export default function ReviewsList() {
  const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     fetch("/api/reviews")
//       .then(res => res.json())
//       .then(data => setReviews(data));
//   }, []);
useEffect(() => {
  const token = localStorage.getItem("token");

  // Add the full URL (http://localhost:5000)
  fetch("https://chrome-extension-3.onrender.com/api/reviews", {
    headers: {
      "Authorization": `Bearer ${token}` // Add this if your route is protected
    }
  })
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    })
    .then(data => {
      console.log("Fetched data:", data); // Check your console to see if data arrives
      setReviews(data);
    })
    .catch(err => console.error("Error fetching reviews:", err));
}, []);

const deleteReview = async (id) => {
  if (!window.confirm("Are you sure you want to delete this feedback?")) return;

  const token = localStorage.getItem("token");

  try {
    const res = await fetch(`https://chrome-extension-3.onrender.com/api/reviews/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      // Update UI: Remove the deleted review from the state array
      setReviews(reviews.filter((review) => review._id !== id));
    } else {
      alert("Failed to delete review");
    }
  } catch (err) {
    console.error("Delete error:", err);
  }
};

  return (
        <div className="bg-gray-50 min-h-screen p-10">
    <h2 className="text-2xl font-bold mb-8">Community Feedback</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
  <div 
    key={review._id} 
    className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col transition-all hover:shadow-xl hover:-translate-y-1"
  >
    {/* Colored Header Section */}
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 flex items-center">
      {/* Circle with Initial (instead of a photo) */}
      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30 mr-3">
        <span className="text-white font-bold uppercase">
          {review.userName.charAt(0)}
        </span>
      </div>
      
      <div>
        <p className="text-white font-bold leading-none">{review.userName}</p>
        <div className="flex mt-1">
          {/* Star Icons */}
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-xs ${i < (review.rating || 5) ? "text-yellow-300" : "text-white/30"}`}>
              ★
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Body Section */}
    <div className="p-6 bg-white">
      <p className="text-gray-700 text-base leading-relaxed italic">
        "{review.message}"
      </p>
    </div>

    {/* Footer Section */}
    <div className="px-6 py-3 bg-gray-50 flex justify-between items-center text-xs">
      <span className="text-gray-400 font-medium uppercase tracking-wider">
        {new Date(review.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
      </span>
      
      <button
        onClick={() => deleteReview(review._id)}
        className="text-red-400 hover:text-red-600 font-bold transition-colors uppercase tracking-tight"
      >
        Remove
      </button>
    </div>
  </div>
))}
    </div>
    </div>
  );
}
