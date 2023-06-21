import { Box, Flex } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Title } from '../Title'

export const MyProjects = () => {
  return (
    <Flex flexDir="column" id="projects" width="100%">
      <Title title="Projetos" mt="1rem" />

      <Box width="100%" mx="auto" maxW="800px">
        <Carousel autoPlay={true} infiniteLoop>
          <div style={{ height: '390px' }}>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              alt="Image 1"
            />
            <p className="legend">Legenda 1</p>
          </div>
          <div style={{ height: '390px' }}>
            <img
              src="https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4="
              alt="Image 1"
            />
            <p className="legend">Legenda 1</p>
          </div>
          <div style={{ height: '390px' }}>
            <img
              src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg"
              alt="Image 1"
            />
            <p className="legend">Legenda 1</p>
          </div>
        </Carousel>
      </Box>
    </Flex>
  )
}
