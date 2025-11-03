import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const UserCard = ({ user }) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar>{user?.name?.charAt(0) || 'U'}</Avatar>
          <Box>
            <Typography variant="h6">{user?.name || 'User Name'}</Typography>
            <Typography variant="body2" color="text.secondary">
              {user?.email || 'user@example.com'}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;

