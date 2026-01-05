import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.phone-number.added';

interface Payload {
  userId: string;
  phoneNumber: string;
}

export interface UserPhoneNumberAddedIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
