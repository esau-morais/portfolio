import { useMemo } from "react"

import { Link, type LinkProps } from "@remix-run/react"

import { cx } from "@/utils/classNames"

type TRedirectProps = {
  label: string
  to: LinkProps['to']
  direction?: 'west' | 'east' | 'northeast'
}

const Redirect = ({ to, label, direction }: TRedirectProps) => {
  const renderArrowIconBasedOnDirection = useMemo(() => { 
    switch(direction) {
      case 'west':
        return '←'
      case 'east':
        return '→'
      case 'northeast':
        return '↗'
      default:
          return null
    }
  }, [direction])

  return (
      <Link
        role="link"
        className={cx("flex text-xl-mb md:text-xl font-extrabold", direction ? direction === 'west' ? 'flex-row-reverse' : 'justify-between'  : null)}
        to={to}
        prefetch="render"
      >
        <span className="line-clamp-1">
          {label}
        </span>
        {direction ? 
          <span
            data-testid="navigation_arrow"
            aria-label={`navigate to ${to}`}
            className={cx(direction === 'west' ? 'mr-2' : 'ml-2')}
          >
            {renderArrowIconBasedOnDirection}
          </span>
        : null}
      </Link>
  )
}

export default Redirect
