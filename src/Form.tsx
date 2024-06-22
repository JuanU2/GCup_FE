import { useForm } from 'react-hook-form';
import './Form.css';

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const jsonData = {
      meno: data.name,
      priezvisko: data.surname,
      vek: data.age,
      cislo: data.startingNumber,
    };

    fetch('http://95.102.110.92:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Meno</label>
        <input {...register('name')} />
      </div>
      <div className="form-group">
        <label>Priezvisko</label>
        <input {...register('surname')} />
      </div>
      <div className="form-group">
        <label>Vek</label>
        <input type="number" {...register('age')} />
      </div>
      <div className="form-group">
        <label>Štartovacie číslo</label>
        <input {...register('startingNumber')} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
