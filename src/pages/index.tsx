import ConnectWallet from "@/widgets/metamask";
import Image from "next/image";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b  from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Metamask Wallet Starter&nbsp;
          <a className=' underline ml-2 font-bold' href="https://github.com/Niko030303" target='_black'>@Niko</a>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center transition-colors rounded-lg p-2 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ConnectWallet />
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
      <h2 className={`mb-3 text-6xl font-semibold`}>
          Metamask Wallet Demo
          </h2>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="https://github.com/Niko030303/metamask-wallet-starter"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          Github Repo{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            <i className="ri-github-fill"></i>
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Click and Star Metamask Wallet Starter on Github 🌟
          </p>
        </a>
      </div>
    </main>
  );
}
