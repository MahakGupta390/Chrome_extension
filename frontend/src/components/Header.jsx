 import { Link } from "react-router-dom";
// export default function Header() {
//   return (
//     <header className="absolute top-0 left-0 w-full flex justify-between items-center p-6 text-white">
//       <div className="text-2xl font-bold">MyLogo</div>
//       <nav className="space-x-6">
//         <Link to="/features" className="hover:text-gray-300">Features</Link>
//         <Link to="/login" className="hover:text-gray-300">Login</Link>
//         <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
//       </nav>
//     </header>
//   );
// }
export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center p-6 text-white z-50">
      {/* <div className="text-2xl font-bold">ReTab</div> */}
      <div className="text-2xl font-extrabold text-yellow-500">
  ReTab
</div>
      <nav className="space-x-6">
          {/* <Link to="/features" className="hover:text-gray-300">Features</Link> */}
          <div className="flex gap-4">
  {/* Change this from Link to a button or anchor */}
  <button 
    onClick={() => {
      document.getElementById('feature-section')?.scrollIntoView({ behavior: 'smooth' });
    }} 
    className="hover:text-gray-300 transition-colors"
  >
    Features
  </button>
        <Link to="/login" className="hover:text-gray-300">Login</Link>
        <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}
