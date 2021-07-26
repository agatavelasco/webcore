import { Button, Flex, FormControl, FormLabel, Input, Link, Stack, Text } from "@chakra-ui/react";

export  default function Register() {
  return(
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

      <Text fontSize="xl" fontWeight="bold" mb="4">Criar sua conta</Text>
        
        <Stack spacing="4">

        <FormControl>
            <FormLabel htmlFor="name">Nome Completo</FormLabel>
            <Input 
              id="name"
              name="name"
              type="name"
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
        <Flex>Já tem uma conta? <Link href="/" color="blue.400"> Acesse </Link></Flex>
    
    </Flex>
  </Flex>
  );
}