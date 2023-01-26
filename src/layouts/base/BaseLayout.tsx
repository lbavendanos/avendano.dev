import { cn } from 'lib/utils/helpers'
import Container from '@/common/components/Container'
import Separator from '@/common/components/Separator'
import BaseNavbar from './components/BaseNavbar'
import BaseFooter from './components/BaseFooter'

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
          <BaseNavbar />
        </Container>
      </header>
      <main className="grow">{children}</main>
      <Separator />
      <BaseFooter className="mt-auto" />
    </div>
  )
}
