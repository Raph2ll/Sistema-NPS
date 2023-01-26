import React, { useState } from 'react';
import axios from 'axios';
import {
  Smiley, SmileySad, SmileyMeh, SmileyBlank, SmileyWink,
} from 'phosphor-react';

function Survey() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [select, setSelect] = useState(0);
  const [response, setResponse] = useState('');

  // const [show, setShow] = useState(false);

  const url = 'http://localhost:3000/survey';

  const postAnswers = async (e) => {
    try {
      e.preventDefault();
      setResponse('Obrigado pelo feedback');
      return axios.post(url, {
        name,
        email,
        value: select,
      });
    } catch (err) {
      return err;
    }
  };

  const isEnabled = name.length > 0 && email.length > 0;

  return (
    <div className="flex flex-col  justify-center content-center flex-wrap min-h-screen ">
      <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8">
        <form className="space-y-6" action="#" onSubmit={() => postAnswers()}>
          <h5 className="text-xl font-medium text-gray-900 ">Nos de um feedback</h5>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
              Seu email
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="JohnDoe@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

          </div>
          <div>
            <label htmlFor="name" className="block  text-sm font-medium text-gray-900 ">
              Seu nome
              <input
                type="name"
                name="name"
                id="name"
                placeholder="John Doe"
                className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="block text-sm  font-medium text-gray-900 ">
            Qual a probabilidade de você nos recomendar para um colega ?
            <div className="inline-flex items-center justify-around -space-x-px mt-6 w-full p-2.5 ">
              <button
                type="button"
                onClick={() => setSelect(0)}
              >
                <SmileySad size={48} color="#F2385A" />
              </button>
              <button
                type="button"
                onClick={() => setSelect(0)}
              >
                <SmileyMeh size={48} color="#FF801E" />
              </button>
              <button
                type="button"
                onClick={() => setSelect(7)}
              >
                <SmileyBlank size={48} color="#F2C12E" />
              </button>
              <button
                type="button"
                onClick={() => setSelect(7)}
              >
                <Smiley size={48} color="#B0D91E" />
              </button>
              <button
                type="button"
                onClick={() => setSelect(10)}
              >
                <SmileyWink size={48} color="#5DD959" />
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="disabled:bg-slate-50 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            value="Submit"
            disabled={!isEnabled}
          >
            Enviar
          </button>
        </form>
      </div>
      <p>{response}</p>
    </div>
  );
}

export default Survey;
