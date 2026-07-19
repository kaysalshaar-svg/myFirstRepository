// Decorative ambient blobs — soft background depth effect
export default function AmbientBlobs() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute top-[8%] right-[-6%] w-96 h-96 bg-primary-fixed rounded-full blur-[100px] opacity-40 breathing" />
      <div className="absolute bottom-[20%] left-[-6%] w-80 h-80 bg-secondary-container rounded-full blur-[80px] opacity-35 breathing" style={{ animationDelay: '4s' }} />
    </div>
  )
}
