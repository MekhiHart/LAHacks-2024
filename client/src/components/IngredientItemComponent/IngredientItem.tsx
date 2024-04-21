// src/components/IngredientItem.tsx

import React from 'react';
import styles from "./IngredientItem.module.css";

interface IngredientItemProps {
  name: string;
  quantity: string;
  daysRemaining: number;
}

const IngredientItem: React.FC<IngredientItemProps> = ({ name, quantity, daysRemaining }) => {
  
  // This function determines which class to use based on the days remaining
  const daysRemainingClass = () => {
    if (daysRemaining <= 1) {
      return `${styles.daysRemaining} ${styles.urgent}`;
    } else if (daysRemaining <= 3) {
      return `${styles.daysRemaining} ${styles.warning}`;
    } else {
      return `${styles.daysRemaining} ${styles.safe}`;
    }
  };

  return (
    <div className={styles.ingredientItem} style={{scale:"90%"}}>
      <p className={styles.ingredientName}>{quantity} {name}</p>
      {/* Call the daysRemainingClass() function here to set the class dynamically */}
      <p className={daysRemainingClass()}>{daysRemaining} days remaining</p>
    </div>
  );
};

export default IngredientItem ;
