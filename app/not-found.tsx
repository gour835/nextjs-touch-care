/* eslint-disable @next/next/no-html-link-for-pages */
// app/not-found.tsx

export default function NotFound() {
  return (
    <section className="ftco-section d-flex align-items-center justify-content-center" style={{ minHeight: '70vh', paddingTop: '150px' }}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="mb-4" style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>404</h1>
            <h2 className="mb-4">Page Not Found</h2>
            <p className="mb-4">
              The page you are looking for does not exist or has been moved.
            </p>
            <p>
              <a href="/" className="btn btn-primary px-4 py-3">
                Return to Home
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}