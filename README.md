# @velony/contracts

A TypeScript contracts library providing integration event interfaces for event-driven architecture.

## Installation

```bash
npm install @velony/contracts
```

## Overview

This package provides TypeScript interfaces for integration events used across VelonY microservices. Integration events enable loose coupling between services in an event-driven architecture.

## Usage

```typescript
import { 
  UserCreatedIntegrationEvent,
  UserEmailUpdatedIntegrationEvent,
  UserPhoneAddedIntegrationEvent 
} from '@velony/contracts';

// Example: Handle a user created event
const event: UserCreatedIntegrationEvent = {
  type: 'user.created',
  payload: {
    id: 'user-123',
    createdAt: new Date()
  }
};
```

## Available Integration Events

### Identity Domain

- `UserCreatedIntegrationEvent` - Fired when a new user is created
- `UserDeletedIntegrationEvent` - Fired when a user is deleted
- `UserNameUpdatedIntegrationEvent` - Fired when a user's name is updated
- `UserUsernameUpdatedIntegrationEvent` - Fired when a user's username is updated
- `UserEmailAddedIntegrationEvent` - Fired when an email is added to a user
- `UserEmailRemovedIntegrationEvent` - Fired when an email is removed from a user
- `UserEmailUpdatedIntegrationEvent` - Fired when a user's email is updated
- `UserPhoneAddedIntegrationEvent` - Fired when a phone number is added to a user
- `UserPhoneRemovedIntegrationEvent` - Fired when a phone number is removed from a user
- `UserPhoneUpdatedIntegrationEvent` - Fired when a user's phone number is updated
- `UserAvatarPathAddedIntegrationEvent` - Fired when an avatar path is added to a user
- `UserAvatarPathRemovedIntegrationEvent` - Fired when an avatar path is removed from a user
- `UserAvatarPathUpdatedIntegrationEvent` - Fired when a user's avatar path is updated

## License

MIT

## Repository

[https://github.com/velony-ai/contracts](https://github.com/velony-ai/contracts)

## Issues

[https://github.com/velony-ai/contracts/issues](https://github.com/velony-ai/contracts/issues)
