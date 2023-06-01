import '@/styles/globals.css'
import MintsByOwnerPage from './mintByOwner'
import { Analytics } from '@vercel/analytics/react';


export default function App() {
  return <div>
    <MintsByOwnerPage />
    <Analytics />
  </div>
}
