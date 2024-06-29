import React, { useState, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            navigate('/recyclers');
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = () => {
        const validationErrors: { username?: string; password?: string } = {};
        if (!username) {
            validationErrors.username = 'Username is required';
        }
        if (!password) {
            validationErrors.password = 'Password is required';
        } else if (password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters';
        }
        return validationErrors;
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={styles.input}
                    />
                    {errors.username && <p style={styles.error}>{errors.username}</p>}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                    {errors.password && <p style={styles.error}>{errors.password}</p>}
                    <input type="submit" value="Login" style={styles.button} />
                </form>
                <div style={styles.registerLink}>
                    <span>
                        Don't have an account?{' '}
                        <a href="" onClick={handleRegisterRedirect} style={styles.link}>
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
        width: '90%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
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
    error: {
        color: 'red',
        fontSize: '12px',
    },
};

export default LoginForm;