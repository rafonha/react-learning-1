import Header from './components/Header';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import GenericInput from './components/GenericInput';
import { getAgeFrom } from './components/helpers/dateHelpers';
import Timer from './components/Timer';

function App() {
  const pageTitle = 'Olá, eu sou...'
  const [name, setName] = useState('Rafaela');
  const [birthday, setBirthday] = useState('1991-04-25');
  const [showTimer, setShowTimer] = useState(false);

  function handleNameChange(newName) {
    setName(newName)
  }

  function handleBirthDateChange(newBirthday) {
    setBirthday(newBirthday)
  }

  function toggleShowTimer() {
    setShowTimer(showTimer => !showTimer)
  }

  useEffect(() => {
    document.title = name;
  }, [name]);
  

  return (
    <>
      <Header pageTitle={pageTitle}/>
      <Main>
        {showTimer && (
          <div className=' text-right'>
            <Timer />
          </div>
        )}
        <GenericInput 
          inputLabel={'Mostrar timer'}
          name={'checkboxShowTimer'}
          type={'checkbox'}
          id={'checkboxShowTimer'}
          inputClass={'border p-1 mx-1'}
          onInputChange={toggleShowTimer}
          inputValue={''}
          divClass={'flex flex-row items-center space-x my-4'}
        />
        <GenericInput 
          inputLabel={'Digite seu nome: '}
          name={'inputName'}
          type={'text'}
          id={'inputName'}
          inputClass={'border p-1 mx-1'}
          onInputChange={handleNameChange}
          inputValue={name}
          autoFocus
          divClass={'my-4'}
        />
        <GenericInput 
          inputLabel={'Digite sua data de nascimento: '}
          name={'inputBirthDate'}
          type={'date'}
          id={'inputBirthDate'}
          inputClass={'border p-1 mx-1'}
          onInputChange={handleBirthDateChange}
          inputValue={birthday}
          divClass={'my-4'}
        />

        <p>Olá, seu nome é {name}, com {name.length} caracteres, e você tem {getAgeFrom(birthday)} anos. </p>
      </Main>
    </>
  );
}

export default App;
