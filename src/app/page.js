import Image from "next/image";
import UserList from "./components/UserList";

export default function Home() {
  return (
    <main className=" items-center justify-between text-center  p-24">
      <h1 className="text-xl mb-8">Hello</h1>
      <UserList />
    </main>
  );
}
