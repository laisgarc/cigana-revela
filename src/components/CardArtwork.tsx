/** Ilustração vetorial decorativa original; não representa o baralho físico da profissional. */
function CelestialCard({ variant }: { variant: 'moon' | 'key' | 'heart' }) {
  return <svg viewBox="0 0 220 360" fill="none" aria-hidden="true">
    <rect x="1" y="1" width="218" height="358" rx="12" fill={variant === 'moon' ? '#28171e' : '#1b1319'} stroke="#b79a6b" strokeWidth="1.2"/>
    <rect x="11" y="11" width="198" height="338" rx="5" stroke="#b79a6b" strokeOpacity=".55"/>
    <path d="M22 62V27h35M163 27h35v35M22 298v35h35m106 0h35v-35" stroke="#d2b588"/>
    <path d="m110 30 4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" stroke="#d2b588"/>
    <circle cx="110" cy="170" r="69" stroke="#b79a6b" strokeOpacity=".55"/>
    <circle cx="110" cy="170" r="77" stroke="#b79a6b" strokeOpacity=".3" strokeDasharray="1 6"/>
    {Array.from({length: 12}, (_,i) => <path key={i} d="M110 83v-7" stroke="#b79a6b" transform={`rotate(${i*30} 110 170)`}/>)}
    {variant === 'moon' && <><path d="M130 121a51 51 0 1 0 15 87c-43 10-69-47-15-87Z" fill="#c4a374" fillOpacity=".14" stroke="#d8bd90" strokeWidth="1.4"/><path d="m142 146 3 9 9 3-9 3-3 9-3-9-9-3 9-3Z" stroke="#e1c79d"/><circle cx="154" cy="187" r="2" fill="#c4a374"/><circle cx="117" cy="139" r="1.5" fill="#c4a374"/></>}
    {variant === 'key' && <g transform="rotate(-30 110 170)" stroke="#d8bd90" strokeWidth="1.6"><circle cx="110" cy="143" r="21"/><circle cx="110" cy="143" r="10"/><path d="M110 164v62h23v-12h-12v-11h12v-12h-23M103 175h14"/></g>}
    {variant === 'heart' && <><path d="M110 207c-11-13-45-31-45-57 0-27 33-31 45-7 12-24 45-20 45 7 0 26-34 44-45 57Z" fill="#8a293a" fillOpacity=".35" stroke="#d8bd90" strokeWidth="1.6"/><path d="M110 131v-13m-31 12-8-9m70 9 8-9" stroke="#b79a6b"/></>}
    <path d="M60 282c18-8 22-19 14-31 17 7 20 17 12 27m74 4c-18-8-22-19-14-31-17 7-20 17-12 27M60 282c18-2 35 0 50 7 15-7 32-9 50-7M78 288c5 17 18 19 32 1m32-1c-5 17-18 19-32 1" stroke="#b79a6b" strokeWidth="1"/>
    <text x="110" y="317" textAnchor="middle" fill="#d8bd90" fontFamily="Georgia, serif" fontSize="13" letterSpacing="3">{variant === 'moon' ? 'A LUA' : variant === 'key' ? 'A CHAVE' : 'O CORAÇÃO'}</text>
  </svg>;
}

export function CardArtwork() {
  return <div className="card-art" role="img" aria-label="Ilustração decorativa de três cartas com uma chave, uma lua e um coração">
    <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
    <span className="art-star star-one">✧</span><span className="art-star star-two">✧</span>
    <div className="illustrated-card card-key"><CelestialCard variant="key"/></div>
    <div className="illustrated-card card-heart"><CelestialCard variant="heart"/></div>
    <div className="illustrated-card card-moon"><CelestialCard variant="moon"/></div>
    <div className="art-caption"><span/>As cartas abrem a conversa.<span/></div>
  </div>;
}

export function BotanicalArt() {
  return <svg className="botanical-art" viewBox="0 0 360 440" fill="none" aria-hidden="true">
    <path d="M30 400V180a150 150 0 0 1 300 0v220Z" stroke="currentColor" strokeOpacity=".35"/>
    <path d="M43 400V180a137 137 0 0 1 274 0v220" stroke="currentColor" strokeOpacity=".15"/>
    <circle cx="180" cy="174" r="80" stroke="currentColor" strokeOpacity=".35"/>
    <path d="M203 111a66 66 0 1 0 32 115c-60 15-94-68-32-115Z" fill="currentColor" fillOpacity=".08" stroke="currentColor"/>
    <path d="M84 357c52-22 73-74 68-114M114 326c-42 0-51-21-48-43 32 4 50 20 48 43Zm23-34c-29-12-28-34-22-49 27 13 32 31 22 49Zm-43 49c20 9 48 8 62-20-28-10-47 1-62 20Zm47-61c23 4 42-10 42-32-26 0-38 14-42 32ZM276 357c-52-22-73-74-68-114m38 83c42 0 51-21 48-43-32 4-50 20-48 43Zm-23-34c29-12 28-34 22-49-27 13-32 31-22 49Zm43 49c-20 9-48 8-62-20 28-10 47 1 62 20Zm-47-61c-23 4-42-10-42-32 26 0 38 14 42 32Z" stroke="currentColor" strokeOpacity=".65"/>
    <path d="m180 48 3 13 13 3-13 3-3 13-3-13-13-3 13-3Z" stroke="currentColor"/>
    <path d="m244 141 3 9 9 3-9 3-3 9-3-9-9-3 9-3Z" stroke="currentColor"/>
    <circle cx="251" cy="201" r="2" fill="currentColor"/>
    <text x="180" y="390" textAnchor="middle" fill="currentColor" fontFamily="Georgia, serif" fontSize="24" fontStyle="italic">Raissa Vitória</text>
  </svg>;
}
