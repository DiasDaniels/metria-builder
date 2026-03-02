"use client";

import { useEffect } from "react";
import { RenderEngine } from "@/components/canvas/RenderEngine";
import { PropertyPanel } from "@/components/editor/PropertyPanel";
import { MOCK_LAYOUT } from "@/lib/mock-data";
import { useLayoutStore } from "@/store/useLayoutStore";


export default function Home() {
  
  const layout = useLayoutStore((state) => state.layout);
  const setLayout = useLayoutStore((state) => state.setLayout);
  useEffect(()=>{setLayout(MOCK_LAYOUT)}, [setLayout]);

  return (
    <main className="min-h-screen p-8 bg-gray-50 flex">
      <PropertyPanel />
      <h1 className="text-2xl font-bold">Metria Builder - Start Canvas</h1>
      <div className="flex-1">
        <RenderEngine layout = {layout} />
      </div>
      
    </main>
  )
}