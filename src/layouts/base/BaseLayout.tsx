import { cn } from 'lib/utils/helpers'
import Container from 'lib/components/Container'
import Separator from 'lib/components/Separator'
import BaseLayoutFooter from './components/BaseLayoutFooter'
import BaseLayoutNavbar from './components/BaseLayoutNavbar'

export interface BaseLayoutProps {
  children?: React.ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div
      className={cn(
        'flex flex-col min-h-s-screen',
        'bg-gray-50 dark:bg-gray-900'
      )}
    >
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
