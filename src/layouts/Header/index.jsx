import './style.scss'
import {Container, Stack} from '@mui/material'
import HeaderTopBar from "../../components/HeaderTopBar";
import HeaderMiddleBar from "../../components/HeaderMiddleBar";
import NavigationBar from "../../components/NavigationBar";

const Header = () => {
   return (
      <header className={'header'}>
         <Container>
            <HeaderTopBar/>
            <HeaderMiddleBar/>
            <NavigationBar/>
         </Container>
      </header>
   );
};

export default Header;