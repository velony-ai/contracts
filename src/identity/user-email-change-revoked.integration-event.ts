import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.email-change.revoked';

interface Payload {
  userId: string;
}

export interface UserEmailChangeRevokedIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
