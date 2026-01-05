import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.username.changed';

interface Payload {
  userId: string;
  username: string;
}

export interface UserUsernameChangedIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
