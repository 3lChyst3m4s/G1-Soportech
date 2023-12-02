import { createLog, updateRequest } from "../../../Api";

export const assignSolver = async ({ requestId }) => {
  const log = {
    id: requestId,
  };

  try {
    const response = await createLog(log);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export const modifyRequest = async ({ user, requestId }) => {
  const takenRequest = {
    solverId: user.userId,
    stateId: 2,
  };

  try {
    const response = await updateRequest(requestId, takenRequest);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};