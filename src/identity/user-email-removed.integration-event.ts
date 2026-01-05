import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.email.removed';

interface Payload {
  userId: string;
}

export interface UserEmailRemovedIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
