import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-12 bg-[#741B47]">
        <div className="container mx-auto max-w-7xl py-8 px-6 flex-grow grid justify-items-center space-y-4 text-white md:flex md:items-center md:space-x-5 md:justify-center">
            <Image src="/assets/icon/logo chimal.webp" width={70} height={1} alt="IMCUFIDECH" />
            <p>C. Cajetito s/n, Nueva Tepalcates, 56335, Chimalhuacán, Méx.   |   55 9296 3746</p>
        </div>
    </footer>
  )
}
