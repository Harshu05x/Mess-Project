import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1>Sample Shadcn Template</h1>
      <Button className="mt-4">Click me</Button>
    </main>
  )
}
