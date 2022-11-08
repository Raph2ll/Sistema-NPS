import React, { useState } from 'react';
import axios from 'axios';

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
          <label htmlFor="select" className="block text-sm font-medium text-gray-900 ">
            Qual a probabilidade de você nos recomendar a um amigo ou colega ?
            <select
              id="select"
              type="select"
              name="select"
              onChange={(e) => setSelect(e.target.value)}
              className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="John Doe"
              required
            >
              <option defaultValue>Escolha um número</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>
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
