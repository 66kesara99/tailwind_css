import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto">
      <div className=" flex justify-center">
        <div className="bg-blue-700 w-40 h-40 mx-4 my-4 hover:ring-8 hover:ring-blue-400 rounded-lg hover:scale-110"></div>
        <div className="bg-red-700 w-40 h-40 mx-4 my-4 hover:ring-8 hover:ring-red-400 rounded-lg animate-pulse"></div>
        <div className="bg-green-700 w-40 h-40 mx-4 my-4 hover:ring-8 hover:ring-green-400 rounded-lg hover:skew-y-12"></div>
      </div>
      <div className=" flex justify-center">
        <div className="bg-red-700 w-40 h-40 mx-4 my-4 hover:ring-8 hover:ring-red-400 rounded-lg animate-pulse cursor-pointer"></div>
        <div className="bg-green-700 w-40 h-40 mx-4 my-4 hover:ring-8 hover:ring-green-400 rounded-lg animate-spin "></div>
        <div className="bg-red-700 w-40 h-40 mx-4 my-4 hover:ring-8 hover:ring-red-400 rounded-lg animate-pulse"></div>
      </div>
      <div className=" flex justify-center">
        <div className="bg-green-700 w-40 h-40 mx-4 my-4 hover:ring-8 hover:ring-green-400 rounded-lg hover:rotate-45"></div>
        <div className="bg-red-700 w-40 h-40 mx-4 my-4 hover:ring-8 hover:ring-red-400 rounded-lg animate-pulse"></div>
        <div className="bg-blue-700 w-40 h-40 mx-4 my-4 hover:ring-8 hover:ring-blue-400 rounded-lg hover:translate-y-6 "></div>
      </div>
    </div>
  );
}

export default App;
