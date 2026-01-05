import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.avatar-path.removed';

interface Payload {
  userId: string;
}

export interface UserAvatarPathRemovedIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
