import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import thumbInkdrop from '../public/images/atom.jpg'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A markdown note-taking app
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A markdown note-taking app
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Old works
          </Heading>
          <Section delay={0.4}>
            <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A markdown note-taking app
            </WorkGridItem>
          </Section>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works