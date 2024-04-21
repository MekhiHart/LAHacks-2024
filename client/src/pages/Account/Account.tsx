//Type Script doesn't understand CSS properties invoked 

interface Styles {
    container: React.CSSProperties;
    header: React.CSSProperties;
    formContainer: React.CSSProperties;
    formGroup: React.CSSProperties;
    label: React.CSSProperties;
    input: React.CSSProperties;
    button: React.CSSProperties;
  }
  
function AccountPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Create Account</h1>
      <div style={styles.formContainer}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input style={styles.input} type= "text" placeholder = "" />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input style={styles.input} type= "email" placeholder= "" />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input style={styles.input} type="password" placeholder= "" />
        </div>
        <button style={styles.button}>Create Account</button>
      </div>
    </div>
  );
}

// Styles for the component
const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#fefaed',
    padding: '0px 20px 0 20px',
  },
  header: {
    fontSize: '28px',
    fontWeight: 'normal', 
    color: "#008000", 
    marginBottom: '20px',
    marginTop: '0px', 
  },
  formContainer: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#fefaed',
    padding: '20px',
    borderRadius: '8px',
  },
  formGroup: {
    marginBottom: '20px',

  },
  label: {
    marginBottom: '8px',
    fontSize: '16px',
    fontWeight: 'normal',
    color: "ff9a3c", 
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '18px',
    fontWeight: 'normal',
    backgroundColor: '#ffffff',
    color: '#008000',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default AccountPage;
