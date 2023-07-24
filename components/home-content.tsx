import { useEffect, useState } from "react";
import { Icon, IconFont } from "./icons";

type LinkType = { id: number; title: string; desc: string; url: string };

type Category = { id: number; title: string; icon: string, links: Array<LinkType>  };

function LinkList({
  list,
}: {
  list: LinkType[];
}) {
  return (
    <div className="grid grid-cols-6 auto-rows-max gap-4">
      {list?.map((link: LinkType) => {
        return (
            <div key={link.id} className="p-2 hover:bg-slate-400" onClick={() => {
                window.open(link.url, '_blank')
            }}>
                <IconFont icon={link.icon} />
                <a className="cursor-pointer ml-2">{link.title}</a>
            </div>
        );
      })}
    </div>
  );
}

export default function HomeContent() {
  const [currentCategory, setCurrentCategory] = useState<Category>();

  const [categories, setCategories] = useState<Category[]>([]);
  
  const getCategories = async () => {
    const res = await fetch('/api/categories').then(res => res.json());
    const list = res.data || [];
    setCategories(list);
   }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className="w-screen p-4">
      <nav className="flex flex-row">
        <div>
          {categories.map((category, idx) => (
            <a
              className="flex items-center p-2 w-20 border-b-2 cursor-pointer"
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
