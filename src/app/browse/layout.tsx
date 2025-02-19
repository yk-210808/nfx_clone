import LayoutHeader from "@/components/layouts/layoutHeader";
import { LogoSmall, AccountIcon, SearchIcon, ListHeader } from "@/components/elements";

export default function BrowseLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <LayoutHeader>
        <div className="flex">
          <LogoSmall />
          <ListHeader />
        </div>
        <div className="flex align-center gap-2">
          <SearchIcon />
          <AccountIcon />
        </div>
      </LayoutHeader>
      {children}
    </>
  )
}