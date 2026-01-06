import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.phone-number-change.revoked': {
      payload: {
        userId: string;
      };
    };
  }
}

export type UserPhoneNumberChangeRevokedIntegrationEvent =
  IntegrationEvent<'user.phone-number-change.revoked'>;
