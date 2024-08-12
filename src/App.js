import { Button } from '@chakra-ui/react';
import {Layout} from "./components/layout"

function App() {
  return (
    <Layout>
    <div className="App">
      <div>New App</div>
      <Button colorScheme='blue'>Button</Button>
    </div>
    </Layout>
  );
}

export default App;
