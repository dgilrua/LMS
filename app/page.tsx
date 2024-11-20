import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <p className='text-slate-600 text-2xl font-medium'>Hola mundo</p>
      <Button variant='destructive'> Click me </Button>
    </div>
  )
}
