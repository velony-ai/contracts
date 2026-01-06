import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.phone-number.removed': {
      payload: {
        userId: string;
      };
    };
  }
}

export type UserPhoneNumberRemovedIntegrationEvent =
  IntegrationEvent<'user.phone-number.removed'>;
