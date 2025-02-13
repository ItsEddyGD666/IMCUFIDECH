import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";
import { TextAnimate } from "./magicui/text-animate";

export function Overview() {
  return (
    <section className="py-24 my-8">
      <h2 className="text-3xl font-bold text-center pb-7">
        <TextAnimate animation="blurInUp" by="character">
          Algo que te gustaría saber
        </TextAnimate>
      </h2>
      <article className="grid gap-8 md:grid-cols-3 [&>div]:p-5">
        <div className="grid justify-items-center hover:shadow-lg hover:shadow-gray-300 transition ease-in-out duration-400">
          <Image
            alt="deporte"
            className=""
            src="/assets/icon/deportes-con-balones.png"
            width={100}
            height={100}
          />
          <span>
            <h3 className="font-bold">Espacios deportivos</h3>
          </span>
          <p className="text-gray-500 text-center">
            Al rededor del municipio de Chimalhuacán contamos con múltiples
            espacios deportivos públicos que brindan a la población el acceso a
            la cultura física y el deporte.
          </p>
        </div>
        <div className="grid justify-items-center hover:shadow-lg hover:shadow-gray-300 transition ease-in-out duration-500">
          <Image
            alt="deporte"
            className=""
            src="/assets/icon/campo-de-futbol-americano.png"
            width={100}
            height={100}
          />
          <span>
            <h3 className="font-bold">Oferta deportiva</h3>
          </span>
          <p className="text-gray-500 text-center">
            El IMCUFIDECH ofrece múltiples actividades físicas, deportivas y
            recreativas, que puedes consultar dando clic en el siguiente botón.
          </p>
        </div>
        <div className="grid justify-items-center hover:shadow-lg hover:shadow-gray-300 transition ease-in-out duration-500">
          <Image
            alt="deporte"
            className=""
            src="/assets/icon/mujer.png"
            width={100}
            height={100}
          />
          <span>
            <h3 className="font-bold">
              Programa de Defensa Personal para Mujeres
            </h3>
          </span>
          <p className="text-gray-500 text-center">
            Es un programa gratuito impartido todos los días sábados del año a
            las 9:00 horas, puedes acudir sin previa inscripción.
          </p>
        </div>
        <div className="grid justify-items-center hover:shadow-lg hover:shadow-gray-300 transition ease-in-out duration-500">
          <Image
            alt="deporte"
            className=""
            src="/assets/icon/beca.png"
            width={100}
            height={100}
          />
          <span>
            <h3 className="font-bold text-center">
              Programa de “Becas para el Desarrollo Deportivo”
            </h3>
          </span>
          <p className="text-gray-500 text-center">
            Programa "Becas para el Desarrollo Deportivo" del Instituto
            Municipal de Cultura Física y Deporte de Chimalhuacán.
          </p>
        </div>
        <div className="grid justify-items-center hover:shadow-lg hover:shadow-gray-300 transition ease-in-out duration-500">
          <Image
            alt="deporte"
            className=""
            src="/assets/icon/reforestacion.png"
            width={100}
            height={100}
          />
          <span>
            <h3 className="font-bold text-center">Plan de reforestación</h3>
          </span>
          <p className="text-gray-500 text-center">Proximamente</p>
        </div>
        <div className="grid justify-items-center hover:shadow-lg hover:shadow-gray-300 transition ease-in-out duration-500">
          <Image
            alt="deporte"
            className=""
            src="/assets/icon/bicicleta.png"
            width={100}
            height={100}
          />
          <span>
            <h3 className="font-bold text-center">
              Rodamos todos, rodamos por ellas
            </h3>
          </span>
          <p className="text-gray-500 text-center">
            El 25 de cada mes se conmemora el Día Naranja, un día para actuar,
            generar conciencia y prevenir la violencia contra la mujer, por eso
            este Domingo 25 de Agosto de 2024 "Rodamos todos, rodamos por
            ellas".
          </p>
        </div>
      </article>
    </section>
  );
}
