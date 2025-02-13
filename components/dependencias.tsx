import Image from "next/image";

export function Dependencias() {
  return (
    <section className="py-12 grid justify-items-center md:flex md:spacebetween md:justify-center md:gap-8">
        <Image src="/assets/img/ayuntamiento chimalhuacan.jpg" width={120} height={1} alt="Dependencias" />
        <Image src="/assets/svg/sistema nacional de transparencia.svg" width={120} height={1} alt="Dependencias" />
        <Image src="/assets/img/saimex.jpg" width={120} height={1} alt="Dependencias" />
        <Image src="/assets/img/ipomex.png" width={150} height={1} alt="Dependencias" />
        <Image src="/assets/img/ipomex 4.png" width={150} height={1} alt="Dependencias" />
    </section>
  )
}
