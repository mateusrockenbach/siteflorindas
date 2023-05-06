import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { Seo } from "../components/seo"

export default function Home() {
  return ( 
    <main className="h-screen flex flex-col items-center">
      <div className="max-w-md text-center flex flex-col items-center">

        <div className="w-44 mt-24 pb-11">
          <StaticImage
            src="./../assets/logo.png"
            alt="florindas"
            title="florindas"
            placeholder="tracedSVG"
            layout="fullWidth"
            loading="eager"
          />
        </div>

        <div className="w-80 mx-auto mb-8 mt-8">
          <StaticImage
            src="./../assets/estamos-preparando-um-site-novinho.png"
            alt="estamos-preparando-um-site-novinho"
            title="estamos-preparando-um-site-novinho"
            placeholder="tracedSVG"
            layout="fullWidth"
            loading="eager"
          />
        </div>
        <p className="mb-20 mx-10">Com informações completas sobre cada uma das nossas unidades, cardápios, fotos e muito mais. <br /><br />Mas enquanto ele não chega você pode conferir o nosso cardápio novinho que acabamos de lançar!</p>
        {/* <a href={'cardapio-florindas-2023.pdf'} download className="inline-block">
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
        </a> */}
      </div>

      <div className="w-2/3 flex flex-wrap gap-3 items-start content-center justify-center pb-14">
        <div className="w-60">
          <Zoom>
            <StaticImage
              src="./../assets/pagina1.jpeg"
              alt="pagina-1"
              placeholder="blurred"
              layout="fullWidth"
              loading="eager"
              // height={150}
            />
          </Zoom>          
        </div>
        <div className="w-60">
          <Zoom>
            <StaticImage
              src="./../assets/pagina2.jpeg"
              alt="pagina-2"
              placeholder="blurred"
              layout="fullWidth"
              loading="eager"
              // height={150}
            />
          </Zoom>          
        </div>
        <div className="w-60">
          <Zoom>
            <StaticImage
              src="./../assets/pagina3.jpeg"
              alt="pagina-3"
              placeholder="blurred"
              layout="fullWidth"
              loading="eager"
              // height={150}
            />
          </Zoom>          
        </div>
        <div className="w-60">
          <Zoom>
            <StaticImage
              src="./../assets/pagina4.jpeg"
              alt="pagina-4"
              placeholder="blurred"
              layout="fullWidth"
              loading="lazy"
              // height={150}
            />
          </Zoom>          
        </div>                
        <div className="w-60">
          <Zoom>
            <StaticImage
              src="./../assets/pagina5.jpeg"
              alt="pagina-5"
              placeholder="blurred"
              layout="fullWidth"
              loading="lazy"
              // height={150}
            />
          </Zoom>          
        </div>  
        <div className="w-60">
          <Zoom>
            <StaticImage
              src="./../assets/pagina6.jpeg"
              alt="pagina-6"
              placeholder="blurred"
              layout="fullWidth"
              loading="lazy"
              // height={150}
            />
          </Zoom>          
        </div> 
        <div className="w-60">
          <Zoom>
            <StaticImage
              src="./../assets/pagina7.jpeg"
              alt="pagina-7"
              placeholder="blurred"
              layout="fullWidth"
              loading="lazy"
              // height={150}
            />
          </Zoom>          
        </div> 
        <div className="w-60">
          <Zoom>
            <StaticImage
              src="./../assets/pagina8.jpeg"
              alt="pagina-8"
              placeholder="blurred"
              layout="fullWidth"
              loading="lazy"
              // height={150}
            />
          </Zoom>          
        </div>  
        <div className="w-60">
          <Zoom>
            <StaticImage
              src="./../assets/pagina9.jpeg"
              alt="pagina-9"
              placeholder="blurred"
              layout="fullWidth"
              loading="lazy"
              // height={150}
            />
          </Zoom>          
        </div>                
      </div>
    </main>
  )   
}

export const Head = () => (
  <Seo />
)