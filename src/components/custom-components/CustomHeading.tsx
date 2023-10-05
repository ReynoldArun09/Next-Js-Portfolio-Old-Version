import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'


interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    Linknumber?: string,
}


export default function CustomHeading({children, className, Linknumber, ...props}:HeadingProps) {
  return (
    <h1 className={cn(className, className="font-bold text-portdark space-x-3 font-headingFont2 text-4xl dark:text-portlight")} {...props}>
        <span className='text-portlighttext dark:text-portdarktext'>{Linknumber}</span>
        <span>&#60; {children} &#62;</span>
    </h1>
  )
}
