'use client';

import { useState, useEffect } from 'react';
import { LeadEnquiry } from '@/lib/lead-store';
import { 
  Users, 
  Search, 
  Filter, 
  MessageCircle, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Lock,
  Edit3,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [leads, setLeads] = useState<LeadEnquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const [editingLead, setEditingLead] = useState<LeadEnquiry | null>(null);
  const [editStatus, setEditStatus] = useState<LeadEnquiry['status']>('New');
  const [editNotes, setEditNotes] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  // Simple passkey auth for admin preview
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'growdesk2026' || password === 'admin') {
      setIsAuthenticated(true);
      setLoginError('');
      fetchLeads();
    } else {
      setLoginError('Invalid Passkey. Use "growdesk2026" or "admin" to enter.');
    }
  };

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/enquiries');
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [isAuthenticated]);

  const handleUpdateLead = async () => {
    if (!editingLead) return;
    setIsUpdating(true);
    try {
      const res = await fetch('/api/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: editingLead.id,
          status: editStatus,
          notes: editNotes,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setLeads((prev) =>
          prev.map((l) => (l.id === editingLead.id ? data.lead : l))
        );
        setEditingLead(null);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsUpdating(false);
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.contactMethod.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.serviceCategory.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === 'ALL' || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">
        <div className="bg-white border border-[#E2E8F0] p-8 md:p-10 rounded-xl shadow-lg max-w-md w-full space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-[#0B1F4D] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-[#0B1F4D]">GrowDesk Team Portal</h1>
            <p className="text-xs text-neutral-500">
              Authorized admin access to manage website inquiries & WhatsApp status.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3 bg-red-50 text-red-600 text-xs rounded border border-red-200">
                {loginError}
              </div>
            )}
            <div>
              <label className="block text-xs font-semibold text-[#0B1F4D] uppercase tracking-wider mb-2">
                Team Access Key
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter passkey (e.g. growdesk2026)"
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1E63FF]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#0B1F4D] hover:bg-[#1E63FF] text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors shadow"
            >
              Authenticate & Access Leads
            </button>
          </form>

          <div className="pt-4 border-t border-[#E2E8F0] text-center">
            <Link href="/" className="text-xs text-neutral-400 hover:text-[#0B1F4D]">
              &larr; Back to Public Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0B1F4D] flex flex-col">
      {/* Top Admin Header */}
      <header className="bg-[#0B1F4D] text-white px-6 md:px-12 py-4 flex items-center justify-between border-b border-[#0B1F4D]">
        <div className="flex items-center gap-4">
          <div className="font-extrabold text-lg tracking-tight">
            GROWDESK<span className="text-[#4FA9FF]">.ADMIN</span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[10px] bg-white/10 px-2 py-0.5 rounded text-neutral-300">
            ENQUIRY DESK // LIVE
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-xs text-neutral-300 hover:text-white font-medium"
          >
            View Public Site &rarr;
          </Link>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded text-white"
          >
            Log Out
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 w-full flex-1 space-y-8">
        {/* KPI Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-[#E2E8F0] p-5 rounded-lg shadow-sm">
            <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">Total Enquiries</span>
            <span className="text-3xl font-extrabold text-[#0B1F4D]">{leads.length}</span>
          </div>
          <div className="bg-white border border-[#E2E8F0] p-5 rounded-lg shadow-sm">
            <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">New Leads</span>
            <span className="text-3xl font-extrabold text-[#1E63FF]">
              {leads.filter((l) => l.status === 'New').length}
            </span>
          </div>
          <div className="bg-white border border-[#E2E8F0] p-5 rounded-lg shadow-sm">
            <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">Qualified</span>
            <span className="text-3xl font-extrabold text-emerald-600">
              {leads.filter((l) => l.status === 'Qualified').length}
            </span>
          </div>
          <div className="bg-white border border-[#E2E8F0] p-5 rounded-lg shadow-sm">
            <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">Proposals Sent</span>
            <span className="text-3xl font-extrabold text-purple-600">
              {leads.filter((l) => l.status === 'Proposal Sent').length}
            </span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white border border-[#E2E8F0] p-4 rounded-lg flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by client, business, or service..."
              className="w-full pl-10 pr-4 py-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded text-xs focus:outline-none focus:border-[#1E63FF]"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-neutral-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-[#F8FAFC] border border-[#CBD5E1] rounded px-3 py-2 text-xs focus:outline-none"
            >
              <option value="ALL">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Proposal Sent">Proposal Sent</option>
              <option value="Won">Won</option>
              <option value="Lost">Lost</option>
            </select>
            <button
              onClick={fetchLeads}
              className="px-3 py-2 text-xs bg-neutral-100 hover:bg-neutral-200 rounded font-medium text-neutral-700"
            >
              Refresh
            </button>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white border border-[#E2E8F0] rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-neutral-500 font-mono uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Client & Contact</th>
                  <th className="py-3 px-4">Business / Entity</th>
                  <th className="py-3 px-4">Service Category</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Received</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {filteredLeads.map((lead) => {
                  const statusColors: Record<string, string> = {
                    New: 'bg-blue-50 text-blue-700 border-blue-200',
                    Contacted: 'bg-amber-50 text-amber-700 border-amber-200',
                    Qualified: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                    'Proposal Sent': 'bg-purple-50 text-purple-700 border-purple-200',
                    Won: 'bg-green-100 text-green-800 border-green-300',
                    Lost: 'bg-red-50 text-red-700 border-red-200',
                  };

                  return (
                    <tr key={lead.id} className="hover:bg-neutral-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-[#1E63FF]">
                        {lead.id}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-[#0B1F4D]">{lead.fullName}</div>
                        <div className="text-neutral-500 text-[11px] flex items-center gap-1 mt-0.5">
                          {lead.contactMethod}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-neutral-800">
                        {lead.businessName}
                      </td>
                      <td className="py-3.5 px-4 text-neutral-600">
                        {lead.serviceCategory}
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold border ${
                            statusColors[lead.status] || 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[11px] text-neutral-400">
                        {lead.createdAt}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <a
                            href={`https://wa.me/919406031522?text=Hello%20${encodeURIComponent(
                              lead.fullName
                            )},%20this%20is%20GrowDesk%20Media%20following%20up%20on%20your%20inquiry.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                            title="Open WhatsApp Follow-up"
                          >
                            <MessageCircle className="w-4 h-4 fill-current" />
                          </a>

                          <button
                            onClick={() => {
                              setEditingLead(lead);
                              setEditStatus(lead.status);
                              setEditNotes(lead.notes || '');
                            }}
                            className="p-1.5 rounded bg-neutral-100 hover:bg-neutral-200 text-[#0B1F4D]"
                            title="Edit Status / Notes"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {filteredLeads.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-10 text-center text-neutral-400">
                      No matching inquiries found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Edit Drawer Modal */}
      {editingLead && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full border border-[#E2E8F0] shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-base text-[#0B1F4D]">
                Update Lead: {editingLead.id} ({editingLead.fullName})
              </h3>
              <button
                onClick={() => setEditingLead(null)}
                className="text-neutral-400 hover:text-black font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold mb-1">Status</label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value as any)}
                  className="w-full bg-[#F8FAFC] border p-2.5 rounded text-xs"
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Proposal Sent">Proposal Sent</option>
                  <option value="Won">Won</option>
                  <option value="Lost">Lost</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-1">Internal Call Notes & Next Follow-Up</label>
                <textarea
                  rows={4}
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  placeholder="e.g. Called client on WhatsApp. Discussed Meta Ads budget. Sent proposal."
                  className="w-full bg-[#F8FAFC] border p-2.5 rounded text-xs resize-none"
                />
              </div>

              <div className="p-3 bg-neutral-50 rounded border text-[11px] text-neutral-600 space-y-1">
                <div><strong>Business:</strong> {editingLead.businessName}</div>
                <div><strong>Client Message:</strong> {editingLead.message || 'None provided'}</div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t">
              <button
                onClick={() => setEditingLead(null)}
                className="px-4 py-2 border rounded text-xs text-neutral-600 hover:bg-neutral-100"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateLead}
                disabled={isUpdating}
                className="px-4 py-2 bg-[#0B1F4D] hover:bg-[#1E63FF] text-white rounded text-xs font-semibold"
              >
                {isUpdating ? 'Saving...' : 'Save Updates'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

