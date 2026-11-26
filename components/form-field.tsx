import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = { name: string; label: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>;

export function FormField({ name, label, error, ...input }: Props) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined} {...input} />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
