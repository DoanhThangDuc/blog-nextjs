export async function safeAsync<T>(p: Promise<T>): Promise<T | null> {
  try {
    return await p;
  } catch (error) {
    console.error({ err: error }, "safe async caught error");
    return null;
  }
}
