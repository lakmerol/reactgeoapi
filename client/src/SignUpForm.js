import React, { useState } from 'react';
import './styles.css';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSignUp = async () => {
    try {
      const userData = {
        username,
        email,
        password,
        birthdate,
        phoneNumber,
      };

      const apiUrl = 'http://localhost:5000/User/signup';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {

        setTimeout(() => {
          setShowSuccessPopup(false);

          // Formu sıfırla
          setUsername('');
          setEmail('');
          setPassword('');
          setBirthdate('');
          setPhoneNumber('');
        }, 3000)
        
        setShowSuccessPopup(true);
        ;

        console.log('Successfully submitted');
      } else {
        console.error('Sign Up Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>
          Kullanıcı Adı:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Eposta:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Şifre:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Doğum Tarihi:
          <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
        </label>
        <br />
        <label>
          GSM Numarası:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSignUp}>Kayıt Ol</button>
      </form>

      {showSuccessPopup && (
        <div className="success-popup">
          <p>Kayıt başarıyla tamamlandı!</p>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
