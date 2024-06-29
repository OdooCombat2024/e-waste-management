import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
 
const LoginForm: React.FC = () => {
    const navigate = useNavigate();
 
    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle login logic here
    };
 
    const handleRegisterRedirect = () => {
        navigate('/register');
    };
 
    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.header}>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        style={styles.input}
                    />
                    <input type="submit" value="Login" style={styles.button} />
                </form>
                <div style={styles.registerLink}>
                    <span>
                        Don't have an account?{' '}
                        <a href="#" onClick={handleRegisterRedirect} style={styles.link}>
                            Register
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};
 
const styles: { [key: string]: CSSProperties } = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f2f2f2',
    },
    formContainer: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
    },
    header: {
        marginBottom: '20px',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid',
        borderRadius: '4px',
    },
    button: {
        width: '100%',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#4CAF50',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
    },
    registerLink: {
        marginTop: '20px',
        textAlign: 'center' as 'center',
        color: '#333',
    },
    link: {
        color: '#4CAF50',
        textDecoration: 'none',
    },
};
 
export default LoginForm;