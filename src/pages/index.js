import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Seo } from "../components/seo"

export default function Home() {
  return ( 
    <main className="h-screen flex flex-col justify-center items-center">
      <div className="max-w-md text-center">
        <div className="w-80 mx-auto mb-8">
          <StaticImage
            src="./../assets/estamos-preparando-um-site-novinho.png"
            alt="estamos-preparando-um-site-novinho"
            title="estamos-preparando-um-site-novinho"
            placeholder="tracedSVG"
            layout="fullWidth"
            loading="eager"
          />
        </div>
        <p className="mb-20 mx-10">Com informações completas sobre cada uma das nossas unidades, cardápios atualizados, fotos e muito mais. Aguarde... :)</p>
        <a href={'cardapio-florindas-2023.pdf'} download className="inline-block">
          <div className="flex justify-center items-center">
              <StaticImage
              src="./../assets/confira-cardapio-2023.png"
              alt="cardapio 2023"
              title="Icone Boneco de Natal"
              placeholder="dominantColor"
              layout="fixed"
              loading="eager"
              height={150}
              />
          </div>
        </a>
      </div>

      <div className="w-44 mt-24">
        <StaticImage
          src="./../assets/logo.png"
          alt="florindas"
          title="florindas"
          placeholder="tracedSVG"
          layout="fullWidth"
          loading="eager"
        />
      </div>
    </main>
  )   
}

export const Head = () => (
  <Seo />
)