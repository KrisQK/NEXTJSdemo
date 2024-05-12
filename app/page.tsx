import React from "react"; // Add this line
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
    return (
        <main>
            <h1>helloworld</h1>
            <Link href="/users">users</Link>
            <ProductCard />
        </main>
    );
}
