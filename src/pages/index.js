import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { SEO } from "../components/seo"

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
        <a href={'cardapio-natal.pdf'} download>
          <div className="flex justify-center items-center border-2 border-support border-dashed rounded-3xl p-8 m-6">
              <StaticImage
              src="./../assets/icone-boneco-natal.png"
              alt="icone-boneco-natal"
              title="Icone Boneco de Natal"
              placeholder="dominantColor"
              layout="fixed"
              loading="eager"
              height={128}
              />
            <div>
              <StaticImage
                src="./../assets/texto-cardapio-natal.png"
                alt="texto-cardapio"
                title="texto cardapio"
                placeholder="dominantColor"
                layout="fixed"
                loading="eager"
                width={149}
                />
              <h3 className="text-left ml-2 mt-4">É só clicar aqui</h3>
            </div>
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
  <SEO />
)