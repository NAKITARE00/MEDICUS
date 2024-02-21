import Link from "next/link";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Hero() {
  return (
    <div>
      <Header />
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32 font-[epilogue] xl:py-48 items-center pl-[100px] bg-[]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Welcome to Medicus
                </h1>
                <p className="max-w-[600px] md:text-l font-black">
                  Medicus: Transforming medical research with a collaborative
                  platform. Global researchers contribute, co-own patents via
                  transparent processes, and share profits. A community-driven
                  ecosystem promoting open collaboration, transparency, and
                  equitable rewards for advancing healthcare.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm  font-semibold
                   text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1
                    focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900
                     dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/deposit"
                >
                  View Research and Patents
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Collaborative Research
                </h1>
                <p className="max-w-[600px] font-black md:text-l">
                  Medicus: Transforming medical research with a collaborative
                  platform. Global researchers contribute, co-own patents via
                  transparent processes, and share profits. A community-driven
                  ecosystem promoting open collaboration, transparency, and
                  equitable rewards for advancing healthcare.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center bg-[black] rounded-md px-8 text-sm font-semibold
                  text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 
                  focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50
                  dark:text-gray-900 dark:hover:bg-gray-50/90 
                  dark:focus-visible:ring-gray-300"
                  href="/dashboard"
                >
                  Team Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
