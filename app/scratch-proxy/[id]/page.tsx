export default function ScratchProxy({ params }: { params: { id: string } }) {
  return (
    <html>
      <head>
        <title>Scratch Project</title>
        <style>{`
          body, html {
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
        `}</style>
      </head>
      <body>
        <iframe
          src={`https://scratch.mit.edu/projects/${params.id}/embed`}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
      </body>
    </html>
  )
}