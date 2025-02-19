import LayoutBox from "@/components/layouts/layoutBox";
import LayoutHeader from "@/components/layouts/layoutHeader";
import { Logo } from "@/components/elements";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutHeader>
        <Logo />
      </LayoutHeader>
      <LayoutBox>
        {children}
      </LayoutBox>
    </>
  )
}