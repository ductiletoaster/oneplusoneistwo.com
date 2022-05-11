import React from "react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { useRouter } from "next/router"

export interface LinkProps extends NextLinkProps {
  children: React.ReactNode
}

export default function Link(props: LinkProps) {
  const { children, ...rest } = props
  const router = useRouter()
  let locale = rest.locale || ""
  if (Array.isArray(router.query.locale)) {
    locale = router.query.locale[0]
  } else {
    locale = router.query?.locale || ""
  }

  let href = rest.href || router.asPath
  if (locale) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace("[locale]", locale)
  }

  return (
    <>
      <NextLink href={href}>
        <a {...rest} href={rest.href.toString()}>
          {children}
        </a>
      </NextLink>
    </>
  )
}
