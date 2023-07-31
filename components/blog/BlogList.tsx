import Image from "next/image";
import Link from "next/link";
import { githubGetAllIssues } from "@/lib/githubApi";

async function BlogList() {
  const issues = await githubGetAllIssues();
  return (
    <div className="row-auto grid grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
      {issues?.map((item: any) => {
        const { id, title, body, number } = item || {};
        return (
          <Link href={`/blog/${number}`} key={id}>
            <div className="min-h-[350px] overflow-hidden rounded-lg border border-gray-100 shadow-md">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src="/image-1.jpg"
                  alt="bg"
                  fill
                  style={{ objectFit: "cover" }}
                  quality={10}
                  className="duration-300 ease-in-out hover:scale-110"
                />

                <div className="pointer-events-none absolute left-0 top-0  flex h-full w-full items-center justify-center bg-black px-4 opacity-40">
                  <h1 className=" text-2xl text-white ">{title}</h1>
                </div>
              </div>
              <div className="p-5">
                <div className="text-lg font-bold">{title}</div>
                <div className="mt-2 line-clamp-2">{body}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default BlogList;
