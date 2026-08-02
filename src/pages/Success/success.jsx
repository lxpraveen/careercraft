const Success = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center">
      <div className="bg-slate-900 p-10 rounded-2xl text-center">
        <h1 className="text-6xl">🎉</h1>

        <h2 className="text-4xl text-white mt-5">
          Order Submitted
        </h2>

        <p className="text-gray-400 mt-4">
          We have received your order.
        </p>
      </div>
    </div>
  );
};

export default Success;