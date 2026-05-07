'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePlansStore } from '@/stores/plansStore';
import { Plus, CalendarDays, Bell, BellOff, Trash2, BookOpen, ChevronRight, ChevronLeft, Check, Clock } from 'lucide-react';
import { BIBLE_BOOKS, OLD_TESTAMENT, NEW_TESTAMENT } from '@/lib/bible/books';
import type { ReadingPlan } from '@/types/plans';

// ── Chapter sequence builders ────────────────────────────────────────────────

function getChaptersForScope(
  scope: string,
  customBookIds?: string[],
): { book: string; chapter: number }[] {
  let books =
    scope === 'whole-bible' ? BIBLE_BOOKS
    : scope === 'ot'        ? OLD_TESTAMENT
    : scope === 'nt'        ? NEW_TESTAMENT
    : BIBLE_BOOKS.filter(b => customBookIds?.includes(b.id));
  return books.flatMap(b =>
    Array.from({ length: b.chapters }, (_, i) => ({ book: b.id, chapter: i + 1 })),
  );
}

function buildPlanDays(
  chapters: { book: string; chapter: number }[],
  chaptersPerDay: number,
) {
  const days = [];
  for (let i = 0; i < chapters.length; i += chaptersPerDay) {
    days.push({
      day: Math.floor(i / chaptersPerDay) + 1,
      passages: chapters.slice(i, i + chaptersPerDay),
      completed: false,
    });
  }
  return days;
}

// ── Preset plans with real chapter sequences ─────────────────────────────────

const PRESET_PLANS = [
  {
    id: 'whole-bible-365',
    name: 'Whole Bible in a Year',
    description: 'Read the entire Bible — 1,189 chapters in 365 days. ~3 chapters/day.',
    scope: 'whole-bible',
    chaptersPerDay: 4,
    difficulty: 'intermediate',
  },
  {
    id: 'nt-90',
    name: 'New Testament in 90 Days',
    description: 'All 260 chapters of the New Testament in 90 days. ~3 chapters/day.',
    scope: 'nt',
    chaptersPerDay: 3,
    difficulty: 'intermediate',
  },
  {
    id: 'ot-1year',
    name: 'Old Testament in a Year',
    description: 'All 929 chapters of the Old Testament in ~365 days. ~3 chapters/day.',
    scope: 'ot',
    chaptersPerDay: 3,
    difficulty: 'intermediate',
  },
  {
    id: 'gospels-40',
    name: 'The Four Gospels in 40 Days',
    description: 'Matthew, Mark, Luke and John — 89 chapters in 40 days.',
    scope: 'custom',
    customBooks: ['matthew', 'mark', 'luke', 'john'],
    chaptersPerDay: 2,
    difficulty: 'beginner',
  },
];

// ── Scope cards ───────────────────────────────────────────────────────────────

const SCOPES = [
  { id: 'whole-bible', label: 'Whole Bible',     sub: '1,189 chapters' },
  { id: 'ot',          label: 'Old Testament',   sub: '929 chapters'   },
  { id: 'nt',          label: 'New Testament',   sub: '260 chapters'   },
  { id: 'custom',      label: 'Specific Books',  sub: 'You choose'     },
];

// ── Plan card ─────────────────────────────────────────────────────────────────

