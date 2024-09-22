"use client"
import About from "@/components/layouts/about";
import Banner from "@/components/layouts/banner";
import Calendar from "@/components/layouts/calander";
import Download from "@/components/layouts/download";
import GiveAway from "@/components/layouts/giveaway";
import Guide from "@/components/layouts/guide";
import HorizontalSpin from "@/components/layouts/HorizontalSpin";
import ListTeam from "@/components/layouts/list-team";
import Menu from "@/components/layouts/menu";
import useUpdatePageVisits from "@/hooks/useUpdatePageVisits";

export default function Home() {
  const visitCount = useUpdatePageVisits();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-12">
      <Banner />
      <Guide />
      <Menu />
      <ListTeam />
      <Download />
      <Calendar />
      <About visits={visitCount} />
    </main>
  );
}
