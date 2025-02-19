import Link from "next/link";

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