"use client";

import { useSearchParams } from "next/navigation";
import { parsePrefill } from "@/lib/data/quote";
import QuoteForm from "./QuoteForm";

/** /get-a-quote/: resumes step 1 with what the home widget sent in the query
 *  string. Must sit inside a <Suspense> boundary (useSearchParams). */
export default function QuoteFormFromParams() {
  const params = useSearchParams();
  return <QuoteForm initialValues={parsePrefill(params)} />;
}
