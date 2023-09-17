const API = 'https://jsonplaceholder.typicode.com/users'

export const getUsers = async () => {
  const res = await fetch(API);
  return await res.json();
}