import React from 'react';
import { useParams } from 'react-router-dom';
import ShoesForm from '../../components/Form/index';

const PagesShoesForm = () => {
  const { id } = useParams();

  return (
    
    <ShoesForm id={id ? id : null} />
    
  );
}

export default PagesShoesForm;