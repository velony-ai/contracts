import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.email-change.issued';

interface Payload {
  userId: string;
  email: string;
}

export interface UserEmailChangeIssuedIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
