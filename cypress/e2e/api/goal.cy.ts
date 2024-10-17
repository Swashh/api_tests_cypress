import { validateResponseKeys } from '../../support/commonFunctions';
export let GOAL_ID;
export let KEY_RESULT_ID;

describe('Cover GOAL api tests', () => {
  it('POST - Create Goal', () => {
    cy.createGoal().then((res) => {
      const createdGoal = res.goal;

      expect(createdGoal).to.have.property('id');
      GOAL_ID = createdGoal.id;
      cy.log(createdGoal.id);
    });
  });

  it('GET - Get Goals', () => {
    cy.getGoals().then((res) => {
      const getResGoals = res.goals;

      cy.fixture('getGoalsData').then(({ keys }) => {
        validateResponseKeys(getResGoals, keys);
      });
    });
  });

  it('GET - Get Goal', () => {
    cy.getGoal().then((res) => {
      const getResGoal = res.goal;

      cy.fixture('getGoalData').then(({ keys }) => {
        keys.forEach((key) => {
          expect(getResGoal).to.have.property(key);
        });
      });
    });
  });

  it('PUT - Update Goal', () => {
    cy.updateGoal().then((res) => {
      const createdGoal = res.goal;

      expect(createdGoal).to.have.property('id');
    });
  });

  it('POST - Create Key Result', () => {
    cy.createKeyResult().then((res) => {
      const createdKey = res.key_result;

      expect(createdKey).to.have.property('id');

      KEY_RESULT_ID = createdKey.id;
    });
  });

  it('PUT - Edit Key Result', () => {
    cy.editKeyResult().then((res) => {
      const editKey = res.key_result;

      expect(editKey).to.have.property('id');
    });
  });
  it('DELETE - Delete Key Result', () => {
    cy.deleteKeyResult().then((res) => {
      expect(res).to.deep.equal({});
    });
  });

  it('DELETE - Delete Goal', () => {
    cy.deleteGoal().then((res) => {
      expect(res).to.deep.equal({});
    });
  });
});
