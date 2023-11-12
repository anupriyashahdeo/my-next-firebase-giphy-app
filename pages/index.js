// // pages/index.js
// import React from "react";
// import { useRouter } from "next/router";

// const Home = () => {
//   const router = useRouter();

//   const handleLoginClick = () => {
//     router.push("/login");
//   };

//   const handleRegisterClick = () => {
//     router.push("/register");
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-bold mb-6">Welcome to Giphy App</h1>
//       <button className="text-blue-500" onClick={handleLoginClick}>
//         Login
//       </button>
//       <p className="mt-2">
//         Don't have an account?{" "}
//         <button className="text-blue-500" onClick={handleRegisterClick}>
//           Register here
//         </button>
//         .
//       </p>
//     </div>
//   );
// };

// export default Home;

// pages/index.js
import React from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Giphy App</h1>
      <button
        className="text-blue-500 cursor-pointer"
        onClick={() => router.push("/login")}
      >
        Login
      </button>
      <p className="mt-2">
        Dont have an account?{" "}
        <button
          className="text-blue-500 cursor-pointer"
          onClick={() => router.push("/register")}
        >
          Register here
        </button>
        .
      </p>

      {/* Navigation to Giphy page */}
      <p className="mt-4">
        Explore GIFs and mark favorites in the{" "}
        <button
          className="text-blue-500 cursor-pointer"
          onClick={() => router.push("/giphy")}
        >
          Giphy
        </button>{" "}
        page.
      </p>
    </div>
  );
};

export default Home;
