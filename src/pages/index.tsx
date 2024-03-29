import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      {new Array(10).fill(undefined).map((_, i) => (
        <Link key={i} href={`/product/${i}`}>Go to /product/{i}</Link>
      ))}
    </main>
  );
}
