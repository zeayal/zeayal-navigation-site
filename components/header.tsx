import { Icons } from "./icons";

export default function Header() {
    return (
        <section className="w-screen h-12 flex flex-row justify-between items-center px-5 border-b">
            <div className="flex flex-row items-center">
                <Icons.logo fontSize={30} />
                <span className="ml-2">sitePro</span>
            </div>
            <div>
                <div  className="flex flex-row items-center">
                    <Icons.wallet fontSize={30} />
                    <span  className="ml-2">连接</span>
                </div>
            </div>
        </section>
    )
}