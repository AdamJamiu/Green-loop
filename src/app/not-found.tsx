// app/not-found.tsx
import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("/");
  return null; // This line won't be rendered as the user is redirected.
}
