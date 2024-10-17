export function handleGoalRequest(method, API_URL_CREATE_GOAL, AUTH_TOKEN, requestData, status) {
  cy.request({
    method: `${method}`,
    url: API_URL_CREATE_GOAL,
    headers: {
      Authorization: AUTH_TOKEN,
    },
    body: requestData,
  }).then((response) => {
    expect(response.status).to.eq(status);
    return cy.wrap(response.body);
  });
}

export function validateResponseKeys(responseData, expectedKeys) {
  expect(responseData).to.be.an('array').that.is.not.empty;

  responseData.forEach((item) => {
    expect(item).to.have.all.keys(...expectedKeys);
  });
}
