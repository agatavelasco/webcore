import  { Flex, Button, Stack, Input, FormControl, FormLabel, Text } from '@chakra-ui/react'
import Link from 'next/link'

import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const errors = formState.errors;

  console.log(errors);

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values);
  }

  return (
    <Flex
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
      bgGradient="linear(to-r,blue.300,yellow.400,pink.200)"
    >
      <Flex 
        as='form'
        width="100%"
        maxWidth={360}
        bg="gray.50"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Text fontSize="xl" fontWeight="bold" mb="4">Acesse sua conta</Text>
        
        <Stack spacing="4">

          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input 
              id="email"
              name="email"
              type="email"
              focusBorderColor="blue.300"
              borderColor="gray.200"
              bg="white"
              variant="filled"
              _hover={{
                bgColor: "white"
              }}
              size="lg"
              error={errors.email} 
              {...register('email')}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input 
              id="password"
              name="password"
              type="password"
              focusBorderColor="blue.300"
              borderColor="gray.200"
              bg="white"
              variant="filled"
              _hover={{
                bgColor: "white"
              }}
              size="lg"
              error={errors.password} 
              {...register('password')}
            />
          </FormControl>

        </Stack>

        <Button type="submit" colorScheme="yellow" mt="6" size="lg" mb="4">Entrar</Button>
        <Flex>Não tem uma conta? 
          <Flex color="blue.400">
            <Link href="/register">Registre-se</Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
