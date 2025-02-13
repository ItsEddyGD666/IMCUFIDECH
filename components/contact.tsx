import Image from "next/image";
import { MotionTransition } from "./MotionTransition";
import { TextAnimate } from "@/components/magicui/text-animate";

export function Contact() {
  return (
    // <section className="grid md:grid-cols-2 justify-items-center gap-4 py-12 bg-slate-100 mx-auto pt-16 px-24">
    <section className="container mx-auto max-w-7xl pt-16 px-6 flex-grow ">
      <div className="grid md:grid-cols-2 justify-items-center gap-4">
        <div className="space-y-5">
          <h3 className="text-[#611532] font-bold text-3xl">
            <TextAnimate animation="blurInUp" by="character">
              ¿Preguntas?
            </TextAnimate>
          </h3>
          <p>
            Acude a las Oficinas Administrativas de IMCUFIDECH ubicadas en Calle
            Cajetito s/n, Colonia Nueva Tepalcates, Código Postal 56335,
            Chimalhuacán, Estado de México.
          </p>
        </div>
        <MotionTransition>
          <Image
            src="/assets/svg/question.svg"
            width={400}
            height={1}
            alt="Contacto"
          />
        </MotionTransition>
      </div>
    </section>
  );
}
