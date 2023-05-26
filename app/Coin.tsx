import Image from 'next/image';
import Link from 'next/link';

export interface Coin {
  id: string;
  image: string;
  name: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
}

export default function Card({ coin }: { coin: Coin}) {
  return (
    <div key={coin.id} className="flex flex-col mb-8">
      <Image
        src={coin.image}
        alt="placeholder"
        width={200}
        height={200}
        className="object-cover object-center"
      />
      <div className="flex-1 p-4">
        <h2 className="text-xl font-semibold mb-2">{coin.name}</h2>
        <ul className="list-disc pl-5">
          <li>Current Price: ${coin.current_price}</li>
          <li>24h High: ${coin.high_24h}</li>
          <li>24h Low: ${coin.low_24h}</li>
        </ul>
      </div>
      <div className="p-4">
        <Link href={`/currency/${coin.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          More
        </Link>
      </div>
    </div>
  );
}
