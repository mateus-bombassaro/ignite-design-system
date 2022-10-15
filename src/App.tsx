import './styles/global.css';
import { Logo } from './Logo';
import { Heading } from './components/Heading'
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">Ignite Lab</Heading>
        <Text size="lg" className="text-gray-400 mt-1">Faça login e comece a usar!</Text>
      </header>

      <form className='flex flex-col items-strech w-full max-w-sm mt-10 gap-4'>
        <label htmlFor="email" className="font-semibold flex-flex-col gap-3">
          <Text>E-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="font-semibold flex-flex-col gap-3">
          <Text>Senha:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder="Digite sua senha" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4">Entrar na plataforma</Button>

        <footer className="flex flex-col items-center gap-4 mt-4">
          <Text asChild size="sm">
            <a h-ref="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
          </Text>
          <Text asChild size="sm">
          <a h-ref="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
          </Text>
        </footer>

      </form>
    </div>
  )
}
