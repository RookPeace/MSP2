import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Stack,
    HStack,
    VStack,
    Input,
    InputGroup,
    InputRightElement,
    Button
} from '@chakra-ui/react';

const Login = () => {
    const handleClick = () => setShow(!show);
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();
    const postDetails = (pics) => { };
    const submitHandler = () => { }
    return (
        <VStack spacing='5px' color="black">
            

            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='Enter your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                    type={show ? "text" : "password"}
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "SHow"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            
            <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}
            >
                Log in
        </Button>
        <Button
          variant="solid"
          colorScheme="green"
          width="100%"
          onClick={() => {
            setEmail("guest@example.com");
            setPassword("123456");
          }}
        >
Get Guest User Credentials
        </Button>

        </VStack>
    );
};

export default Login
