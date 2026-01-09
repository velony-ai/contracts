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
  UserEmailChangedIntegrationEvent,
  UserPhoneNumberChangedIntegrationEvent 
} from '@velony/contracts';

// Example: Handle a user created event
const event: UserCreatedIntegrationEvent = {
  id: 'evt-123',
  type: 'user.created',
  version: '1.0.0',
  occurredAt: new Date(),
  payload: {
    userId: 'user-123',
    name: 'John Doe',
    username: 'johndoe',
    avatarPath: 'https://example.com/avatar.jpg',
    email: 'john.doe@example.com',
    phoneNumber: '+1234567890'
  },
  partitionKey: 'user-123',
  createdAt: new Date(),
  publishedAt: null
};
```

## Available Integration Events

### Identity Domain

- `UserAvatarChangedIntegrationEvent` - Fired when a user's avatar is changed
- `UserCreatedIntegrationEvent` - Fired when a new user is created
- `UserDeletedIntegrationEvent` - Fired when a user is deleted
- `UserEmailChangedIntegrationEvent` - Fired when a user's email is changed
- `UserEmailRemovedIntegrationEvent` - Fired when an email is removed from a user
- `UserNameChangedIntegrationEvent` - Fired when a user's name is changed
- `UserPhoneNumberChangedIntegrationEvent` - Fired when a user's phone number is changed
- `UserPhoneNumberRemovedIntegrationEvent` - Fired when a phone number is removed from a user
- `UserUsernameChangedIntegrationEvent` - Fired when a user's username is changed

## License

MIT

## Repository

[https://github.com/velony-ai/contracts](https://github.com/velony-ai/contracts)

## Issues

[https://github.com/velony-ai/contracts/issues](https://github.com/velony-ai/contracts/issues)
