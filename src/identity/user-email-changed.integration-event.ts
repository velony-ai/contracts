import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.email.changed';

interface Payload {
  userId: string;
  email: string;
}

export interface UserEmailChangedIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
