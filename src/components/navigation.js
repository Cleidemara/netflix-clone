import React from 'react';
import styled from 'styled-Components';

const Container = styled.nav`
width: 20vw;
padding-left: 3%;
border-radius: 6px;
height:10vh;
`;



const Navigation = () => {
    return (
        <container>
            <list>
                <item>
                    Discover
                </item>
                <item>
                    Movies
                </item>
                <item>
                    Shows
                </item>
            </list>
        </container>
    )
}
export default Navigation;