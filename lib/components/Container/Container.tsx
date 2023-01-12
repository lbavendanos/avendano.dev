import { cn } from 'lib/utils/helpers'
import React from 'react'

export interface ContainerProps extends React.ComponentPropsWithRef<'div'> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn('container mx-auto w-full max-w-2xl px-4', className)}
      />
    )
  }
)

Container.displayName = 'Container'

export default Container
