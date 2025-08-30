"use client"

import { useEffect, useRef } from "react"

export function GlobeAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const globeRef = useRef<any>(null)

  useEffect(() => {
    let phi = 0
    let animationId: number

    const initGlobe = async () => {
      if (!canvasRef.current) return

      try {
        // Dynamically import the cobe library
        const { default: createGlobe } = await import('cobe')
        
        const canvas = canvasRef.current
        
        globeRef.current = createGlobe(canvas, {
          devicePixelRatio: 2,
          width: 800,
          height: 800,
          phi: 0,
          theta: 0,
          dark: 1,
          diffuse: 1.2,
          scale: 1,
          mapSamples: 16000,
          mapBrightness: 6,
          baseColor: [0.3, 0.3, 0.9],
          markerColor: [0.9, 0.5, 1],
          glowColor: [0.2, 0.2, 1],
          offset: [0, 0],
          markers: [
            // Major data centers around the world
            { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
            { location: [40.7128, -74.006], size: 0.1 },    // New York
            { location: [51.5074, -0.1278], size: 0.05 },   // London
            { location: [35.6762, 139.6503], size: 0.05 },  // Tokyo
            { location: [22.3193, 114.1694], size: 0.03 },  // Hong Kong
            { location: [-33.8688, 151.2093], size: 0.03 }, // Sydney
            { location: [55.7558, 37.6176], size: 0.04 },   // Moscow
            { location: [19.076, 72.8777], size: 0.03 },    // Mumbai
            { location: [-23.5505, -46.6333], size: 0.03 }, // São Paulo
            { location: [52.3676, 4.9041], size: 0.03 },    // Amsterdam
            { location: [48.8566, 2.3522], size: 0.03 },    // Paris
            { location: [39.9042, 116.4074], size: 0.04 },  // Beijing
          ],
          onRender: (state: any) => {
            state.phi = phi
            phi += 0.003 // Slower rotation for better visibility
          },
        })

        // Animation loop for network connections
        const animateConnections = () => {
          if (globeRef.current) {
            // Add pulsing effect to markers
            const markers = globeRef.current.markers || []
            markers.forEach((marker: any, index: number) => {
              marker.size = 0.03 + Math.sin(Date.now() * 0.001 + index) * 0.02
            })
          }
          animationId = requestAnimationFrame(animateConnections)
        }
        
        animateConnections()
      } catch (error) {
        console.error('Failed to load globe animation:', error)
      }
    }

    initGlobe()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (globeRef.current) {
        globeRef.current.destroy?.()
      }
    }
  }, [])

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse" />
      
      {/* Globe canvas */}
      <div className="relative z-10">
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '600px',
            maxHeight: '600px',
            display: 'block',
            margin: '0 auto'
          }}
          width="800"
          height="800"
          className="rounded-full"
        />
      </div>

      {/* Network connection overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 600 600">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
                     {/* Animated connection lines */}
           <g filter="url(#glow)">
             <path
               d="M150,200 Q300,100 450,200"
               stroke="url(#connectionGradient)"
               strokeWidth="2"
               fill="none"
               className="animate-network-pulse animate-data-flow"
               style={{ animationDelay: "0s" }}
             />
             <path
               d="M120,300 Q300,150 480,300"
               stroke="url(#connectionGradient)"
               strokeWidth="2"
               fill="none"
               className="animate-network-pulse animate-data-flow"
               style={{ animationDelay: "0.5s" }}
             />
             <path
               d="M100,400 Q300,200 500,400"
               stroke="url(#connectionGradient)"
               strokeWidth="2"
               fill="none"
               className="animate-network-pulse animate-data-flow"
               style={{ animationDelay: "1s" }}
             />
             <path
               d="M200,150 Q300,50 400,150"
               stroke="url(#connectionGradient)"
               strokeWidth="2"
               fill="none"
               className="animate-network-pulse animate-data-flow"
               style={{ animationDelay: "1.5s" }}
             />
             <path
               d="M180,450 Q300,250 420,450"
               stroke="url(#connectionGradient)"
               strokeWidth="2"
               fill="none"
               className="animate-network-pulse animate-data-flow"
               style={{ animationDelay: "2s" }}
             />
             {/* Additional cross-connections */}
             <path
               d="M250,100 Q350,200 450,100"
               stroke="url(#connectionGradient)"
               strokeWidth="1.5"
               fill="none"
               className="animate-network-pulse animate-data-flow"
               style={{ animationDelay: "0.75s" }}
             />
             <path
               d="M100,350 Q200,250 300,350"
               stroke="url(#connectionGradient)"
               strokeWidth="1.5"
               fill="none"
               className="animate-network-pulse animate-data-flow"
               style={{ animationDelay: "1.25s" }}
             />
           </g>
        </svg>
      </div>

      {/* Floating data points */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-primary rounded-full animate-ping" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full animate-ping" style={{ animationDelay: "2s" }} />
      </div>
    </div>
  )
}
