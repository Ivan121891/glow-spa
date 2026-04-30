// Beautiful SVG product illustrations for Glō skincare
// Each is a distinct, elegant vector illustration with a soft gradient

export function SerumBottle({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className}>
      <defs>
        <linearGradient id="serum-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbcfe8" />
          <stop offset="100%" stopColor="#fda4af" />
        </linearGradient>
        <linearGradient id="serum-grad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fce7f3" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#fbcfe8" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* Dropper top */}
      <rect x="82" y="20" width="36" height="10" rx="3" fill="#e5e7eb" />
      <rect x="88" y="8" width="24" height="14" rx="4" fill="#d1d5db" />
      <circle cx="100" cy="10" r="3" fill="#9ca3af" />
      {/* Bottle neck */}
      <rect x="78" y="40" width="44" height="18" rx="3" fill="url(#serum-grad)" />
      {/* Bottle body */}
      <rect x="50" y="56" width="100" height="120" rx="16" fill="url(#serum-grad)" />
      {/* Label */}
      <rect x="62" y="90" width="76" height="50" rx="8" fill="white" fillOpacity="0.25" />
      {/* Liquid level */}
      <rect x="58" y="130" width="84" height="38" rx="10" fill="url(#serum-grad2)" />
      {/* Highlight */}
      <rect x="56" y="65" width="6" height="60" rx="3" fill="white" fillOpacity="0.2" />
    </svg>
  );
}

export function CreamJar({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className}>
      <defs>
        <linearGradient id="cream-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="lid-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
      {/* Lid */}
      <rect x="40" y="30" width="120" height="30" rx="10" fill="url(#lid-grad)" />
      <rect x="44" y="32" width="112" height="8" rx="4" fill="#fef3c7" fillOpacity="0.4" />
      {/* Jar body */}
      <rect x="36" y="58" width="128" height="128" rx="20" fill="url(#cream-grad)" />
      {/* Label */}
      <ellipse cx="100" cy="110" rx="44" ry="36" fill="white" fillOpacity="0.25" />
      {/* Cream swirl */}
      <circle cx="100" cy="130" r="20" fill="white" fillOpacity="0.15" />
      {/* Lid detail */}
      <rect x="60" y="36" width="80" height="4" rx="2" fill="#fef3c7" fillOpacity="0.3" />
    </svg>
  );
}

export function OilDropper({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className}>
      <defs>
        <linearGradient id="oil-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4a853" />
          <stop offset="100%" stopColor="#b07d1a" />
        </linearGradient>
      </defs>
      {/* Dropper */}
      <rect x="88" y="12" width="24" height="12" rx="3" fill="#9ca3af" />
      <rect x="92" y="2" width="16" height="12" rx="2" fill="#6b7280" />
      {/* Bottle neck */}
      <rect x="76" y="32" width="48" height="20" rx="4" fill="url(#oil-grad)" />
      {/* Bottle body — amber glass */}
      <rect x="44" y="50" width="112" height="130" rx="18" fill="url(#oil-grad)" />
      {/* Glass sheen */}
      <rect x="50" y="58" width="8" height="70" rx="4" fill="white" fillOpacity="0.2" />
      {/* Label */}
      <rect x="60" y="90" width="80" height="48" rx="8" fill="white" fillOpacity="0.2" />
      {/* Oil level */}
      <path d="M52 140 Q68 138 84 142 Q100 146 116 140 Q132 134 148 142 V178 H52 Z" fill="#b07d1a" fillOpacity="0.4" />
      {/* Droplet */}
      <ellipse cx="100" cy="180" rx="6" ry="8" fill="#d4a853" fillOpacity="0.5" />
    </svg>
  );
}

