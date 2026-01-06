import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.phone-number.changed': {
      payload: {
        userId: string;
        phoneNumber: string;
      };
    };
  }
}

export type UserPhoneNumberChangedIntegrationEvent =
  IntegrationEvent<'user.phone-number.changed'>;
