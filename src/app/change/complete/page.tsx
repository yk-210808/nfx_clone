import LayoutBox from "@/components/layouts/layoutBox";
import Link from "next/link";

export default function emailConfirmationCompletePage() {
  return (
    <div className="text-center">
      <p className="mb-4">変更が完了しました。</p>
      <p><Link href="/" className="underline">トップページ</Link>へ戻る</p>
      <p><Link href="/account" className="underline">マイページ</Link>へ戻る</p>
    </div>
  );
}