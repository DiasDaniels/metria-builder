import { RenderEngine } from "@/components/canvas/RenderEngine";
import { MOCK_LAYOUT } from "@/lib/mock-data";


export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-2xl font-bold">Metria Builder - Start Canvas</h1>
      <p className="text-gray-600">Render Motor here</p>
      <RenderEngine layout= {MOCK_LAYOUT} />
    </main>
  )
}