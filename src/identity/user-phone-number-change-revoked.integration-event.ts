import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.phone-number-change.revoked';

interface Payload {
  userId: string;
}

export interface UserPhoneNumberChangeRevokedIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
