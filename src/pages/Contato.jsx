import {useState} from 'react'

const Contato = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Obrigado, ${nome}! Mensagem enviada.`)
        setNome('');
        setEmail('');
        setMsg('');
    }

  return (
    <div className='p-8 max-w-md mx-auto'>

        <h1 className='text-4xl font-bold text-purple-600 mb-6'>Contato</h1>

        <form onSubmit={handleSubmit}
        className='space-y-4'>

            <div>
                <label className='block text-gray-700 font-semibold mb-2'>
                    Nome:
                </label>
                <input type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder='Seu nome'
                required
                className='w-full p-3 border border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                />
            </div>
            <div>
                <label className='block text-gray-700 font-semibold mb-2'>
                    Email:
                </label>
                <input type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='seu@email.com'
                required
                className='w-full p-3 border border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                />
            </div>
            <div>
                <label className='block text-gray-700 font-semibold mb-2'>
                    Mensagem:
                </label>
                <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder='Digite sua mensagem...'
                required
                className='w-full p-3 border border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                />
            </div>

            <button
            type='submit'
            className='w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition font-semibold cursor-pointer'
            >
                Enviar Mensagem
            </button>
        </form>
    </div>
  )
}

export default Contato
