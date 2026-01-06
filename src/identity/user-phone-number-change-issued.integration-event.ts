import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.phone-number-change.issued': {
      payload: {
        userId: string;
        phoneNumber: string;
      };
    };
  }
}

export type UserPhoneNumberChangeIssuedIntegrationEvent =
  IntegrationEvent<'user.phone-number-change.issued'>;