export function MistSpray({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className}>
      <defs>
        <linearGradient id="mist-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a5f3fc" />
          <stop offset="100%" stopColor="#67e8f9" />
        </linearGradient>
        <linearGradient id="mist-cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e5e7eb" />
          <stop offset="100%" stopColor="#9ca3af" />
        </linearGradient>
      </defs>
      {/* Spray nozzle */}
      <rect x="84" y="24" width="32" height="8" rx="2" fill="url(#mist-cap)" />
      <circle cx="100" cy="20" r="5" fill="#6b7280" />
      <rect x="96" y="18" width="8" height="4" rx="1" fill="#4b5563" />
      {/* Cap */}
      <rect x="76" y="36" width="48" height="14" rx="5" fill="url(#mist-cap)" />
      {/* Bottle body */}
      <rect x="46" y="48" width="108" height="130" rx="16" fill="url(#mist-grad)" />
      {/* Label */}
      <rect x="58" y="80" width="84" height="55" rx="6" fill="white" fillOpacity="0.3" />
      {/* Wave pattern */}
      <path d="M46 120 Q60 114 80 118 Q100 122 120 116 Q134 112 154 118 V178 H46 Z" fill="white" fillOpacity="0.15" />
      {/* Mist drops */}
      <circle cx="94" cy="16" r="1.5" fill="#67e8f9" fillOpacity="0.6" />
      <circle cx="106" cy="14" r="1" fill="#67e8f9" fillOpacity="0.4" />
      <circle cx="88" cy="12" r="1" fill="#67e8f9" fillOpacity="0.3" />
    </svg>
  );
}

export function SheetMask({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className}>
      <defs>
        <linearGradient id="mask-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      {/* Sheet mask shape */}
      <path
        d="M100 30 Q130 32 146 60 Q156 80 152 100 L148 140 Q144 170 130 188 Q116 200 100 204 Q84 200 70 188 Q56 170 52 140 L48 100 Q44 80 54 60 Q70 32 100 30Z"
        fill="url(#mask-grad)"
        opacity="0.85"
      />
      {/* Eye holes */}
      <ellipse cx="72" cy="92" rx="12" ry="8" fill="white" fillOpacity="0.3" />
      <ellipse cx="128" cy="92" rx="12" ry="8" fill="white" fillOpacity="0.3" />
      {/* Mouth hole */}
      <ellipse cx="100" cy="140" rx="14" ry="6" fill="white" fillOpacity="0.3" />
      {/* Serum droplets */}
      <circle cx="90" cy="60" r="2" fill="white" fillOpacity="0.4" />
      <circle cx="110" cy="55" r="1.5" fill="white" fillOpacity="0.3" />
      <circle cx="80" cy="110" r="1.5" fill="white" fillOpacity="0.3" />
      <circle cx="120" cy="115" r="2" fill="white" fillOpacity="0.35" />
      {/* Fold lines */}
      <line x1="100" y1="30" x2="100" y2="204" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
    </svg>
  );
}

