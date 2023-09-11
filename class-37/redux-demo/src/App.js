import VotesCounter from './Components/VotesCounter';
import Status from './Components/Status';
import { ChakraProvider } from '@chakra-ui/react'

export default (props) => {
    return (
        <>
         <ChakraProvider>
            <VotesCounter />
            <Status />
         </ChakraProvider>
        </>
    )
}