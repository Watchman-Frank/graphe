'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ReadingPlan, ReadingPlanDay } from '@/types/plans';

interface PlansState {
  plans: ReadingPlan[];
  activePlanId: string | null;
  createPlan: (p: Omit<ReadingPlan, 'id' | 'createdAt'>) => string;
  deletePlan: (id: string) => void;
  markDayComplete: (planId: string, day: number) => void;
  setActivePlan: (id: string) => void;
  getTodaysReading: () => { plan: ReadingPlan; day: ReadingPlanDay } | null;
  getActivePlan: () => ReadingPlan | undefined;
}

export const usePlansStore = create<PlansState>()(
  persist(
    (set, get) => ({
      plans: [],
      activePlanId: null,
      createPlan: (p) => {
        const id = `plan-${Date.now()}`;
        set((s) => ({ plans: [...s.plans, { ...p, id, createdAt: Date.now() }] }));
        return id;
      },
      deletePlan: (id) =>
        set((s) => ({
          plans: s.plans.filter((p) => p.id !== id),
          activePlanId: s.activePlanId === id ? null : s.activePlanId,
        })),
      markDayComplete: (planId, day) =>
        set((s) => ({
          plans: s.plans.map((p) =>
            p.id === planId
              ? {
                  ...p,
                  days: p.days.map((d) =>
                    d.day === day ? { ...d, completed: true, completedAt: Date.now() } : d
                  ),
                }
              : p
          ),
        })),
      setActivePlan: (id) => set({ activePlanId: id }),
      getActivePlan: () => {
        const { plans, activePlanId } = get();
        return plans.find((p) => p.id === activePlanId);
      },
      getTodaysReading: () => {
        const { plans, activePlanId } = get();
        const plan = plans.find((p) => p.id === activePlanId);
        if (!plan) return null;
        const elapsed = Math.floor((Date.now() - plan.startDate) / 86400000);
        const dayIndex = Math.min(elapsed, plan.totalDays - 1);
        const day = plan.days[dayIndex];
        if (!day) return null;
        return { plan, day };
      },
    }),
    { name: 'graphe-plans' }
  )
);
