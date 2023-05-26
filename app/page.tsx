import Card, { Coin } from "./Coin";

const getCoins = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=45');
  if (!res.ok) throw new Error('Network response was not ok');
  return await res.json();
};

export default async function Home() {
  const coins: Coin[] = await getCoins();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {coins.map((coin) => <Card coin={coin} />)}
      </div>
    </div>
  );
}