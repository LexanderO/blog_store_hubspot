const LandingPage = () => {
  const handleAuth = () => {
    window.location.href = "http://localhost:5000/auth/hubspot";
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        <h1 className="text-8xl text-primary fort-bold">Hello <span className="text-3xl font-bold italic text-secondary">and</span></h1>
        <h3 className="text-6xl  text-secondary font-bold">Welcome to <span className="text-primary">HubSpot</span> Blog Store</h3>
        <div className="flex justify-center pt-6">
        <button
          onClick={handleAuth}
          className="bg-primary hover:bg-quaternary text-white transition duration-300 ease-in-out font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Authorize with HubSpot
        </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
