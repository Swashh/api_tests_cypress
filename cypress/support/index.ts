export {};
declare global {
  namespace Cypress {
    interface Chainable {
      createGoal(goalDataOverride?: Partial<Goal>): Chainable<any>;
      getGoals(): Chainable<any>;
      getGoal(goalId?: any): Chainable<any>;
      deleteGoal(): Chainable<any>;
      updateGoal(goalDataOverride?: Partial<Goal>): Chainable<any>;
      createKeyResult(goalDataOverride?: Partial<Goal>): Chainable<any>;
      editKeyResult(goalDataOverride?: Partial<Goal>): Chainable<any>;
      deleteKeyResult(): Chainable<any>;
    }
  }
}

interface Goal {
  name: string;
  due_date: number;
  description: string;
  multiple_owners: boolean;
  owners: number[];
  color: string;
}
