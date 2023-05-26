import Link from 'next/link';

interface Card {
  name: string;
  current_price: number;
  high_24h: number;
  market_cap: number;
  market_cap_rank: number;
}

const getCoin = async (symbol: string) => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${symbol}?tickers=true&market_data=true`);
  if (!res.ok) throw new Error('Network response was not ok');
  return await res.json();
};

export default async function Page({ params }: { params: any }) {
  const { symbol } = params
  const coin = await getCoin(symbol);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="flex flex-col">
        <div className="flex-1 p-4">
          <h2 className="text-xl font-semibold mb-2">{coin.name}</h2>
          <ul className="list-disc pl-5">
            <li>Current Price: ${coin.market_data.current_price.usd}</li>
            <li>All time high price: ${coin.market_data.ath.usd}</li>
            <li>Market Cap: ${coin.market_data.market_cap.usd}</li>
            <li>Market Cap Rank: {coin.market_data.market_cap_rank}</li>
          </ul>
        </div>
        <div className="p-4">
          <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back
          </Link>
        </div>
      </div>
    </div>
  )
}
