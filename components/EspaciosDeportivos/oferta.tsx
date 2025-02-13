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
              src="https://lh3.googleusercontent.com/VduaiMZY7crOBJtxVtJ78jzo6cpOKkhKcEeJyUjidzeqtkEN0ZgZrfEN58r7KRzci_iffJaQcH10U5tNl5nxx8zuQxrbooFANKFt40orRF-nuxP1gbo-Ax7wKwfoQTKuwg=w1280"
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
              src="https://lh4.googleusercontent.com/sQpeHOV1Nr7NpA657HyMa77kRq9bGrxqC-Ffy4U-4rIqTSAkjaC__vZh1vxr5sEgHT2rCzMpzhQgJ9Yhmbd-szbtLQJnemaDsgJwMtwycrB_iVW43AX67jwE2ginNJT3xA=w1280"
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
              src="https://lh6.googleusercontent.com/O7H2ZjZD6zlrxX9tfBUo0KDT7lrh9Jpk8JI8fL78nNUiHYf9g7iAbf3Yb9EiHnGC9lmlonRcaf0nCVpPSKTKPLkgSfOfAXTiNDIfuT9EJVQcUR9PJzhRfnuNgaxrNTBbdg=w1280"
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
              src="https://lh3.googleusercontent.com/e1WM55WPD7r8Md2S2fjDsGe5cb8YxQd6nO49c-bjzlTSQm2kCywKzsmMZifE75o4dRxvGGKqXXGYuAbED0Fy_e7E7qyxOIkcQ_Oz9xwtWBk6HyaFeld77PScUjx8DkSmCA=w1280"
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
              src="https://lh4.googleusercontent.com/UEGcAEmYHQbbzQNaRb9mdT9ivInxoA0teo8rZB7DNqFHkeMpI0Q6ZhrZ6EsNumDCGlX4zHxnjsm5gBjGfCPjUs8ubO7ZBl9DpWah1eXR4HT1GcoW0vUdoGkZBgLv71Zp=w1280"
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
