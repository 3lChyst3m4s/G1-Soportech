import { updateRequest } from "../../../Api";

export const closeRequest = async ({ requestId }) => {
  const takenRequest = {
    closedTime: new Date(),
    conditionId: 2,
  };

  try {
    const response = await updateRequest(requestId, takenRequest);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};