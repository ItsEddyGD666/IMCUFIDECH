"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "@/components/magicui/lens";

export default function Oferta() {
  return (
    <div className="pb-24 grid md:grid-cols-3 justify-items-center gap-8">
      <Card className="relative max-w-md shadow-none">
        <CardHeader>
          <Lens
            zoomFactor={2}
            lensSize={150}
            isStatic={false}
            ariaLabel="Zoom Area"
          >
            <img
              src="/assets/img/atletismo.jpg"
              alt="image placeholder"
              width={500}
              height={500}
            />
          </Lens>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl">Atletismo</CardTitle>
          <CardDescription>
            Complejo Deportivo "El Tepalcate"
            <br /> Alberca Olímpica "Noe Hernández Valentín"
          </CardDescription>
        </CardContent>
        <CardFooter className="space-x-4"></CardFooter>
      </Card>
      <Card className="relative max-w-md shadow-none">
        <CardHeader>
          <Lens
            zoomFactor={2}
            lensSize={150}
            isStatic={false}
            ariaLabel="Zoom Area"
          >
            <img
              src="/assets/img/atletismo.jpg"
              alt="image placeholder"
              width={500}
              height={500}
            />
          </Lens>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl">Baile Fitness</CardTitle>
          <CardDescription>
            Complejo Deportivo "El Tepalcate"
            <br /> Alberca Olímpica "Noe Hernández Valentín"
          </CardDescription>
        </CardContent>
        <CardFooter className="space-x-4"></CardFooter>
      </Card>
      <Card className="relative max-w-md shadow-none">
        <CardHeader>
          <Lens
            zoomFactor={2}
            lensSize={150}
            isStatic={false}
            ariaLabel="Zoom Area"
          >
            <img
              src="/assets/img/atletismo.jpg"
              alt="image placeholder"
              width={500}
              height={500}
            />
          </Lens>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl">Basquetball</CardTitle>
          <CardDescription>
            Complejo Deportivo "El Tepalcate"
            <br /> Alberca Olímpica "Noe Hernández Valentín"
          </CardDescription>
        </CardContent>
        <CardFooter className="space-x-4"></CardFooter>
      </Card>
      <Card className="relative max-w-md shadow-none">
        <CardHeader>
          <Lens
            zoomFactor={2}
            lensSize={150}
            isStatic={false}
            ariaLabel="Zoom Area"
          >
            <img
              src="/assets/img/atletismo.jpg"
              alt="image placeholder"
              width={500}
              height={500}
            />
          </Lens>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl">Basquetbol Adaptado</CardTitle>
          <CardDescription>
            Complejo Deportivo "El Tepalcate"
            <br /> Alberca Olímpica "Noe Hernández Valentín"
          </CardDescription>
        </CardContent>
        <CardFooter className="space-x-4"></CardFooter>
      </Card>
      <Card className="relative max-w-md shadow-none">
        <CardHeader>
          <Lens
            zoomFactor={2}
            lensSize={150}
            isStatic={false}
            ariaLabel="Zoom Area"
          >
            <img
              src="/assets/img/atletismo.jpg"
              alt="image placeholder"
              width={500}
              height={500}
            />
          </Lens>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl">Box</CardTitle>
          <CardDescription>
            Complejo Deportivo "El Tepalcate"
            <br /> Alberca Olímpica "Noe Hernández Valentín"
          </CardDescription>
        </CardContent>
        <CardFooter className="space-x-4"></CardFooter>
      </Card>
      <Card className="relative max-w-md shadow-none">
        <CardHeader>
          <Lens
            zoomFactor={2}
            lensSize={150}
            isStatic={false}
            ariaLabel="Zoom Area"
          >
            <img
              src="/assets/img/atletismo.jpg"
              alt="image placeholder"
              width={500}
              height={500}
            />
          </Lens>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl">Cachibol</CardTitle>
          <CardDescription>
            Complejo Deportivo "El Tepalcate"
            <br /> Alberca Olímpica "Noe Hernández Valentín"
          </CardDescription>
        </CardContent>
        <CardFooter className="space-x-4"></CardFooter>
      </Card>
    </div>
  );
}
