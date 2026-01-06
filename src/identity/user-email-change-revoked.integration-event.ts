import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.email-change.revoked': {
      payload: {
        userId: string;
      };
    };
  }
}

export type UserEmailChangeRevokedIntegrationEvent =
  IntegrationEvent<'user.email-change.revoked'>;
