import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Welcome to your new app!</h1>
      <div className="flex flex-col items-center">
        <Image src="/logo.svg" alt="Logo" width={200} height={200} />
        <p className="text-lg text-center mt-8">
          Get started by editing <code>pages/index.tsx</code>
        </p>
      </div>
    </main>
  )
}
