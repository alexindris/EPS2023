export function isException(error: unknown): asserts error is Error {
  if (!(error instanceof Error)) {
    throw error;
  }
}
