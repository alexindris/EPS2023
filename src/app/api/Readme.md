## How to get Params from Request

Ex: /api/user/123123123123

```ts
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  console.log(id);
  return Response.json({ message: 'OK' }, { status: 200 });
}
```

## How to get Query Params from Request

```ts
export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const boii = params.get('boii');
  const tontito = params.get('tontito');

  return Response.json({ message: 'OK' }, { status: 200 });
}
```

## How to get the Body from Request:

```ts
export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);

  return Response.json({ message: 'OK' }, { status: 200 });
}
```

## How to get FormData from a Request:

```ts
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  console.log(formData);
  console.log(formData.get('name'));
  console.log(formData.get('email'));

  return Response.json({ message: 'OK' }, { status: 200 });
}
```

## How to get Headers and Cookies from a Request:

```ts
export async function GET(request: NextRequest) {
  const reqHeaders = headers();
  const reqCookies = cookies();
  console.log(reqHeaders);
  console.log(reqHeaders.get('x-api-key'));
  console.log(reqHeaders.get('user-agent'));

  console.log(reqCookies);

  return Response.json({ message: 'OK' }, { status: 200 });
}
```
