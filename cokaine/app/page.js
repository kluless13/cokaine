import Image from "next/image";
import header from "./components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 container mx-auto px-12 py-14">
      <header />
    </main>
  );
}
