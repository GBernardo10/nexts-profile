import {
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  InputGroup,
  Link,
  Text,
} from "@chakra-ui/core";
import InputElement, {
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/core/dist/InputElement";

import { Divider } from "../components/divider";
import { Input } from "../components/input";

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
      '. . . .'
      '. logo form .'
      '. . . .'"
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <img src="/vercel.svg" alt="logo" />
        <Heading size="2xl" lineHeight="shorter" marginTop={16}>
          Faça seu login
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <InputGroup>
          <InputRightElement
            children={<Icon marginTop={2} name="user" color="gray.700" />}
          />
          <Input type="phone" placeholder="Email" />
        </InputGroup>

        <InputGroup>
          <InputRightElement
            children={<Icon marginTop={23} name="phone" color="gray.700" />}
          />
          <Input marginTop={2} placeholder="Senha" />
        </InputGroup>

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="purple.600"
          fontWeight="bold"
          _hover={{
            color: "purple.500",
          }}
        >
          Esqueci minha senha
        </Link>

        <Button
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{
            backgroundColor: "purple.600",
          }}
        >
          Entrar
        </Button>

        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
          Não tem conta?{" "}
          <Link
            color="purple.600"
            fontWeight="bold"
            _hover={{
              color: "purple.500",
            }}
          >
            Registre-se
          </Link>
        </Text>
        <Divider />

        <Flex alignItems="center">
          <Text>Ou entre com</Text>
          <Button
            height="50px"
            flex="1"
            backgroundColor="gray.600"
            marginLeft={6}
            _hover={{
              backgroundColor: "purple.500",
            }}
          >
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
