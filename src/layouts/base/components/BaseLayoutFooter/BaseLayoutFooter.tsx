import { cn } from 'lib/utils/helpers'
import Container from 'lib/components/Container'
import BaseLayoutFooterSpotifyNow from '../BaseLayoutFooterSpotifyNow'

interface BaseLayoutFooterProps
  extends React.ComponentPropsWithoutRef<'footer'> {}

export default function BaseLayoutFooter({
  className,
  ...props
}: BaseLayoutFooterProps) {
  return (
    <footer {...props} className={cn('flex py-5', className)}>
      <Container>
        <BaseLayoutFooterSpotifyNow />
      </Container>
    </footer>
  )
}
