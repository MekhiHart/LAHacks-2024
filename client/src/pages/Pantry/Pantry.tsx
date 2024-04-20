import styles from './Pantry.module.css'

const Pantry = () =>{
    return(
        <div className={styles.container}>
        <h2 className={styles.header}>Pantry is empty</h2>
        <button className={styles.addButton}>Add ingredients</button>
        </div>
    )
}

export default Pantry