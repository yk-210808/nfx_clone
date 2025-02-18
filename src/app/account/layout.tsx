import LayoutBox from "@/components/layouts/layoutBox";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutBox>
      {children}
    </LayoutBox>
  )
}