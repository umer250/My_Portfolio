// Ambient animated background orbs — fixed behind everything
export default function AnimatedBackground() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}>
      {/* Red-magenta orb — bottom left */}
      <div
        className="bg-orb-1"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(140,20,70,0.32) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Deep blue orb — top right */}
      <div
        className="bg-orb-2"
        style={{
          position: 'absolute',
          top: '5%',
          right: '-8%',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(30,20,110,0.28) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Purple orb — center */}
      <div
        className="bg-orb-3"
        style={{
          position: 'absolute',
          top: '45%',
          left: '40%',
          width: '360px',
          height: '360px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(70,20,120,0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  )
}
