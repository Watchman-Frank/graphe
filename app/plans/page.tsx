'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePlansStore } from '@/stores/plansStore';
import { format, addDays } from 'date-fns';
import { Plus, CalendarDays, CheckCircle2, Circle, Bell, BellOff, Trash2, BookOpen, ChevronRight } from 'lucide-react';
import type { ReadingPlan } from '@/types/plans';

const PRESET_PLANS = [
  {
    id: 'whole-bible-365',
    name: 'Whole Bible in a Year',
    description: 'Read the entire Bible — Old and New Testament — in 365 days. Approx. 15–20 mins/day.',
    duration: 365,
    difficulty: 'intermediate',
    dailyMinutes: 20,
  },
  {
    id: 'nt-90',
    name: 'New Testament in 90 Days',
    description: 'Read all 27 books of the New Testament in 90 days. Approx. 30 mins/day.',
    duration: 90,
    difficulty: 'intermediate',
    dailyMinutes: 30,
  },
  {
    id: 'psalms-30',
    name: 'Psalms & Proverbs in 30 Days',
    description: 'Five Psalms and one chapter of Proverbs each day. Perfect devotional plan.',
    duration: 30,
    difficulty: 'beginner',
    dailyMinutes: 10,
  },
  {
    id: 'gospels-40',
    name: 'The Four Gospels in 40 Days',
    description: 'Read Matthew, Mark, Luke and John in 40 days — walking with Jesus.',
    duration: 40,
    difficulty: 'beginner',
    dailyMinutes: 15,
  },
];

