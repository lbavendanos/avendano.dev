import { cn } from 'lib/utils/helpers'
import Container from 'lib/components/Container'
import BaseFooterSpotifyNow from '../BaseFooterSpotifyNow'

interface BaseFooterProps extends React.ComponentPropsWithoutRef<'footer'> {}

export default function BaseFooter({ className, ...props }: BaseFooterProps) {
  return (
    <footer {...props} className={cn('flex py-5', className)}>
      <Container>
        <BaseFooterSpotifyNow />
      </Container>
    </footer>
  )
}
