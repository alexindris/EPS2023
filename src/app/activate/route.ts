import { processData } from '@/lib/mqtt';
// TODO: This is a temporary solution to activate the MQTT client on production this should be removed in the future
export async function GET() {
  processData();
  return Response.json({
    status: 200,
    body: 'Activated',
  });
}
