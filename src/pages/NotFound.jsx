
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-9xl font-bold text-gym-blue">404</h1>
        <h2 className="text-4xl font-semibold">Page Not Found</h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been removed or is temporarily unavailable.
        </p>
        <div className="pt-6">
          <Link
            to="/"
            className="inline-flex h-11 items-center justify-center rounded-md bg-gym-blue px-8 text-sm font-medium text-white transition-colors hover:bg-gym-blue/90 focus:outline-none focus:ring-2 focus:ring-gym-blue focus:ring-offset-2"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
