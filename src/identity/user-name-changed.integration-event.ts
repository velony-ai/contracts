import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.name.changed';

interface Payload {
  userId: string;
  name: string;
}

export interface UserNameChangedIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
