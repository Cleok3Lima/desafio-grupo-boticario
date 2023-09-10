import Image from "next/image"

// Components
import SlideTextContent from "@/components/SlideTextContent/SlideTextContent"
import LegalText from "@/components/LegalText/LegalText"
import Button from "@/components/Button/Button"

// Assets
import Slide01_600w from "@/images/Mobile/Mobile-01-600w.webp"
import Slide01_700w from "@/images/Mobile/Mobile-01-700w.webp"
import Slide01_800w from "@/images/Mobile/Mobile-01-800w.webp"

import Slide02_600w from "@/images/Mobile/Mobile-02-600w.webp"
import Slide02_700w from "@/images/Mobile/Mobile-02-700w.webp"
import Slide02_800w from "@/images/Mobile/Mobile-02-800w.webp"

import Slide03_600w from "@/images/Mobile/Mobile-03-600w.webp"
import Slide03_700w from "@/images/Mobile/Mobile-03-700w.webp"
import Slide03_800w from "@/images/Mobile/Mobile-03-800w.webp"

import Slide04_600w from "@/images/Mobile/Mobile-04-600w.webp"
import Slide04_700w from "@/images/Mobile/Mobile-04-700w.webp"
import Slide04_800w from "@/images/Mobile/Mobile-04-800w.webp"

import Slide06_600w from "@/images/Mobile/Mobile-06-600w.webp"
import Slide06_700w from "@/images/Mobile/Mobile-06-700w.webp"
import Slide06_800w from "@/images/Mobile/Mobile-06-800w.webp"

import Slide01_desktop_1000w_3000w from "@/images/Desktop/Desktop-01-1000w-3000w.webp"
import Slide02_desktop_1000w_3000w from "@/images/Desktop/Desktop-02-1000w-3000w.webp"
import Slide03_desktop_1000w_3000w from "@/images/Desktop/Desktop-03-1000w-3000w.webp"
import Slide04_desktop_1000w_3000w from "@/images/Desktop/Desktop-04-1000w-3000w.webp"
import Slide06_desktop_1000w_3000w from "@/images/Desktop/Desktop-06-1000w-3000w.webp"

// Styles
import styles from "./styles.module.scss"

