import Image from 'next/image'
import { Box } from '../Box'
import { Title } from '../Title'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import imgTemp from '@/assets/breve.jpg'

export function Projects() {
  return (
    <section
      id="project"
      className="flex flex-col items-center justify-center  bg-black-900 "
    >
      <Title title="Projetos" />

      <Box>
        <div className="flex justify-center border-b-[1px] border-black-500 pb-[4rem]">
          <div className="w-[90%] px-9 lg:px-0">
            <Carousel
              className="flex flex-col"
              autoPlay={true}
              infiniteLoop
              showThumbs={false}
            >
              {Array(5)
                .fill('')
                .map((item, index) => (
                  <div key={`${item}-${index}`} className="h-96 w-[100%]">
                    <Image
                      src={imgTemp}
                      alt="Image 1"
                      loading="eager"
                      priority
                    />
                    <p className="legend">Legenda 1</p>
                  </div>
                ))}
            </Carousel>
          </div>
        </div>
      </Box>
    </section>
  )
}
