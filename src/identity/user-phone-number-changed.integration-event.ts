import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.phone-number.changed';

interface Payload {
  userId: string;
  phoneNumber: string;
}

export interface UserPhoneNumberChangedIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
