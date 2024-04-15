import {Button, Input, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
export const Header = () => {
  return (
    <Navbar className="border-b-2 border-gray-280" classNames={{wrapper: "max-w-full"}}>
      <NavbarBrand>
        <p className="font-bold text-inherit text-3xl">MYTTY</p>
      </NavbarBrand>
      <div className="w-[640px]">
        <Input
          isClearable
          radius="sm"
          placeholder="キーワードで検索"
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 text-slate-400 pointer-events-none" />
          }
        />
      </div>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="#" className="text-black/50 hover:opacity-100 hover:text-black font-bold">
            ログイン
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" radius="sm" className="font-bold">
            会員登録
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
