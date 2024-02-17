import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="grid grid-cols-1">
            <h1 className="text-2xl lg:text-4xl">Tech News for Busy Peeps</h1>
            <button>Browse Articles</button>
            <Image src="/coffee.png"  width={300} height={300} alt="Man with coffee"/>
        </section>
      
    )
}