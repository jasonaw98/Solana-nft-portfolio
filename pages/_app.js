import '@/styles/globals.css'
import MintsByOwnerPage from './mintByOwner'
import { Analytics } from '@vercel/analytics/react';
import Ads from './ads';


export default function App() {
  return <div>
    {/* <Ads/> */}
    <MintsByOwnerPage />
    <Analytics />
  </div>
}