function PlanCard({ plan, isActive, onActivate, onDelete }: {
  plan: ReadingPlan; isActive: boolean;
  onActivate: () => void; onDelete: () => void;
}) {
  const completed = plan.days.filter(d => d.completed).length;
  const pct = Math.round((completed / plan.totalDays) * 100);
  const today = plan.days[completed] ?? plan.days[plan.totalDays - 1];

  return (
    <div
      className="rounded-2xl border overflow-hidden group"
      style={{
        background: 'var(--shell-800)',
        borderColor: isActive ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.1)',
      }}
    >
      {isActive && <div className="h-1" style={{ background: 'linear-gradient(to right, var(--gold-400), var(--gold-600))' }} />}

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            {isActive && (
              <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1 inline-block" style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold-400)' }}>
                Active
              </span>
            )}
            <h3 className="font-bold" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>{plan.name}</h3>
          </div>
          <button onClick={onDelete} className="p-1.5 rounded-lg opacity-40 hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,100,100,0.8)' }}>
            <Trash2 size={13} />
          </button>
        </div>

        {/* Progress */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs" style={{ color: 'var(--shell-400)' }}>Day {completed} of {plan.totalDays}</span>
            <span className="text-xs font-bold" style={{ color: 'var(--gold-400)' }}>{pct}%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--shell-600)' }}>
            <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: 'linear-gradient(to right, var(--gold-400), var(--gold-500))' }} />
          </div>
        </div>

        {/* Today's passages */}
        {today && (
          <div className="rounded-xl p-3 mb-3" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.12)' }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: 'var(--gold-400)' }}>Today</p>
            <div className="flex flex-wrap gap-1">
              {today.passages.map(p => (
                <Link
                  key={`${p.book}-${p.chapter}`}
                  href={`/bible/${p.book}/${p.chapter}`}
                  className="text-xs px-2 py-0.5 rounded font-medium transition-all hover:scale-105"
                  style={{ background: 'rgba(201,168,76,0.12)', color: 'var(--parchment-200)' }}
                >
                  {BIBLE_BOOKS.find(b => b.id === p.book)?.abbreviation ?? p.book} {p.chapter}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          {plan.reminderEnabled && plan.reminderTime && (
            <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--shell-400)' }}>
              <Bell size={11} /> {plan.reminderTime}
            </span>
          )}
          <div className="ml-auto">
            {!isActive ? (
              <button
                onClick={onActivate}
                className="text-xs font-bold px-3 py-1.5 rounded-lg border transition-all hover:scale-105"
                style={{ background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.25)', color: 'var(--gold-300)' }}
              >
                Set Active
              </button>
            ) : (
              <Link href={`/plans/${plan.id}`} className="flex items-center gap-1 text-xs font-bold" style={{ color: 'var(--gold-400)' }}>
                View Plan <ChevronRight size={12} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Create plan modal ─────────────────────────────────────────────────────────

function CreatePlanModal({ onClose, onCreate }: {
  onClose: () => void;
  onCreate: (plan: { name: string; scope: string; customBooks: string[]; chaptersPerDay: number; reminderTime?: string }) => void;
}) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [scope, setScope] = useState('whole-bible');
  const [customBooks, setCustomBooks] = useState<string[]>([]);
  const [chaptersPerDay, setChaptersPerDay] = useState(3);
  const [name, setName] = useState('');
  const [hasReminder, setHasReminder] = useState(false);
  const [reminderTime, setReminderTime] = useState('07:00');

  const totalChapters = useMemo(() => getChaptersForScope(scope, customBooks).length, [scope, customBooks]);
  const totalDays = Math.ceil(totalChapters / chaptersPerDay);
  const months = (totalDays / 30).toFixed(1);

  function autoName() {
    const scopeLabel = SCOPES.find(s => s.id === scope)?.label ?? scope;
    return `${scopeLabel} — ${chaptersPerDay} ch/day`;
  }

  function handleCreate() {
    onCreate({
      name: name.trim() || autoName(),
      scope,
      customBooks,
      chaptersPerDay,
      reminderTime: hasReminder ? reminderTime : undefined,
    });
    onClose();
  }

  function toggleBook(id: string) {
    setCustomBooks(prev => prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]);
  }

  const canProceed1 = scope !== 'custom' || customBooks.length > 0;
  const canProceed2 = chaptersPerDay >= 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}>
      <div className="w-full max-w-lg rounded-2xl border flex flex-col" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.25)', maxHeight: '90vh' }}>

        {/* Header */}
        <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b" style={{ borderColor: 'rgba(201,168,76,0.1)' }}>
          {step > 1 && (
            <button onClick={() => setStep(s => (s - 1) as any)} style={{ color: 'var(--shell-400)' }}>
              <ChevronLeft size={18} />
            </button>
          )}
          <div className="flex-1">
            <h2 className="font-bold text-lg" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
              {step === 1 ? 'What will you read?' : step === 2 ? 'How many chapters a day?' : 'Name your plan'}
            </h2>
            <div className="flex gap-1 mt-1.5">
              {[1, 2, 3].map(s => (
                <div key={s} className="h-1 rounded-full flex-1 transition-all" style={{ background: s <= step ? 'var(--gold-400)' : 'var(--shell-600)' }} />
              ))}
            </div>
          </div>
          <button onClick={onClose} className="text-lg font-bold" style={{ color: 'var(--shell-500)' }}>✕</button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">

          {/* Step 1 — scope */}
          {step === 1 && (
            <div className="space-y-3">
              {SCOPES.map(s => (
                <button
                  key={s.id}
                  onClick={() => setScope(s.id)}
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl border text-left transition-all hover:scale-[1.01]"
                  style={
                    scope === s.id
                      ? { background: 'rgba(201,168,76,0.12)', borderColor: 'rgba(201,168,76,0.4)' }
                      : { background: 'var(--shell-900)', borderColor: 'rgba(255,255,255,0.07)' }
                  }
                >
                  <div>
                    <p className="font-bold text-sm" style={{ color: 'var(--parchment-100)' }}>{s.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--shell-400)' }}>{s.sub}</p>
                  </div>
                  {scope === s.id && <Check size={16} style={{ color: 'var(--gold-400)' }} />}
                </button>
              ))}

              {/* Book picker for custom */}
              {scope === 'custom' && (
                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--shell-400)' }}>
                    Select books ({customBooks.length} selected)
                  </p>
                  {['OT', 'NT'].map(testament => (
                    <div key={testament} className="mb-4">
                      <p className="text-xs font-semibold mb-2" style={{ color: 'var(--gold-400)' }}>{testament === 'OT' ? 'Old Testament' : 'New Testament'}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {BIBLE_BOOKS.filter(b => b.testament === testament).map(b => (
                          <button
                            key={b.id}
                            onClick={() => toggleBook(b.id)}
                            className="px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all"
                            style={
                              customBooks.includes(b.id)
                                ? { background: 'rgba(201,168,76,0.2)', borderColor: 'rgba(201,168,76,0.4)', color: 'var(--gold-300)' }
                                : { background: 'transparent', borderColor: 'rgba(255,255,255,0.08)', color: 'var(--shell-400)' }
                            }
                          >
                            {b.abbreviation}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 2 — chapters per day */}
          {step === 2 && (
            <div>
              <div
                className="rounded-xl p-4 mb-6 text-center"
                style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}
              >
                <p className="text-3xl font-bold mb-1" style={{ color: 'var(--gold-400)', fontFamily: 'Georgia,serif' }}>{chaptersPerDay}</p>
                <p className="text-sm" style={{ color: 'var(--parchment-300)' }}>chapters per day</p>
                <div className="w-full h-px my-3" style={{ background: 'rgba(201,168,76,0.15)' }} />
                <div className="flex items-center justify-center gap-4 text-sm">
                  <div className="text-center">
                    <p className="font-bold" style={{ color: 'var(--parchment-100)' }}>{totalChapters.toLocaleString()}</p>
                    <p className="text-xs" style={{ color: 'var(--shell-400)' }}>total chapters</p>
                  </div>
                  <div className="text-xl" style={{ color: 'var(--shell-600)' }}>÷</div>
                  <div className="text-center">
                    <p className="font-bold" style={{ color: 'var(--parchment-100)' }}>{chaptersPerDay}</p>
                    <p className="text-xs" style={{ color: 'var(--shell-400)' }}>per day</p>
                  </div>
                  <div className="text-xl" style={{ color: 'var(--shell-600)' }}>=</div>
                  <div className="text-center">
                    <p className="font-bold" style={{ color: 'var(--gold-300)' }}>{totalDays}</p>
                    <p className="text-xs" style={{ color: 'var(--shell-400)' }}>days</p>
                  </div>
                </div>
                <p className="text-xs mt-2" style={{ color: 'var(--shell-500)' }}>
                  <Clock size={10} className="inline mr-1" />
                  ~{Math.round(chaptersPerDay * 4)} minutes/day · {months} months total
                </p>
              </div>

              {/* Slider */}
              <div className="mb-6">
                <input
                  type="range"
                  min={1} max={10} step={1}
                  value={chaptersPerDay}
                  onChange={e => setChaptersPerDay(+e.target.value)}
                  className="w-full accent-yellow-400"
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--shell-500)' }}>
                  <span>1 ch</span><span>3 ch</span><span>5 ch</span><span>7 ch</span><span>10 ch</span>
                </div>
              </div>

              {/* Quick picks */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--shell-400)' }}>Quick picks</p>
                <div className="flex gap-2 flex-wrap">
                  {[1, 2, 3, 4, 5, 7, 10].map(n => (
                    <button
                      key={n}
                      onClick={() => setChaptersPerDay(n)}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold border transition-all"
                      style={
                        chaptersPerDay === n
                          ? { background: 'var(--gold-400)', color: 'var(--sepia-900)', borderColor: 'var(--gold-400)' }
                          : { background: 'transparent', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--shell-400)' }
                      }
                    >
                      {n}/day
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3 — name + reminder */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest mb-1.5 block" style={{ color: 'var(--shell-400)' }}>Plan Name</label>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder={autoName()}
                  className="w-full px-4 py-2.5 rounded-xl border outline-none text-sm"
                  style={{ background: 'var(--shell-900)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--parchment-200)' }}
                />
                <p className="text-xs mt-1" style={{ color: 'var(--shell-500)' }}>Leave blank to use the default name above.</p>
              </div>

              {/* Summary */}
              <div className="rounded-xl p-4" style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.12)' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold-400)' }}>Summary</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p style={{ color: 'var(--shell-400)' }}>Scope</p>
                    <p className="font-semibold" style={{ color: 'var(--parchment-200)' }}>
                      {scope === 'custom' ? `${customBooks.length} books` : SCOPES.find(s => s.id === scope)?.label}
                    </p>
                  </div>
                  <div>
                    <p style={{ color: 'var(--shell-400)' }}>Chapters/day</p>
                    <p className="font-semibold" style={{ color: 'var(--parchment-200)' }}>{chaptersPerDay}</p>
                  </div>
                  <div>
                    <p style={{ color: 'var(--shell-400)' }}>Total chapters</p>
                    <p className="font-semibold" style={{ color: 'var(--parchment-200)' }}>{totalChapters.toLocaleString()}</p>
                  </div>
                  <div>
                    <p style={{ color: 'var(--shell-400)' }}>Duration</p>
                    <p className="font-semibold" style={{ color: 'var(--gold-300)' }}>{totalDays} days ({months} mo)</p>
                  </div>
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
                    value={reminderTime}
                    onChange={e => setReminderTime(e.target.value)}
                    className="px-3 py-2 rounded-xl border text-sm"
                    style={{ background: 'var(--shell-900)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--parchment-200)' }}
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t flex gap-3" style={{ borderColor: 'rgba(201,168,76,0.1)' }}>
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border text-sm font-bold" style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'var(--shell-400)' }}>
            Cancel
          </button>
          {step < 3 ? (
            <button
              onClick={() => setStep(s => (s + 1) as any)}
              disabled={!canProceed1 && step === 1}
              className="flex-1 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-40"
              style={{ background: 'linear-gradient(135deg, var(--gold-400), var(--gold-600))', color: 'var(--sepia-900)' }}
            >
              Next <ChevronRight size={14} />
            </button>
          ) : (
            <button
              onClick={handleCreate}
              className="flex-1 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, var(--gold-400), var(--gold-600))', color: 'var(--sepia-900)' }}
            >
              Create Plan
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PlansPage() {
  const { plans, activePlanId, createPlan, deletePlan, setActivePlan } = usePlansStore();
  const [showCreate, setShowCreate] = useState(false);

  function handleCreate({ name, scope, customBooks, chaptersPerDay, reminderTime }: {
    name: string; scope: string; customBooks: string[]; chaptersPerDay: number; reminderTime?: string;
  }) {
    const chapters = getChaptersForScope(scope, customBooks);
    const days = buildPlanDays(chapters, chaptersPerDay);
    const id = createPlan({
      name,
      description: `${chaptersPerDay} chapter${chaptersPerDay > 1 ? 's' : ''}/day · ${days.length} days`,
      totalDays: days.length,
      days,
      startDate: Date.now(),
      reminderTime,
      reminderEnabled: !!reminderTime,
    });
    setActivePlan(id);
  }

  function addPreset(preset: typeof PRESET_PLANS[0]) {
    const chapters = getChaptersForScope(preset.scope, preset.customBooks);
    const days = buildPlanDays(chapters, preset.chaptersPerDay);
    const id = createPlan({
      name: preset.name,
      description: preset.description,
      totalDays: days.length,
      days,
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
          <p className="text-sm mb-5" style={{ color: 'var(--shell-400)' }}>Create a custom plan or start from one of the presets below.</p>
          <button
            onClick={() => setShowCreate(true)}
            className="px-5 py-2.5 rounded-xl font-bold text-sm border"
            style={{ background: 'rgba(201,168,76,0.12)', borderColor: 'rgba(201,168,76,0.3)', color: 'var(--gold-300)' }}
          >
            Create Your First Plan
          </button>
        </div>
      )}

      {/* Preset plans */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--shell-400)' }}>Curated Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PRESET_PLANS.map(preset => {
            const totalCh = getChaptersForScope(preset.scope, preset.customBooks).length;
            const totalDays = Math.ceil(totalCh / preset.chaptersPerDay);
            return (
              <div key={preset.id} className="rounded-xl border p-4" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.1)' }}>
                <p className="font-bold text-sm mb-1" style={{ color: 'var(--parchment-100)' }}>{preset.name}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold-400)' }}>
                    {totalDays} days
                  </span>
                  <span className="text-xs" style={{ color: 'var(--shell-500)' }}>{preset.chaptersPerDay} ch/day · ~{preset.chaptersPerDay * 4} min</span>
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
            );
          })}
        </div>
      </div>

      {showCreate && <CreatePlanModal onClose={() => setShowCreate(false)} onCreate={handleCreate} />}
    </div>
  );
}
