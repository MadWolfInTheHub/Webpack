
// экспортируйте fetchUser как export по умолчанию

async function fetchUser(userId) {
  console.log('implementation for fetchUser');
  const response = await fetch(`https://api.github.com/users/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to get user data');
  }
  return await response.json();
}

export default fetchUser;