export function GuaSha({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className}>
      <defs>
        <linearGradient id="guasha-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f9a8d4" />
          <stop offset="100%" stopColor="#db2777" />
        </linearGradient>
      </defs>
      {/* Gua sha stone shape */}
      <path
        d="M60 60 Q40 40 48 24 Q56 10 80 12 L120 14 Q144 16 152 28 Q160 42 140 62 L100 120 Q80 156 60 200 Q52 218 40 222 Q28 224 24 212 Q20 200 36 176 Q52 150 60 60Z"
        fill="url(#guasha-grad)"
        opacity="0.85"
      />
      {/* Vein patterns */}
      <path
        d="M70 50 Q80 30 100 28 Q120 30 130 56"
        stroke="white"
        strokeOpacity="0.15"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M80 70 Q90 50 100 48 Q110 50 116 66"
        stroke="white"
        strokeOpacity="0.1"
        strokeWidth="1"
        fill="none"
      />
      {/* Handle curve */}
      <path
        d="M40 220 Q36 210 44 200"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

export function SleepMask({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className}>
      <defs>
        <linearGradient id="silk-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      {/* Band */}
      <rect x="8" y="100" width="24" height="10" rx="5" fill="url(#silk-grad)" opacity="0.5" />
      <rect x="168" y="100" width="24" height="10" rx="5" fill="url(#silk-grad)" opacity="0.5" />
      {/* Mask body */}
      <path
        d="M26 60 Q50 44 100 40 Q150 44 174 60 Q190 72 188 96 Q186 120 174 132 Q150 148 100 152 Q50 148 26 132 Q14 120 12 96 Q10 72 26 60Z"
        fill="url(#silk-grad)"
      />
      {/* Eye contours */}
      <ellipse cx="72" cy="98" rx="18" ry="10" fill="white" fillOpacity="0.2" />
      <ellipse cx="128" cy="98" rx="18" ry="10" fill="white" fillOpacity="0.2" />
      {/* Nose contour */}
      <path
        d="M96 105 Q100 97 104 105"
        stroke="white"
        strokeOpacity="0.15"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Stitching */}
      <path
        d="M40 74 Q60 64 100 60 Q140 64 160 74"
        stroke="white"
        strokeOpacity="0.15"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3 3"
      />
      {/* Satin sheen */}
      <path
        d="M60 70 Q100 56 140 70"
        stroke="white"
        strokeOpacity="0.1"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export function NightCream({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className}>
      <defs>
        <linearGradient id="night-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
        <linearGradient id="night-lid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#3730a3" />
        </linearGradient>
      </defs>
      {/* Lid */}
      <rect x="36" y="24" width="128" height="34" rx="12" fill="url(#night-lid)" />
      <rect x="40" y="26" width="120" height="8" rx="4" fill="#e0e7ff" fillOpacity="0.2" />
      {/* Star on lid */}
      <text x="100" y="46" textAnchor="middle" fontSize="14" fill="#c7d2fe" fillOpacity="0.6">✦</text>
      {/* Jar body */}
      <rect x="32" y="56" width="136" height="132" rx="20" fill="url(#night-grad)" />
      {/* Label */}
      <rect x="50" y="90" width="100" height="55" rx="10" fill="white" fillOpacity="0.12" />
      {/* Moon crescent */}
      <circle cx="130" cy="78" r="8" fill="#c7d2fe" fillOpacity="0.15" />
      <circle cx="127" cy="76" r="6" fill="url(#night-grad)" />
      {/* Cream texture */}
      <path d="M40 150 Q60 144 80 148 Q100 152 120 146 Q140 140 168 148 V188 H40 Z" fill="#a5b4fc" fillOpacity="0.15" />
    </svg>
  );
}

export function MoisturizerJar({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className}>
      <defs>
        <linearGradient id="moist-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="moist-lid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      {/* Lid */}
      <rect x="38" y="28" width="124" height="26" rx="10" fill="url(#moist-lid)" />
      <rect x="42" y="30" width="116" height="6" rx="3" fill="#d1fae5" fillOpacity="0.3" />
      {/* Jar body */}
      <rect x="34" y="52" width="132" height="136" rx="18" fill="url(#moist-grad)" />
      {/* Label */}
      <rect x="50" y="82" width="100" height="60" rx="8" fill="white" fillOpacity="0.15" />
      {/* Leaf decoration */}
      <path
        d="M80 100 Q76 90 82 84 Q90 78 96 84 Q100 90 96 98 Q92 104 80 100Z"
        fill="white"
        fillOpacity="0.2"
      />
      <path
        d="M120 92 Q124 84 118 80 Q110 76 106 82 Q102 88 106 94 Q112 100 120 92Z"
        fill="white"
        fillOpacity="0.15"
      />
      {/* Gel shimmer */}
      <path d="M40 154 Q60 148 80 152 Q100 156 120 150 Q140 144 166 152 V188 H40 Z" fill="#d1fae5" fillOpacity="0.12" />
    </svg>
  );
}

// Map image slugs to components
const imageMap = {
  "serum-bottle": SerumBottle,
  "cream-jar": CreamJar,
  "oil-dropper": OilDropper,
  "mist-spray": MistSpray,
  "sheet-mask": SheetMask,
  "gua-sha": GuaSha,
  "sleep-mask": SleepMask,
  "night-cream": NightCream,
  "moisturizer-jar": MoisturizerJar,
};

export default function ProductImage({ image, className }) {
  const Component = imageMap[image] || SerumBottle;
  return <Component className={className} />;
}