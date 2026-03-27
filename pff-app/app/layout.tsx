import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'PFF Team Generator',
  description: 'Pure Football Fun Group Team Generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="screen-gradient text-on-surface font-body selection:bg-primary selection:text-on-primary overflow-x-hidden pt-24 pb-32">
        <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-[#0e0e0f] z-50 shadow-[0_4px_20px_rgba(57,255,20,0.1)]">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#39FF14] cursor-pointer scale-95 active:scale-90 transition-transform">menu</span>
            <h1 className="font-headline font-bold uppercase tracking-tight text-[#39FF14] text-lg italic">KINETIC PITCH</h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-[#1a191b] to-transparent h-[1px]"></div>
        </header>

        {/* Global Background Layer */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent-purple/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfI53UUUSdWKsTudV2cgi-a4vp_jVVzlE2YfyWrmA_SBILf_mIlf14ycTi3Tly-SFz-KtLLHEsJmPdAAAMV3QnOU0_jryKcEaCdBYcMsCtDdi6KQ2L0uAZ1wv6EDM2GnrCujhkqfatjA4M17APHACryc-v_nKzqzknEVVMQcWtur7w5JfE04H-9W2IVqCGcVN5TV55wEXtO4RMVLDFziy9KItLKzC06ZSRZWoRZWzcQCXHL5-dMCxXZCDPfTNVCW6BccazKIQIPQ" 
                alt="Pitch Background" 
                className="w-[120%] h-auto object-cover mask-radial scale-110" 
              />
            </div>
        </div>

        <main className="relative min-h-screen">
          {children}
        </main>

        <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#131314]/80 backdrop-blur-md rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.6)]">
          <a href="/" className="flex flex-col items-center justify-center text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.8)] animate-pulse-slow">
            <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
            <span className="font-headline text-[10px] font-bold uppercase tracking-widest">Home</span>
          </a>
          <a href="/new-game" className="flex flex-col items-center justify-center text-gray-500 hover:text-[#BC13FE] transition-all">
            <span className="material-symbols-outlined mb-1">groups</span>
            <span className="font-headline text-[10px] font-bold uppercase tracking-widest">Teams</span>
          </a>
          <a href="/database" className="flex flex-col items-center justify-center text-gray-500 hover:text-[#BC13FE] transition-all">
            <span className="material-symbols-outlined mb-1">database</span>
            <span className="font-headline text-[10px] font-bold uppercase tracking-widest">Database</span>
          </a>
        </nav>
      </body>
    </html>
  )
}
