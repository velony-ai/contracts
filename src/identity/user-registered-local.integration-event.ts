import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.registered-local';

interface Payload {
  userId: string;
  name: string;
  username: string;
}

export interface UserRegisteredLocalIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
