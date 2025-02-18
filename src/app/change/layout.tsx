import LayoutBox from "@/components/layouts/layoutBox"

export default function ChangeLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutBox>
      {children}
    </LayoutBox>
  )
}