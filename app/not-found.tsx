export default function NotFound() {
  return (
    <div 
      className="h-[65vh] flex items-center justify-center"
      style={{
        backgroundImage: 'url(/404.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <section className="text-center bg-black/50 backdrop-blur-sm rounded-lg p-8 mx-4">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-white">
          404 - Page Not Found
        </h1>
        <p className="mb-4 text-white">The page you are looking for does not exist.</p>
      </section>
    </div>
  )
}
