import { Link } from "@heroui/link";
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import { MotionTransition } from "@/components/MotionTransition";
import { Overview } from "@/components/overview";
import { Contact } from "@/components/contact";
import { Dependencias } from "@/components/dependencias";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1>
          <span className={title()}>
            Instituto Municipal de Cultura Física y Deporte de{" "}
          </span>
          <span className={title({ color: "pink" })}>Chimalhuacán</span>
        </h1>
      </div>
      <div className="flex gap-3">
        <Link
          isExternal
          className="bg-gradient-to-tr from-[#e581b3] to-[#611532] text-white shadow-lg rounded-full py-2 px-5"
        >
          Portal Oficial
        </Link>
        <Link
          isExternal
          className="text-black border-2 border-gray-300 py-2 px-5 rounded-full"
        >
          Conoce más
        </Link>
      </div>
      <div className="mt-8">
        <MotionTransition>
          <Image
            src="/assets/svg/index-img.svg"
            width={400}
            height={1}
            alt="Familia y deporte"
          />
        </MotionTransition>
      </div>
      <div className="text-gray-500 text-center">
        <p>
          El Instituto Municipal de Cultura Física y Deporte de Chimalhuacán
          (IMCUFIDECH) es un organismo público descentralizado, sujeto de
          derechos y obligaciones, al que se le otorgo la autonomía necesaria
          para asegurar el cumplimiento del deber del municipio de promover el
          deporte y la cultura física.
        </p>
      </div>
      <div>
        <Overview />
        <Contact />
        <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
          <Dependencias />
        </div>
      </div>
    </div>
  );
}
