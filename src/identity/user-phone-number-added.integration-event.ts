import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.phone-number.added': {
      payload: {
        userId: string;
        phoneNumber: string;
      };
    };
  }
}

export type UserPhoneNumberAddedIntegrationEvent =
  IntegrationEvent<'user.phone-number.added'>;
