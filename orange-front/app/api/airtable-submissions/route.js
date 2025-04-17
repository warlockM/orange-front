export async function GET() {
    // try {
    //   const baseId = process.env.AIRTABLE_BASE_ID;
    //   const tableName = process.env.AIRTABLE_TABLE_NAME;
    //   const apiKey = process.env.AIRTABLE_API_KEY;
  
    //   console.log('baseId:', baseId);
    //   console.log('tableName:', tableName);
    //   console.log('apiKey:', apiKey ? '✔️ exists' : '❌ missing');
  
    //   const res = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
    //     headers: {
    //       Authorization: `Bearer ${apiKey}`
    //     }
    //   });
  
    //   const text = await res.text(); // <-- to inspect raw response from Airtable
    //   console.log('Raw Airtable response:', text);
  
    //   if (!res.ok) {
    //     return Response.json({ error: 'Airtable API failed', details: text }, { status: res.status });
    //   }
  
    //   const data = JSON.parse(text);
    //   const count = data.records?.length || 0;
  
    //   return Response.json({ count });
    // } catch (err) {
    //   console.error('Airtable API error:', err);
    //   return Response.json({ error: 'Server error' }, { status: 500 });
    // }
        return Response.json({ count: 42 }); // mock count for now
  }
  