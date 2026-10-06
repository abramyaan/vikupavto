import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Home } from "lucide-react";

export const Route = createFileRoute("/thanks")({
  component: Thanks,
});

function Thanks() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md space-y-6 p-8 bg-card border border-border rounded-2xl shadow-sm animate-fade-in">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500">
            <CheckCircle2 className="h-10 w-10" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="font-heading text-3xl font-extrabold tracking-tight">
            Заявка принята!
          </h1>
          <p className="text-muted-foreground">
            Спасибо за обращение. Наш эксперт-оценщик уже проверяет параметры вашего авто и свяжется с вами в течение 5 минут.
          </p>
        </div>

        <div className="pt-4 border-t border-border space-y-3 text-xs text-muted-foreground">
          <p>Режим работы: Круглосуточно 24/7</p>
          <p>Телефон для срочной связи: <a href="tel:+79302950152" className="font-bold text-foreground hover:text-primary">+7 (930) 295-01-52</a></p>
        </div>

        <Button
          className="w-full h-11 gap-2 bg-rose-500 hover:bg-rose-600 text-white"
          asChild
        >
          <Link to="/">
            <Home className="h-4 w-4" />
            Вернуться на главную
          </Link>
        </Button>
      </div>
    </div>
  );
}