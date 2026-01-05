import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.phone-number.removed';

interface Payload {
  userId: string;
}

export interface UserPhoneNumberRemovedIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
