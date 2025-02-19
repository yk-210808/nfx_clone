// 'use client'
// import { useEffect } from "react"
import { getLists } from "@/utils/tmdb/functions"
import { ListSlider } from "@/components/elements"

// const ListsArrival = async () => {
//   const lists = await getLists({ type: 'movie' })

//   return (
//     <ListSlider data={lists} />
//   )
// }

export default async function BrowsePage() {
  const lists = await getLists({ type: 'movie' })

  // console.log(lists);


  // useEffect(() => {
  //   console.log(lists);
  // }, [])



  return (
    <>
      {/* <h2>マイリスト</h2> */}

      <h2>Netflix新着作品</h2>
      <ListSlider list={lists} />
    </>
  )
}