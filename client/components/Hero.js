import Link from "next/link";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Image from "next/image";
import doctors from "../public/doctors.jpeg";
import arrow from "../public/arrow.png";

export function Hero() {
  return (
    <div>
      <Header />
      <Navbar />
      <section className="w-full font-[sans-serif] items-center pl-[100px] bg-[] mb-[10px] mt-[10px] h-[600px]">
        <div className="container md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold tracking-tighter">
                  Welcome to Medicus
                </h1>
                <p className="max-w-[600px] md:text-l ">
                  Medicus: Empowering a global network of researchers to
                  collectively tackle healthcare's toughest challenges through a
                  collaborative platform fostering open communication,
                  transparency, and equitable benefit-sharing. By co-owning
                  patents and sharing profits through fair and transparent
                  processes, Medicus accelerates medical breakthroughs while
                  ensuring all contributors are duly recognized and rewarded.
                </p>
              </div>
              {/* <div>
                <Image src={doctors} h={10} w={10} />
              </div> */}
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold tracking-tighter">
                  Buy And Sell Patents
                </h1>
                <p className="max-w-[600px] md:text-l ">
                  While Medicus facilitates open collaboration and knowledge
                  sharing, it also recognizes the value of intellectual
                  property. Researchers can choose to patent their innovations
                  and leverage the platform's marketplace to connect with
                  potential buyers, fostering efficient commercialization and
                  accelerating the translation of research into real-world
                  applications.
                </p>
              </div>
              {/* <div>
                <Image src={doctors} h={10} w={10} />
              </div> */}
              <Link
                className="bg-[black] font-[semibold] w-[55px] gap-[7px] p-[7px] text-[15px] rounded-[5px] text-white text-[15px] flex flex-[row]"
                href="/market"
              >
                Market
                {/* <Image src={arrow} height={10} width={10} /> */}
              </Link>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter">
                  Collaborative Research
                </h1>
                <p className="max-w-[600px] md:text-l">
                  Medicus goes beyond simply connecting researchers; it fosters
                  collaborative teams. Users can form or join groups, seamlessly
                  share data and ideas, and co-author publications. This
                  interactive environment sparks synergy, innovation, and the
                  development of novel methodologies and frameworks to tackle
                  complex healthcare challenges.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="bg-[black] font-[bold] p-[6px] rounded-[5px] text-white text-[15px]"
                  href="/teams"
                >
                  Team Up
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold tracking-tighter">
                  Create Patents
                </h1>
                <p className="max-w-[600px] md:text-l ">
                  Transforming medical research with a collaborative platform.
                  Global researchers contribute, co-own patents via transparent
                  processes, and share profits. A community-driven ecosystem
                  promoting open collaboration, transparency, and equitable
                  rewards for advancing healthcare.
                </p>
              </div>
              {/* <div>
                <Image src={doctors} h={10} w={10} />
              </div> */}
              <Link
                className="bg-[black] font-[semibold] w-[95px] gap-[7px] p-[6px] text-[15px] rounded-[5px] text-white text-[15px] flex flex-[row]"
                href="/patents"
              >
                Create Patent
                {/* <Image src={arrow} height={10} width={10} /> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
