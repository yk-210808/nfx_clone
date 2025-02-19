'use client'
// import Link from "next/link"
// import { isUserLogin } from "@/utils/supabase/functions"
// import { useEffect, useState } from "react";
// import { FaRegUserCircle } from "react-icons/fa";


export default function LayoutHeader({ children }: { children: React.ReactNode }) {
  // const [login, setLogin] = useState(false)

  // async function checkLogin() {
  //   const result = await isUserLogin()

  //   // console.log(result.user);
    
  // }

  // useEffect(() => {
  //   checkLogin()
  // },[])
  
  return (
    <header>
      <div id="header" className="c-header">
        <div className="inner-block">
          {children}
        </div>
      </div>
    </header>
  )
}