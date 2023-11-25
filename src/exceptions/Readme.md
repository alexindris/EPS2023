# Exceptions

This Folder contains all the custom exceptions that the application can throw.

For each new **Type of exception**, create a new file with the name of the exception, and add the following code:

```typescript
export class NewCreatedException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NewCreatedException';
  }
}
```

Also, add it to **index.ts** file in the same folder.

```typescript
export { NewCreatedException } from './NewCreatedException';
```

Finally, go to @/lib/errorHandler.ts and add a new case to the switch statement with the status code of the exception:

```typescript

   case error instanceof NewCreatedException:
      return new Response(body, { status: 444 });
```
