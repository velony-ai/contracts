export interface IntegrationEvent<TType extends string, TPayload> {
  id: string;
  type: TType;
  version: string;
  occurredAt: Date;
  payload: TPayload;
  partitionKey: string;
  createdAt: Date;
  publishedAt: Date | null;
}
