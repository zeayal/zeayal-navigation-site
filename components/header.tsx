import { siteConfig } from "@/config/constants";
import { Icons } from "./icons";
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'


export default function Header() {

    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
      connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()
   
    if (isConnected)
      return (
        <div>
          Connected to {address}
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      )
    return <button onClick={() => connect()}>Connect Wallet</button>

    return (
        <section className="w-screen h-12 flex flex-row justify-between items-center px-5 border-b">
            <div className="flex flex-row items-center">
                <Icons.logo fontSize={30} />
                <span className="ml-2">{siteConfig.siteName}</span>
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