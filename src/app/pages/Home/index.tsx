import React from 'react';
import ToggleMenu from 'src/app/components/ToggleMenu';
import { ILabelIcons } from './../../../shared/interfaces/LabelIconsProps';
import LabelIcons from 'src/app/components/labelIcons';
import { ReactComponent as Logo } from '../../../shared/assets/icons/logo.svg'


import './home.scss'
import CardContainer from 'src/app/components/card-container';
import Login from './login';
import Nav from 'src/app/components/ToggleMenu/nav';
import ButtonLogin from 'src/app/components/buttonsLogin';






const Home: React.FC<any> = () => {
    const sectionIcons: Array<ILabelIcons> = [
        {
            id: 1,
            icon: "watch",
            label: "Spend time smart",
            description: "Lorem ipsum dolor sit amet,"
        },
        {
            id: 2,
            icon: "microphone",
            label: "Audio Podcast",
            description: "Lorem ipsum dolor sit amet,"
        },
        {
            id: 3,
            icon: "linesDiagram",
            label: "Line-chart",
            description: "Lorem ipsum dolor sit amet,"
        },
        {
            id: 4,
            icon: "diamond",
            label: "Quality",
            description: "Lorem ipsum dolor sit amet,"
        },
    ];
    return (
        <div className="home">
            <nav>
                <div>
                <ToggleMenu />
                </div>           
                <div>
                <Logo />                
                <label> <span>LOGO</span> <span>HERE</span> </label>
                </div>
               
                    <Nav openMenu={false}/>
                
                
            </nav>
            <main>
                <article>
                    <div>
                        <div id="information">
                            <h1 className="joinUs"> Join us today</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua.
                        </p>
                        </div>
                        <div id="largeIcons">
                            {sectionIcons.map(props =>
                                <LabelIcons key={props.id} props={props} />
                            )}
                        </div>
                        <section id="form">
                            <CardContainer >
                                <Login />
                            </CardContainer>
                        </section>
                        <ButtonLogin />
                    </div>

                </article>

            </main>


        </div>

    )
}

export default Home;