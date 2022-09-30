import React from "react"
import { StaticImage } from "gatsby-plugin-image"

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
        <p className="mb-8 mx-10">Com informações completas sobre cada uma das nossas unidades, cardápios atualizados, fotos e muito mais.</p>
        <p className="">Aguarde... :)</p>
      </div>

      <div className="w-44 mt-32">
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
