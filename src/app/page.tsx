import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-1">
        <Hero />
        {/* <Features /> */}
        {/* Add more marketing sections here */}
      </main>
    </div>
  );
}
