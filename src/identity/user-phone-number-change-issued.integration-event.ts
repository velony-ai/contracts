import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.phone-number-change.issued';

interface Payload {
  userId: string;
  phoneNumber: string;
}

export interface UserPhoneNumberChangeIssuedIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