function PlanCard({ plan, isActive, onActivate, onDelete }: {
  plan: ReadingPlan; isActive: boolean;
  onActivate: () => void; onDelete: () => void;
}) {
  const completed = plan.days.filter(d => d.completed).length;
  const pct = Math.round((completed / plan.totalDays) * 100);
  const today = plan.days[completed] ?? plan.days[plan.totalDays - 1];

  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{
        background: 'var(--shell-800)',
        borderColor: isActive ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.1)',
      }}
    >
      {isActive && <div className="h-1" style={{ background: 'linear-gradient(to right, var(--gold-400), var(--gold-600))' }} />}

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            {isActive && <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1 inline-block" style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold-400)' }}>Active</span>}
            <h3 className="font-bold" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>{plan.name}</h3>
          </div>
          <button onClick={onDelete} className="p-1.5 rounded-lg opacity-0 hover:opacity-100 group-hover:opacity-100" style={{ color: 'rgba(255,100,100,0.6)' }}>
            <Trash2 size={13} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs" style={{ color: 'var(--shell-400)' }}>Day {completed} of {plan.totalDays}</span>
            <span className="text-xs font-bold" style={{ color: 'var(--gold-400)' }}>{pct}%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--shell-600)' }}>
            <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: 'linear-gradient(to right, var(--gold-400), var(--gold-500))' }} />
          </div>
        </div>

        {/* Today's reading */}
        {today && (
          <div className="rounded-xl p-3 mb-3" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.12)' }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--gold-400)' }}>Today</p>
            <div className="flex flex-wrap gap-1">
              {today.passages.slice(0, 4).map(p => (
                <Link
                  key={`${p.book}-${p.chapter}`}
                  href={`/bible/${p.book}/${p.chapter}`}
                  className="text-xs px-2 py-0.5 rounded font-medium"
                  style={{ background: 'rgba(201,168,76,0.12)', color: 'var(--parchment-200)' }}
                >
                  {p.book.charAt(0).toUpperCase() + p.book.slice(1)} {p.chapter}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {plan.reminderEnabled && plan.reminderTime && (
              <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--shell-400)' }}>
                <Bell size={11} /> {plan.reminderTime}
              </span>
            )}
          </div>
          {!isActive && (
            <button
              onClick={onActivate}
              className="text-xs font-bold px-3 py-1.5 rounded-lg border transition-all hover:scale-105"
              style={{ background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.25)', color: 'var(--gold-300)' }}
            >
              Set Active
            </button>
          )}
          {isActive && (
            <Link
              href={`/plans/${plan.id}`}
              className="flex items-center gap-1 text-xs font-bold"
              style={{ color: 'var(--gold-400)' }}
            >
              View Plan <ChevronRight size={12} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function CreatePlanModal({ onClose, onCreate }: { onClose: () => void; onCreate: (name: string, days: number, time?: string) => void }) {
  const [name, setName] = useState('');
  const [days, setDays] = useState(30);
  const [reminder, setReminder] = useState('07:00');
  const [hasReminder, setHasReminder] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}>
      <div className="w-full max-w-md rounded-2xl border p-6" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.25)' }}>
        <h2 className="text-xl font-bold mb-5" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>Create Reading Plan</h2>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-widest mb-1.5 block" style={{ color: 'var(--shell-400)' }}>Plan Name</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. My 30-Day Psalms Plan"
              className="w-full px-4 py-2.5 rounded-xl border outline-none text-sm"
              style={{ background: 'var(--shell-900)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--parchment-200)' }}
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-widest mb-1.5 block" style={{ color: 'var(--shell-400)' }}>Duration: {days} days</label>
            <input
              type="range" min={7} max={365} value={days} onChange={e => setDays(+e.target.value)}
              className="w-full accent-yellow-400"
            />
            <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--shell-500)' }}>
              <span>1 week</span><span>1 month</span><span>3 months</span><span>1 year</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--shell-400)' }}>Daily Reminder</label>
              <button
                onClick={() => setHasReminder(h => !h)}
                className="flex items-center gap-1.5 text-xs font-semibold"
                style={{ color: hasReminder ? 'var(--gold-400)' : 'var(--shell-500)' }}
              >
                {hasReminder ? <Bell size={12} /> : <BellOff size={12} />}
                {hasReminder ? 'On' : 'Off'}
              </button>
            </div>
            {hasReminder && (
              <input
                type="time"
                value={reminder}
                onChange={e => setReminder(e.target.value)}
                className="px-3 py-2 rounded-xl border text-sm"
                style={{ background: 'var(--shell-900)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--parchment-200)' }}
              />
            )}
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border text-sm font-bold" style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'var(--shell-400)' }}>Cancel</button>
          <button
            onClick={() => { if (name) { onCreate(name, days, hasReminder ? reminder : undefined); onClose(); } }}
            className="flex-1 py-2.5 rounded-xl text-sm font-bold"
            style={{ background: 'linear-gradient(135deg, var(--gold-400), var(--gold-600))', color: 'var(--sepia-900)' }}
          >
            Create Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PlansPage() {
  const { plans, activePlanId, createPlan, deletePlan, setActivePlan } = usePlansStore();
  const [showCreate, setShowCreate] = useState(false);
  const [showPresets, setShowPresets] = useState(false);

  function handleCreate(name: string, days: number, reminderTime?: string) {
    const planDays = Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      passages: [{ book: 'psalms', chapter: (i % 150) + 1 }],
      completed: false,
    }));
    const id = createPlan({
      name,
      description: `Custom ${days}-day plan`,
      totalDays: days,
      days: planDays,
      startDate: Date.now(),
      reminderTime,
      reminderEnabled: !!reminderTime,
    });
    setActivePlan(id);
  }

  function addPreset(preset: typeof PRESET_PLANS[0]) {
    const planDays = Array.from({ length: preset.duration }, (_, i) => ({
      day: i + 1,
      passages: [{ book: 'psalms', chapter: (i % 150) + 1 }],
      completed: false,
    }));
    const id = createPlan({
      name: preset.name,
      description: preset.description,
      totalDays: preset.duration,
      days: planDays,
      startDate: Date.now(),
      reminderEnabled: false,
    });
    setActivePlan(id);
  }

  return (
    <div className="px-4 py-8 md:px-10 md:py-12">
      <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold-400)' }}>Reading Plans</p>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>My Plans</h1>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105"
          style={{ background: 'linear-gradient(135deg, var(--gold-400), var(--gold-600))', color: 'var(--sepia-900)' }}
        >
          <Plus size={16} /> New Plan
        </button>
      </div>

      {/* My plans */}
      {plans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {plans.map(plan => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isActive={plan.id === activePlanId}
              onActivate={() => setActivePlan(plan.id)}
              onDelete={() => deletePlan(plan.id)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border p-10 text-center mb-10" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
          <CalendarDays size={32} className="mx-auto mb-3" style={{ color: 'var(--gold-400)' }} />
          <p className="font-bold text-lg mb-1" style={{ color: 'var(--parchment-200)' }}>No reading plans yet</p>
          <p className="text-sm mb-5" style={{ color: 'var(--shell-400)' }}>Create a custom plan or choose from our curated presets below.</p>
          <button onClick={() => setShowCreate(true)} className="px-5 py-2.5 rounded-xl font-bold text-sm border" style={{ background: 'rgba(201,168,76,0.12)', borderColor: 'rgba(201,168,76,0.3)', color: 'var(--gold-300)' }}>
            Create Your First Plan
          </button>
        </div>
      )}

      {/* Preset plans */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--shell-400)' }}>Curated Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PRESET_PLANS.map(preset => (
            <div
              key={preset.id}
              className="rounded-xl border p-4"
              style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.1)' }}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: 'var(--parchment-100)' }}>{preset.name}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold-400)' }}>{preset.duration} days</span>
                    <span className="text-xs" style={{ color: 'var(--shell-500)' }}>~{preset.dailyMinutes} min/day</span>
                  </div>
                </div>
              </div>
              <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--shell-400)' }}>{preset.description}</p>
              <button
                onClick={() => addPreset(preset)}
                className="text-xs font-bold px-3 py-1.5 rounded-lg border transition-all hover:scale-105"
                style={{ background: 'rgba(201,168,76,0.08)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--gold-400)' }}
              >
                <BookOpen size={11} className="inline mr-1" /> Start Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {showCreate && <CreatePlanModal onClose={() => setShowCreate(false)} onCreate={handleCreate} />}
    </div>
  );
}
