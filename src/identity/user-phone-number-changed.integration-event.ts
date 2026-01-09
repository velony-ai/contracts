import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.phone-number.changed': {
      version: '1.0.0';
      payload: {
        userId: string;
        phoneNumber: string;
      };
    };
  }
}

export type UserPhoneNumberChangedIntegrationEvent =
  IntegrationEvent<'user.phone-number.changed'>;
