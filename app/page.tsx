import MainHeader from "@/components/organisms/header";
import Banner from "@/components/organisms/banner";

export default function Home() {
  return (
    <main className="px-4 bg-hero-image min-h-screen bg-cover m-0">
      <MainHeader />
      <div className="w-screen max-h-screen">
        <Banner />
      </div>
    </main>
  );
}
