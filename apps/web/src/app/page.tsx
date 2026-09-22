import { redirect } from "next/navigation";
import { WIKI_URL } from "@/lib/source";

// The wiki is the only thing the app serves so far; the landing page and the
// prompt playground will take this route once they exist.
export default function RootPage() {
  redirect(WIKI_URL);
}
