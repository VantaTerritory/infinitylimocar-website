export interface ContactValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export type ContactResult = { ok: true } | { ok: false; error: string };

/**
 * TODO(backend): there is no contact endpoint yet. Wire this to the real
 * handler (Route Handler / email service) before launch; until then the form
 * only simulates a send. Keep the signature so the UI does not change.
 */
export async function submitContact(values: ContactValues): Promise<ContactResult> {
  void values;
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { ok: true };
}
