export default function Home() {
  return (
    <div className="relative min-h-screen">
      <img src="/images/AlmaVistaSunset.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Background" />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold">Home Page</h1>
        <p className="relative mt-4">
          Welcome to the home page. Here you can find the latest updates and news.
        </p>
      </div>
    </div>
  );
}