import Link from "next/link"


export function Logo() {
  return (
    <Link href="/browse" className="inline-block w-44"><img src="/img/common/logo_netflix.png" alt="" /></Link>
  )
}

export function LogoSmall() {
  return (
    <Link href="/browse" className="inline-block w-32"><img src="/img/common/logo_netflix.png" alt="" /></Link>
  )
}