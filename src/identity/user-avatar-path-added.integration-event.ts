import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.avatar-path.added';

interface Payload {
  userId: string;
  avatarPath: string;
}

export interface UserAvatarPathAddedIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
