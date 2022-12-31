import Container from '@/lib/components/Container'
import BaseLayout from '@/layouts/base'
import HomeOverview from './components/HomeOverview'

export default function HomeModule() {
  return (
    <BaseLayout>
      <Container className="my-10">
        <HomeOverview />
      </Container>
    </BaseLayout>
  )
}
