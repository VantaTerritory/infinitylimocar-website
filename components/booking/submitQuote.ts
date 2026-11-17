import type { QuotePayload } from "@/lib/data/quote";

export type SubmitResult = { ok: true } | { ok: false; message: string };

/**
 * Sends a quote request. The destination is still undecided (Fluent Forms on
 * the client's WordPress, an email service, or a route handler of our own), so
 * for now this only serializes the payload and resolves.
 *
 * TODO(quote-backend): POST `payload` (Fluent field names) to the chosen
 * endpoint and return { ok: false, message } on a non-2xx response so the form
 * shows its error state instead of redirecting.
 */
export async function submitQuote(payload: QuotePayload): Promise<SubmitResult> {
  const body = JSON.stringify(payload);
  if (process.env.NODE_ENV !== "production") {
    console.info("[quote] request (no backend yet)", JSON.parse(body));
  }
  return { ok: true };
}
