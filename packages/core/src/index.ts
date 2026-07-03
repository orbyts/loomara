export interface ArtifactEnvelope<TPayload = unknown> {
  producer: string;
  producerVersion: string;
  schema: string;
  generatedAt: string;
  payload: TPayload;
}

export const loomaraVersion = "0.0.0";
