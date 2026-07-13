import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="aurora min-h-screen w-full flex items-center justify-center bg-white p-4">
      <Card className="card-premium relative w-full max-w-lg mx-4 shadow-[0_30px_60px_-24px_rgba(10,61,145,0.3)] border border-slate-200/70 bg-white/90 backdrop-blur-sm rounded-3xl">
        <CardContent className="pt-10 pb-10 text-center">
          <div className="flex justify-center mb-7">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/15 rounded-full blur-xl" />
              <div className="relative w-16 h-16 rounded-2xl bg-[#0A3D91]/8 flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-[#0A3D91]" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">
            404
          </h1>

          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            Page Not Found
          </h2>

          <p className="text-slate-600 mb-9 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          <div
            id="not-found-button-group"
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button
              onClick={handleGoHome}
              className="btn-premium bg-primary hover:bg-primary/90 text-white px-7 h-12 rounded-full font-semibold"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
