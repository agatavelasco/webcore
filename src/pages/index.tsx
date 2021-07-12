import  { Flex, Button, Stack, Input, FormControl, FormLabel, Link, Text } from '@chakra-ui/react'
export default function SignIn() {
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
            />
          </FormControl>

        </Stack>

        <Button type="submit" colorScheme="yellow" mt="6" size="lg" mb="4">Entrar</Button>
        <Flex>Não tem uma conta? <Link color="blue.400">Registre-se</Link></Flex>
      </Flex>
    </Flex>
  )
}
