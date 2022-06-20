import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CategoryCard = ({ category }: { category: String }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/${category}`}>
        <CardHeader title={category} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default React.memo(CategoryCard);
