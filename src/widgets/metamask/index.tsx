import { useConnectMetamask } from "@/hooks/use-connect-metamask";



const Accounts = ({ addresses, settings }: { addresses: string[], settings: any[] }) => {
  return (
    <div className="group">
      <div className="py-2 px-4 cursor-pointer hover:opacity-80 focus:opacity-100 select-none border rounded-md border-gray-200 bg-black text-white ml-4 flex items-center gap-2">
        <h1>{addresses[0]}</h1>
      </div>
      <div className="py-2 px-4 cursor-pointer fixed w-24 text-center hover:opacity-80 focus:opacity-100 select-none rounded-md border-gray-200 bg-transparent border text-black ml-4 items-center gap-2 hidden group-hover:block hover:border-gray-300 hover:bg-gray-100">
        {settings.map((setting:any) => (
          <div key={setting.name} onClick={setting?.onclick}>
            <h1>{setting.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ConnectWallet() {
  const { addresses, loading, isConnect, logout, connectMetamask } =
    useConnectMetamask();

    const settings = [{ name: "Logout", onclick: logout }];

  return isConnect ? (
    <Accounts addresses={addresses} settings={settings}/>
  ) : (
    <div
      onClick={connectMetamask}
      className="py-2 px-4 cursor-pointer hover:opacity-80 focus:opacity-100 select-none border rounded-md border-gray-200 bg-black text-white ml-4 flex items-center gap-2"
    >
      {loading && <i className="ri-more-fill"></i>}
      <h1>🦊 Connect Wallet</h1>
    </div>
  );
}
