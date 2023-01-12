import HomeSeo from './components/HomeSeo'
import Container from 'lib/components/Container'
import BaseLayout from '@/layouts/base'
import HomeOverview from './components/HomeOverview'

export default function HomeModule() {
  return (
    <BaseLayout>
      <HomeSeo />
      <Container className="my-4 md:my-6 lg:my-8 xl:my-10">
        <HomeOverview />
      </Container>
    </BaseLayout>
  )
}
