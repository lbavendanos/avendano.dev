import Container from '../Container'

interface SeparatorProps extends React.ComponentPropsWithoutRef<'div'> {}

export default function Separator(props: SeparatorProps) {
  return (
    <Container {...props}>
      <hr className="block border-t border-gray-200 dark:border-gray-700" />
    </Container>
  )
}
