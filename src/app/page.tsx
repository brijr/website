import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Image
        src="../logo.svg"
        alt="Bridger Tower Logo"
        width={36}
        height={29.31}
      />
    </div>
  );
}
