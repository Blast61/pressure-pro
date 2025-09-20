import ListClient from "@/components/conf/ListClient";

export default function Home(){
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Explore Conferences</h1>
      <p className="text-neutral-600 text-sm">Powered by our API route. </p>
      <ListClient />
    </div>
  )
}