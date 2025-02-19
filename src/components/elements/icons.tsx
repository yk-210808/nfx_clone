import Link from "next/link"
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

export function AccountIcon() {
  return (
    <Link href="/account" className="icon"><FaRegUserCircle className="w-8 h-8" /></Link>
  )
}

export function SearchIcon() {
  return (
    <>
      <button type="button" className="icon"><IoIosSearch className="w-6 h-6" /></button>
    </>
  )
}