export const slides: any = [
  {
    content: (
      <>
        <picture className={styles.picture}>
          <source media="(max-width: 600px)" srcSet={Slide06_600w.src} />
          <source media="(max-width: 700px)" srcSet={Slide06_700w.src} />
          <source media="(max-width: 999px)" srcSet={Slide06_800w.src} />
          <source
            media="(min-width: 1000px)"
            srcSet={Slide06_desktop_1000w_3000w.src}
          />
          <Image
            src={Slide06_desktop_1000w_3000w}
            alt="Propaganda Boticário 1"
            loading="lazy"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              position: "absolute",
            }}
          />
        </picture>

        <SlideTextContent
          numberOfButtons={1}
          smallTitleContent={
            <div className={styles.smallTitleContent}>
              <span>
                Por compras desde $199.900 que incluyan kits de Amor & Amistad.
              </span>
            </div>
          }
          titleContent={
            <div className={styles.titleContent}>
              <span>Lleva GRATIS accesorio AVE MARÍA</span>
            </div>
          }
        >
          <Button
            buttonHref="/"
            buttonType="main"
            buttonText="¡APROVECHA YA!"
          />
        </SlideTextContent>
        <LegalText
          legalText={
            "*Promoción válida del 07 al 30 de septiembre de 2023 o hasta agotar existencias, son 50 unidades disponibles."
          }
        />
      </>
    ),
  },
  {
    content: (
      <>
        <picture className={styles.picture}>
          <source media="(max-width: 600px)" srcSet={Slide01_600w.src} />
          <source media="(max-width: 700px)" srcSet={Slide01_700w.src} />
          <source media="(max-width: 999px)" srcSet={Slide01_800w.src} />
          <source
            media="(min-width: 1000px)"
            srcSet={Slide01_desktop_1000w_3000w.src}
          />
          <Image
            src={Slide01_desktop_1000w_3000w}
            alt="Propaganda Boticário 2"
            loading="lazy"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              position: "absolute",
            }}
          />
        </picture>

        <SlideTextContent
          numberOfButtons={2}
          textColor={"black"}
          smallTitleContent={
            <div>
              <span>
                1.Haz una compra superior a $199.900 para participar 2.Escribe
                la mayor cantidad de reseñas de tus productos favoritos
              </span>
            </div>
          }
          titleContent={
            <>
              <div>Gana 1 iPhone 14</div>
            </>
          }
        >
          <Button
            buttonHref={"/"}
            buttonType={"main"}
            buttonText={"EMPEZAR A COMPRAR"}
            buttonPadding={"thin"}
          />
          <Button
            buttonHref={"/"}
            buttonType={"main"}
            buttonText={"¡CONOCE MÁS TYC!"}
            buttonPadding={"thin"}
          />
        </SlideTextContent>
        <LegalText
          legalText={
            "Actividad válida del 01 al 30 de septiembre de 2023. Consulta los T&C completos de la actividad en https://www.oboticario.com.co/pages/concurso-iphone-14."
          }
        />
      </>
    ),
  },
  {
    content: (
      <>
        <picture className={styles.picture}>
          <source media="(max-width: 600px)" srcSet={Slide02_600w.src} />
          <source media="(max-width: 700px)" srcSet={Slide02_700w.src} />
          <source media="(max-width: 999px)" srcSet={Slide02_800w.src} />
          <source
            media="(min-width: 1000px)"
            srcSet={Slide02_desktop_1000w_3000w.src}
            style={{ minHeight: "54vw !important" }}
          />
          <Image
            src={Slide02_desktop_1000w_3000w}
            alt="Propaganda Boticário 2"
            loading="lazy"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              position: "absolute",
            }}
          />
        </picture>

        <SlideTextContent
          numberOfButtons={1}
          smallTitleContent={
            <div>
              <span>¡NUEVO! Egeo Choc Berry y Egeo Choc Mint</span>
            </div>
          }
          titleContent={
            <div>
              <span>Lleva ambos con 25% OFF</span>
            </div>
          }
        >
          <Button
            buttonHref={"/"}
            buttonType={"main"}
            buttonText={"¡LO QUIERO!"}
          />
        </SlideTextContent>
        <LegalText
          legalText={
            "*Referencias Seleccionadas*No acumulable *Hasta agotar existencias*Imagen de referencia. Fecha inicio 31/08/2023 Fecha fin 2/10/2023"
          }
        />
      </>
    ),
  },
  {
    content: (
      <>
        <picture className={styles.picture}>
          <source media="(max-width: 600px)" srcSet={Slide03_600w.src} />
          <source media="(max-width: 700px)" srcSet={Slide03_700w.src} />
          <source media="(max-width: 999px)" srcSet={Slide03_800w.src} />
          <source
            media="(min-width: 1000px)"
            srcSet={Slide03_desktop_1000w_3000w.src}
            style={{ minHeight: "54vw !important" }}
          />
          <Image
            src={Slide03_desktop_1000w_3000w}
            alt="Propaganda Boticário 3"
            loading="lazy"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              position: "absolute",
            }}
          />
        </picture>

        <SlideTextContent
          numberOfButtons={1}
          smallTitleContent={<>Amor y Amistad es OBoticário</>}
          titleContent={
            <div>
              <span>Regalos desde 49.900</span>
            </div>
          }
        >
          <Button
            buttonHref="/"
            buttonType="secondary"
            buttonText="¡APROVECHA HOY!"
          />
        </SlideTextContent>
        <LegalText
          legalText={
            "*Referencias Seleccionadas*No acumulable *Hasta agotar existencias*Imagen de referencia. Fecha inicio 31/08/2023 Fecha fin 2/10/2023"
          }
        />
      </>
    ),
  },
  {
    content: (
      <>
        <picture className={styles.picture}>
          <source media="(max-width: 600px)" srcSet={Slide04_600w.src} />
          <source media="(max-width: 700px)" srcSet={Slide04_700w.src} />
          <source media="(max-width: 999px)" srcSet={Slide04_800w.src} />
          <source
            media="(min-width: 1000px)"
            srcSet={Slide04_desktop_1000w_3000w.src}
            style={{ minHeight: "54vw !important" }}
          />
          <Image
            src={Slide04_desktop_1000w_3000w}
            alt="Propaganda Boticário 4"
            loading="lazy"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              position: "absolute",
            }}
          />
        </picture>

        <SlideTextContent
          numberOfButtons={1}
          smallTitleContent={
            <div>
              <span>
                BOTIK Tecnología Suiza. Resultados rápidos y comprobados
              </span>
            </div>
          }
          titleContent={
            <div>
              <span>Combos hasta 25% OFF</span>
            </div>
          }
        >
          <Button buttonHref="/" buttonType="main" buttonText="¡LO NECESITO!" />
        </SlideTextContent>
        <LegalText
          legalText={
            "*Referencias Seleccionadas*No acumulable *Hasta agotar existencias*Imagen de referencia. Fecha inicio 31/08/2023 Fecha fin 2/10/2023."
          }
        />
      </>
    ),
  },
]
