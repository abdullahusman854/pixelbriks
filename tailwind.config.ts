import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8f1fe",
          100: "#eed8fd",
          200: "#dbaffc",
          300: "#c681fa",
          400: "#b44cf7",
          500: "#B211F4",
          600: "#9d0edb",
          700: "#7e0bb2",
          800: "#660a8f",
          900: "#520870",
        },

        secondary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
          1000: "#000",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        neon: {
          blue: "#00d4ff",
          purple: "#8b5cf6",
          pink: "#ec4899",
          green: "#10b981",
          yellow: "#f59e0b",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "fade-in-down": "fadeInDown 0.8s ease-out",
        "fade-in-left": "fadeInLeft 0.8s ease-out",
        "fade-in-right": "fadeInRight 0.8s ease-out",
        "slide-in-up": "slideInUp 0.6s ease-out",
        "slide-in-down": "slideInDown 0.6s ease-out",
        "scale-in": "scaleIn 0.6s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 2s infinite",
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        gradient: "gradient 3s ease infinite",
        "wavy-move-1": "wavyMove1 25s infinite linear",
        "wavy-move-2": "wavyMove2 30s infinite linear reverse",
        "glow-pulse": "glowPulse 2s ease-in-out infinite alternate",
        morph: "morph 8s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
        "orbit-reverse": "orbitReverse 15s linear infinite",
        "neon-flicker": "neonFlicker 1.5s infinite alternate",
        "matrix-rain": "matrixRain 20s linear infinite",
        hologram: "hologram 3s ease-in-out infinite",
        "cyber-glitch": "cyberGlitch 0.3s ease-in-out infinite",
        "data-stream": "dataStream 2s linear infinite",
        "energy-field": "energyField 4s ease-in-out infinite",
        "quantum-shift": "quantumShift 6s ease-in-out infinite",
        "neural-network": "neuralNetwork 8s linear infinite",
        "blockchain-flow": "blockchainFlow 10s linear infinite",
        "metaverse-portal": "metaversePortal 5s ease-in-out infinite",
        "nft-glow": "nftGlow 2s ease-in-out infinite alternate",
        "defi-pulse": "defiPulse 1.5s ease-in-out infinite",
        "dao-vote": "daoVote 3s ease-in-out infinite",
        "smart-contract": "smartContract 4s ease-in-out infinite",
        "web3-wave": "web3Wave 6s ease-in-out infinite",
        "crypto-moon": "cryptoMoon 8s ease-in-out infinite",
        "token-burn": "tokenBurn 2s ease-in-out infinite",
        "liquidity-pool": "liquidityPool 5s ease-in-out infinite",
        "yield-farming": "yieldFarming 3s ease-in-out infinite",
        "staking-rewards": "stakingRewards 4s ease-in-out infinite",
        "governance-vote": "governanceVote 2.5s ease-in-out infinite",
        "cross-chain": "crossChain 7s ease-in-out infinite",
        "layer-2": "layer2 3.5s ease-in-out infinite",
        "zero-knowledge": "zeroKnowledge 5.5s ease-in-out infinite",
        "consensus-mechanism": "consensusMechanism 6.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideInDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        wavyMove1: {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg)",
            left: "20%",
            top: "20%",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(360deg)",
            left: "25%",
            top: "25%",
          },
        },
        wavyMove2: {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg)",
            left: "80%",
            top: "80%",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(-360deg)",
            left: "75%",
            top: "75%",
          },
        },
        glowPulse: {
          "0%": { boxShadow: "0 0 20px rgba(14, 165, 233, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(14, 165, 233, 0.6)" },
        },
        morph: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(100px) rotate(-360deg)",
          },
        },
        orbitReverse: {
          "0%": { transform: "rotate(0deg) translateX(80px) rotate(0deg)" },
          "100%": {
            transform: "rotate(-360deg) translateX(80px) rotate(360deg)",
          },
        },
        neonFlicker: {
          "0%": {
            textShadow: "0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff",
          },
          "100%": {
            textShadow: "0 0 2px #00d4ff, 0 0 5px #00d4ff, 0 0 8px #00d4ff",
          },
        },
        matrixRain: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        hologram: {
          "0%, 100%": { opacity: "0.8", filter: "hue-rotate(0deg)" },
          "50%": { opacity: "1", filter: "hue-rotate(180deg)" },
        },
        cyberGlitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        dataStream: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        energyField: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.2)", opacity: "0.8" },
        },
        quantumShift: {
          "0%, 100%": { transform: "translateX(0) rotate(0deg)" },
          "25%": { transform: "translateX(20px) rotate(90deg)" },
          "50%": { transform: "translateX(0) rotate(180deg)" },
          "75%": { transform: "translateX(-20px) rotate(270deg)" },
        },
        neuralNetwork: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        blockchainFlow: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        metaversePortal: {
          "0%, 100%": {
            transform: "scale(1) rotate(0deg)",
            filter: "hue-rotate(0deg)",
          },
          "50%": {
            transform: "scale(1.1) rotate(180deg)",
            filter: "hue-rotate(360deg)",
          },
        },
        nftGlow: {
          "0%": { boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)" },
          "100%": { boxShadow: "0 0 40px rgba(236, 72, 153, 0.8)" },
        },
        defiPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
        },
        daoVote: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        smartContract: {
          "0%, 100%": { borderColor: "rgba(16, 185, 129, 0.5)" },
          "50%": { borderColor: "rgba(16, 185, 129, 1)" },
        },
        web3Wave: {
          "0%, 100%": { transform: "translateX(0) scaleY(1)" },
          "50%": { transform: "translateX(10px) scaleY(1.2)" },
        },
        cryptoMoon: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(180deg)" },
        },
        tokenBurn: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0)", opacity: "0" },
        },
        liquidityPool: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.1)", opacity: "0.9" },
        },
        yieldFarming: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
        },
        stakingRewards: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
        governanceVote: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
        },
        crossChain: {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(10px) translateY(-10px)" },
          "50%": { transform: "translateX(0) translateY(-20px)" },
          "75%": { transform: "translateX(-10px) translateY(-10px)" },
        },
        layer2: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.2)", opacity: "1" },
        },
        zeroKnowledge: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        consensusMechanism: {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.1)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #B211F4 0%, #0ea5e9 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #d946ef 0%, #0ea5e9 100%)",
        "gradient-accent": "linear-gradient(135deg, #0ea5e9 0%, #f97316 100%)",
        "gradient-dark": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        "gradient-shimmer":
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        "gradient-neon":
          "linear-gradient(45deg, #00d4ff, #8b5cf6, #ec4899, #10b981)",
        "gradient-cyber":
          "linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 25%, #ec4899 50%, #10b981 75%, #f59e0b 100%)",
        "gradient-hologram":
          "linear-gradient(45deg, #00d4ff, #8b5cf6, #ec4899, #10b981, #f59e0b, #00d4ff)",
        "gradient-matrix":
          "linear-gradient(180deg, transparent 0%, #00ff00 50%, transparent 100%)",
        "gradient-blockchain":
          "linear-gradient(90deg, #0ea5e9, #8b5cf6, #ec4899, #10b981)",
        "gradient-defi":
          "linear-gradient(135deg, #10b981 0%, #f59e0b 50%, #ec4899 100%)",
        "gradient-nft":
          "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #00d4ff 100%)",
        "gradient-metaverse":
          "linear-gradient(135deg, #8b5cf6 0%, #ec4899 25%, #10b981 50%, #f59e0b 75%, #00d4ff 100%)",
        "gradient-web3":
          "linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 25%, #ec4899 50%, #10b981 75%, #f59e0b 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(14, 165, 233, 0.3)",
        "glow-lg": "0 0 40px rgba(14, 165, 233, 0.4)",
        "glow-xl": "0 0 60px rgba(14, 165, 233, 0.5)",
        "inner-glow": "inset 0 0 20px rgba(14, 165, 233, 0.2)",
        "neon-blue":
          "0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)",
        "neon-purple":
          "0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)",
        "neon-pink":
          "0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)",
        "neon-green":
          "0 0 20px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.3)",
        "neon-yellow":
          "0 0 20px rgba(245, 158, 11, 0.5), 0 0 40px rgba(245, 158, 11, 0.3)",
        cyber:
          "0 0 30px rgba(14, 165, 233, 0.4), inset 0 0 30px rgba(14, 165, 233, 0.1)",
        hologram:
          "0 0 50px rgba(0, 212, 255, 0.3), 0 0 100px rgba(139, 92, 246, 0.2)",
        matrix: "0 0 20px rgba(0, 255, 0, 0.5)",
        blockchain:
          "0 0 30px rgba(14, 165, 233, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)",
        defi: "0 0 25px rgba(16, 185, 129, 0.4), 0 0 50px rgba(245, 158, 11, 0.2)",
        nft: "0 0 30px rgba(236, 72, 153, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)",
        metaverse:
          "0 0 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(236, 72, 153, 0.2)",
        web3: "0 0 35px rgba(14, 165, 233, 0.4), 0 0 70px rgba(139, 92, 246, 0.2)",
      },
      textShadow: {
        neon: "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor",
        cyber: "0 0 10px currentColor, 0 0 20px currentColor",
        hologram:
          "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor",
      },
    },
  },
  plugins: [],
};

export default config;
