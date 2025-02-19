"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
// import styles from '@/styles/modules/lists.module.scss'
import '@splidejs/react-splide/css';

export function ListHeader() {
  return (
    <ul className="list">
      <li>
        <Link href="/browse">ホーム</Link>
      </li>
      <li>
        <Link href="/browse/genre/tv">TV番組・ドラマ</Link>
      </li>
      <li>
        <Link href="/browse/genre/movie">映画</Link>
      </li>
      <li>
        <Link href="/browse/latest">新作＆人気作</Link>
      </li>
      <li>
        <Link href="/browse/my_list">マイリスト</Link>
      </li>
    </ul>
  )
}

export function ListSlider({ list }: { list: any[] }) {
  const [isMounted, setIsMounted] = useState(false)
  const path = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Splide
      options={{
        // type: "loop",
        perPage: 5,
        gap: '1rem',
      }}
    >
      <SplideTrack>
        {list.map((item, index) => (
          <SplideSlide key={index}>
            <Image
              src={path + item.poster_path}
              width={300}
              height={450}
              alt={item.title || "Movie Poster"}
              priority
            />
          </SplideSlide>
        ))}
      </SplideTrack>
      {/* {list && list.map((item, index) => (
            <div key={index}>
              <Image src={path + item.poster_path} width={300} height={450} alt=""></Image>
            </div>
          ))} */}


    </Splide>
  )
}