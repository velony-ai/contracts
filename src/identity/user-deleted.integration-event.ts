import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.deleted';

interface Payload {
  userId: string;
}

export interface UserDeletedIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
