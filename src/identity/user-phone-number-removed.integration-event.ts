import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.phone-number.removed': {
      version: '1.0.0';
      payload: {
        userId: string;
      };
    };
  }
}

export type UserPhoneNumberRemovedIntegrationEvent =
  IntegrationEvent<'user.phone-number.removed'>;
