import { IntegrationEvent } from '../integration-event.interface';

type Type = 'user.avatar-path.changed';

interface Payload {
  userId: string;
  avatarPath: string;
}

export interface UserAvatarPathChangedIntegrationEvent extends IntegrationEvent<
  Type,
  Payload
> {
  type: Type;
  payload: Payload;
}
