/**
 * Dashboard Component
 * Simple welcome dashboard
 */
export default function Dashboard() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-4 text-xl text-gray-600">Bienvenido al panel de administración</p>
      </div>
    </div>
  );
}
