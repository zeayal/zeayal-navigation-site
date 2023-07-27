import { useEffect, useState } from "react";
import { Icon, IconFont } from "./icons";
import Link from "next/link";

type LinkType = {
  id: number;
  title: string;
  desc: string;
  url: string;
  icon: string;
};

type Category = {
  id: number;
  title: string;
  icon: string;
  links: Array<LinkType>;
};

function LinkList({ list }: { list: LinkType[] }) {
  // const openFullscreen = () => {
  //   const elem = document.documentElement;
  //   if(!document.fullscreenElement) {
  //     elem.requestFullscreen().catch(e => alert(`error: ${e.message}`))
  //   }
  // }

  return (
    <div className="grid auto-rows-max grid-cols-6 gap-4">
      {list?.map((link: LinkType) => {
        return (
          <a
            onClick={() => {
              window.open(link.url, "_blank", "location=no");
            }}
            key={link.id}
            className="p-2 hover:bg-slate-400"
          >
            <IconFont icon={link.icon} />
            <a className="ml-2 cursor-pointer">{link.title}</a>
          </a>
        );
      })}
    </div>
  );
}

export default function HomeContent() {
  const [currentCategory, setCurrentCategory] = useState<Category>();

  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    const res = await fetch("/api/categories").then((res) => res.json());
    const list = res.data || [];
    setCategories(list);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className="w-screen p-4">
      <nav className="flex flex-row">
        <div>
          {categories.map((category, idx) => (
            <a
              className="flex w-20 cursor-pointer items-center border-b-2 p-2"
              key={category.id}
              onClick={() => setCurrentCategory(categories[idx])}
            >
              <IconFont icon={category.icon} />
              <span className="ml-2">{category.title}</span>
            </a>
          ))}
        </div>
        <LinkList list={currentCategory?.links || []} />
      </nav>
    </section>
  );
}
