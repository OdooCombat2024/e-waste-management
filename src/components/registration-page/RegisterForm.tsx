import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm: React.FC = () => {
    const navigate = useNavigate();

    const handleRegister = (event: React.FormEvent) => {
        event.preventDefault();
        toast.success('Registration successful!', {
            position: 'top-right',
            autoClose: 3000, // Close the toast after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        navigate('/recyclers');
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.header}>Register</h2>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        style={styles.input}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        required
                        style={styles.input}
                    />
                    <input type="submit" value="Register" style={styles.button} />
                </form>
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
};

export default RegisterForm;
