const LandingPage = () => {
  const handleAuth = () => {
    window.location.href = "http://localhost:5000/auth/hubspot";
  };

  return (
    <button
      onClick={handleAuth}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Authorize with HubSpot
    </button>
  );
};

export default LandingPage;
