import { faker } from '@faker-js/faker';
import { handleGoalRequest } from './commonFunctions';
import { GOAL_ID, KEY_RESULT_ID } from '../e2e/api/goal.cy';

const AUTH_TOKEN = Cypress.env('authToken');
const API_URL_CREATE_GOAL = Cypress.env('apiUrlCreateGoal');
const API_URL_GET_GOAL = Cypress.env('apiGetGoal');
const API_URL_KEY_RESULT = Cypress.env('apiKeyResult');

Cypress.Commands.add('createGoal', (goalDataOverride = {}) => {
  cy.fixture('createGoalData').then((defaultGoalData) => {
    const requestData = {
      ...defaultGoalData,
      name: faker.company.name(),
      due_date: faker.date.future().getTime(),
      description: faker.lorem.sentence(),
      ...goalDataOverride,
    };

    handleGoalRequest('POST', API_URL_CREATE_GOAL, AUTH_TOKEN, requestData, 200);
  });
});

Cypress.Commands.add('getGoals', () => {
  handleGoalRequest('GET', API_URL_CREATE_GOAL, AUTH_TOKEN, null, 200);
});

Cypress.Commands.add('getGoal', () => {
  handleGoalRequest('GET', `${API_URL_GET_GOAL}${GOAL_ID}`, AUTH_TOKEN, null, 200);
});

Cypress.Commands.add('deleteGoal', () => {
  handleGoalRequest('DELETE', `${API_URL_GET_GOAL}${GOAL_ID}`, AUTH_TOKEN, null, 200);
});

Cypress.Commands.add('updateGoal', (goalDataOverride = {}) => {
  cy.fixture('updateGoalData').then((defaultGoalData) => {
    const requestData = {
      ...defaultGoalData,
      name: faker.company.name(),
      due_date: faker.date.future().getTime(),
      description: faker.lorem.sentence(),
      ...goalDataOverride,
    };

    handleGoalRequest('PUT', `${API_URL_GET_GOAL}${GOAL_ID}`, AUTH_TOKEN, requestData, 200);
  });
});

Cypress.Commands.add('createKeyResult', (goalDataOverride = {}) => {
  cy.fixture('createKeyResult').then((defaultGoalData) => {
    const requestData = {
      ...defaultGoalData,
      name: faker.company.name(),
      ...goalDataOverride,
    };
    handleGoalRequest('POST', `${API_URL_GET_GOAL}${GOAL_ID}${API_URL_KEY_RESULT}`, AUTH_TOKEN, requestData, 200);
  });
});

Cypress.Commands.add('editKeyResult', (goalDataOverride = {}) => {
  cy.fixture('createKeyResult').then((defaultGoalData) => {
    const requestData = {
      ...defaultGoalData,
      note: faker.company.name(),
      ...goalDataOverride,
    };
    handleGoalRequest('PUT', `${API_URL_KEY_RESULT}/${KEY_RESULT_ID}`, AUTH_TOKEN, requestData, 200);
  });
});

Cypress.Commands.add('deleteKeyResult', () => {
  handleGoalRequest('DELETE', `${API_URL_KEY_RESULT}/${KEY_RESULT_ID}`, AUTH_TOKEN, null, 200);
});
