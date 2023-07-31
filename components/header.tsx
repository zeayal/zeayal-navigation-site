import { siteConfig } from "@/config/constants";
import { Icons } from "./icons";
import Link from "next/link";

export default function Header() {
  const menuList = [
    {
      id: 1,
      link: "/",
      title: "主页",
      active: true,
    },
    {
      id: 2,
      link: "/my-project",
      title: "我的作品",
      active: false,
    },
  ];

  return (
    <section className="flex h-12 w-screen flex-row items-center justify-between border-b px-5">
      <div className="flex flex-row items-center">
        <Icons.logo fontSize={30} />
        <span className="ml-2">{siteConfig.title}</span>
      </div>
      <div>
        <nav className="fixed left-0 top-12">
          <ul className="flex w-screen flex-col divide-y divide-slate-200 bg-slate-100 px-2">
            {menuList.map((menu) => (
              <li
                className={`p-2 active:bg-purple-500 active:text-white`}
                key={menu.id}
              >
                <Link href={menu.link}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
