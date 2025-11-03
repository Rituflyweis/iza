import { Box, Typography } from '@mui/material';
import UserCard from './UserCard';

const UserList = ({ users = [] }) => {
  if (users.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary">
        No users found
      </Typography>
    );
  }

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {users.map((user, index) => (
        <UserCard key={user.id || index} user={user} />
      ))}
    </Box>
  );
};

export default UserList;

