import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-full bg-[#f0f2f5] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
