import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="column">
            <h1>Click on your name to the right</h1>
            <Link className="names" href="/aarez">Aarez</Link>
            <Link href="/affiq">Affiq</Link>
            <Link href="/andy">Andy</Link>
            <Link href="/angelina">Angelina</Link>
            <Link href="/daniel">Daniel</Link>
            <Link href="/zainuddin">Zainuddin</Link>
        </div>
    );
}