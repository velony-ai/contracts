import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.email.added';

interface Payload {
  userId: string;
  email: string;
}

export interface UserEmailAddedIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
