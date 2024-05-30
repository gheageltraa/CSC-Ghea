"use client"
import Image from "next/image";
import Link from "next/link"

export default function Home() {
  function greetUser  () {
    alert("Welcome User")

  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={'/appGege'}>
        Test page
        GHEA
      </Link>

      <Link href={'/components/list'}>
        <button></button>
      </Link>

      <Link href={'/components/list'}>
        <button>profil</button>
      </Link>

      <Link href={'/test'}>
        Test2 page
      </Link>
      <button onClick={greetUser}>
        Greet
      </button>
    </main>
  );
}
