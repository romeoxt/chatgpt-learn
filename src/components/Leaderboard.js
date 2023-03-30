import React from 'react';
import styled from '@emotion/styled';

const LeaderboardContainer = styled.div`
  background-color: #222;
  border-radius: 5px;
  padding: 2rem;
  max-width: 800px;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  color: #fff;
  font-size: 1.2rem;
  text-align: left;
  padding: 0.5rem;
  border-bottom: 2px solid #333;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #333;
  }
`;

const TableCell = styled.td`
  color: #ccc;
  font-size: 1rem;
  padding: 0.5rem;
`;

const Leaderboard = () => {
  const sampleData = [
    { name: 'User1', score: 100 },
    { name: 'User2', score: 90 },
    { name: 'User3', score: 85 },
    { name: 'User4', score: 80 },
    { name: 'User5', score: 75 },
  ];

  return (
    <LeaderboardContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Score</TableHeader>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.score}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </LeaderboardContainer>
  );
};

export default Leaderboard;