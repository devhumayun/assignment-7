import Sidebar from "@/app/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem] mx-auto">
        <Sidebar />
        {children}
      </div>
    </main>
  );
}
