
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-[400px] h-[600px] bg-white rounded-lg shadow-lg flex items-center justify-center">
        <div>
          <h1>Counter:</h1>
          <p>0</p>
        </div>
        <div>
          <button>- Minus</button>
          <button>Plus +</button>
        </div>
      </div>
    </div>

  );
}
