"use client";

import { title } from "@/components/primitives";
import { HyperText } from "@/components/magicui/hyper-text";
import Image from "next/image";
import { MotionTransition } from "@/components/MotionTransition";
import { Link } from "@heroui/link";
import Oferta from "@/components/EspaciosDeportivos/oferta";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";

export default function EspaciosPage() {
  const { theme } = useTheme();
  return (
    <div>
      <section className="grid md:grid-cols-2 justify-items-center gap-6">
        <div className="space-y-4">
          <h1 className={title()}>
            <HyperText>Oferta Deportiva</HyperText>
          </h1>
          <p className="text-gray-500">
            El IMCUFIDECH es un instituto que impulsa el deporte y la actividad
            física con una amplia oferta que incluye atletismo, baile fitness,
            basketball, box, fútbol y más. Con instalaciones modernas y
            profesionales expertos, es el lugar ideal para entrenar, competir o
            disfrutar del movimiento. ¡Únete y vive el deporte con pasión!
          </p>
          <Link
            isExternal
            className="mt-4 bg-gradient-to-tr from-[#e581b3] to-[#611532] text-white shadow-lg rounded-full py-2 px-5"
            href={""}
          >
            Más detalles
          </Link>
        </div>
        <MotionTransition>
          <Image
            src="/assets/svg/runner.svg"
            alt="runner"
            width={400}
            height={1}   	
          />
        </MotionTransition>
      </section>
      <section className="py-24">
        <Oferta />
      </section>
    </div>
  );
}
