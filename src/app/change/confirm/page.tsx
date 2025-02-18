import Link from "next/link"

export default function ChangeConfirmPage() {
  return(
    <div className="text-center">
      <p>確認メールを送信しました。</p>
      <p className="mb-4">リンクをクリックし、<br className="pc"/>登録・変更を完了させてください。</p>
      <p><Link href="/" className="underline">トップページ</Link>へ戻る</p>
    </div>
  )
}