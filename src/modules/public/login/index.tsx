import { useFirebase } from "@context/firebase";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Input } from "@form/Input";
import { AuthCredential } from "@context/firebase/types";

export const LoginPage: NextPage = () => {

  const { user, login, logout, createUser } = useFirebase()

  const { handleSubmit, control } = useForm<AuthCredential>();

  const submit = async (authCredential: AuthCredential) => {
    await login(authCredential);
  }

  const handleCreateUser = async (authCredential: AuthCredential) => {
    await createUser(authCredential);
  }

  return (
    <>
      <h1>Firebase App</h1>
      <br />
      <ul>
        <li>STATUS: {user ? "Online" : "Desconectado"}</li>
        <li>USUÁRIO: {user ? JSON.stringify(user) : "Vazio"}</li>
      </ul>
      <br />

      <h2>Faça seu Login/Cadastre-se</h2>
      <form>
        <label>Email</label>
        <Input name="email" control={control} />
        <label>Senha</label>
        <Input name="password" control={control} />
        <br />
        <button onClick={handleSubmit(submit)}>Conectar</button>
        <br />
        <button onClick={handleSubmit(handleCreateUser)}>Cadastrar</button>
      </form>

      <br />

      <button onClick={() => logout()}>Desconectar</button>
    </>
  );
}
