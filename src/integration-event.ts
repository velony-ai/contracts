/**
 * Registry that maps integration event types to their payload types.
 * Extend this interface to register new integration event types.
 */
export interface IntegrationEventRegistry {
  [key: string]: {
    payload: unknown;
  };
}

/**
 * Integration event represents a significant business event that has occurred
 * and needs to be communicated to external systems or bounded contexts.
 * Unlike domain events which are internal, integration events cross bounded context boundaries.
 *
 * @template TType - The type identifier for the event (must be registered in IntegrationEventRegistry)
 */
export type IntegrationEvent<TType extends keyof IntegrationEventRegistry> = {
  /**
   * Unique identifier for this event instance.
   * @readonly
   */
  readonly id: string;

  /**
   * Type identifier for the event.
   * @readonly
   */
  readonly type: TType;

  /**
   * Version of the event schema for backward compatibility.
   * @readonly
   */
  readonly version: string;

  /**
   * The timestamp when the original domain event occurred.
   * @readonly
   */
  readonly occurredAt: Date;

  /**
   * The data payload specific to this event.
   * @readonly
   */
  readonly payload: IntegrationEventRegistry[TType]['payload'];

  /**
   * Key used for partitioning in message brokers for ordering guarantees.
   * @readonly
   */
  readonly partitionKey: string;

  /**
   * The timestamp when this integration event was created.
   * @readonly
   */
  readonly createdAt: Date;

  /**
   * The timestamp when this event was published to the message broker.
   * Null if not yet published.
   * @readonly
   */
  readonly publishedAt: Date | null;
};

/**
 * Union type representing any integration event registered in the IntegrationEventRegistry.
 * Useful for type-safe collections and handlers that work with multiple integration event types.
 */
export type AnyIntegrationEvent = IntegrationEvent<
  keyof IntegrationEventRegistry
>;
