import About from "@/components/layouts/about";
import Banner from "@/components/layouts/banner";
import Download from "@/components/layouts/download";
import Guide from "@/components/layouts/guide";
import ListTeam from "@/components/layouts/list-team";
import Menu from "@/components/layouts/menu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-12">
      <Banner />
      <Guide />
      <Menu />
      <ListTeam />
      <Download />
      <About />
    </main>
  );
}
