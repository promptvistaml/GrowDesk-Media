import { NextResponse } from 'next/server';
import { IN_MEMORY_LEADS, LeadEnquiry } from '@/lib/lead-store';

export async function GET() {
  return NextResponse.json({ success: true, leads: IN_MEMORY_LEADS });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, contactMethod, businessName, serviceCategory, message } = body;

    if (!fullName || !contactMethod) {
      return NextResponse.json(
        { success: false, error: 'Name and at least one contact method (phone/email) are required.' },
        { status: 400 }
      );
    }

    const newLead: LeadEnquiry = {
      id: `GD-${Math.floor(1000 + Math.random() * 9000)}`,
      fullName,
      contactMethod,
      businessName: businessName || 'Not Specified',
      serviceCategory: serviceCategory || 'General Inquiry',
      message: message || '',
      status: 'New',
      notes: '',
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
    };

    // Prepend new lead
    IN_MEMORY_LEADS.unshift(newLead);

    // Build the WhatsApp message payload for direct forwarding
    const encodedText = encodeURIComponent(
      `*New Website Lead — GrowDesk Media*\n\n` +
      `*Lead ID:* ${newLead.id}\n` +
      `*Name:* ${newLead.fullName}\n` +
      `*Contact:* ${newLead.contactMethod}\n` +
      `*Business:* ${newLead.businessName}\n` +
      `*Service:* ${newLead.serviceCategory}\n` +
      `*Message:* ${newLead.message || 'None provided'}\n` +
      `*Timestamp:* ${newLead.createdAt}`
    );

    const whatsappRedirectUrl = `https://wa.me/?text=${encodedText}`;

    return NextResponse.json({
      success: true,
      lead: newLead,
      whatsappRedirectUrl,
      message: 'Enquiry recorded successfully and prepared for WhatsApp transmission.',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to process lead.' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status, notes } = body;

    const leadIndex = IN_MEMORY_LEADS.findIndex((l) => l.id === id);
    if (leadIndex === -1) {
      return NextResponse.json({ success: false, error: 'Lead not found.' }, { status: 404 });
    }

    if (status) IN_MEMORY_LEADS[leadIndex].status = status;
    if (notes !== undefined) IN_MEMORY_LEADS[leadIndex].notes = notes;

    return NextResponse.json({ success: true, lead: IN_MEMORY_LEADS[leadIndex] });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update lead.' },
      { status: 500 }
    );
  }
}

