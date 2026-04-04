import { Link } from "wouter";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-foreground">{title}</h1>
        <p className="text-muted-foreground max-w-md">
          Ta strona jest w budowie. Wróć tu wkrótce!
        </p>
        <Link href="/" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  );
}
