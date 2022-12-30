import Container from '@/lib/components/Container'
import Separator from '@/lib/components/Separator'
import BaseLayoutFooter from './components/BaseLayoutFooter'
import BaseLayoutNavbar from './components/BaseLayoutNavbar'

export interface BaseLayoutProps {
  children?: React.ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Container>
          <BaseLayoutNavbar />
        </Container>
      </header>
      <main className="grow">{children}</main>
      <Separator />
      <BaseLayoutFooter className="mt-auto" />
    </div>
  )
}
