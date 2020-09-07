import React, { Component } from 'react';

import {
    Container,
    Wrapper,
    Input,
    Button,
    FormWrapper,
    TimerCounter
} from './styles';

import Preview from '../Preview';
import Speed from '../Speed';
import Header from '../Header';

import { loadTexts } from '../../services/texts';
const data = loadTexts();
const minTexts = 0;
const maxTexts = 2;
const randomText = (minTexts + Math.random() * (maxTexts - minTexts)).toFixed();

const initialState = {
    text: data[randomText].text,
    userInput: '',
    symbols: 0,
    sec: 0,
    started: false,
    finished: false
}

class Layout extends Component {

    componentDidMount(){
        document.addEventListener("keydown", this.onUserInputChange, false);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.onUserInputChange, false);
    }

    state = initialState;

    onRestart = () => {
        this.setState(initialState)
    }

    onUserInputChange = (e) => {
        const v = e.key;

        const invalid = ['Backspace', 'Control', 'Shift', 'Alt', 'Enter', 'Escape', 'Delete', 'Dead']

        console.log(this.state.sec);

        if(!this.state.started) {
            this.setTimer();
        }

        if( this.state.sec < 60 ) {
            if(invalid.indexOf(v) == -1) {    
                this.setState(prevProps => {
                    return { userInput: prevProps.userInput + v }
                })
    
                this.setState({
                    symbols: this.countCorrectSymbols(v),
                });
            } else if(invalid.indexOf(v) == 0) { // Digitou backspace
                let temp = this.state.userInput;
                temp = temp.substring(0, temp.length - 1);                
                this.setState({ userInput: temp });
            }
        } else {
            this.onFinish();
        }
    }

    onFinish() {
        if(this.state.sec >= 60) {
            clearInterval(this.interval);
            this.setState({
                finished: true
            })
        }
    }

    countCorrectSymbols = (userInput) => {
        const text = this.state.text.replace(' ', '');
        return userInput.replace(' ', '').split('').filter((s, i) => s === text[i]).length;
    }

    setTimer() {
        if(!this.state.started) {
            this.setState({ started: true });
            this.interval = setInterval(() => {
                this.setState(prevProps => {
                    return { sec: prevProps.sec + 1 }
                })
            }, 1000)
        }
    }

    render() {
        return (
            <>
                <Header timeSpent={this.state.sec} />
                <p>Finished: {this.state.finished ? "True" : "False"}</p>
                <Container>
                    <Wrapper>
                        <Preview text={this.state.text} userInput={this.state.userInput} />
                    </Wrapper>
                    <FormWrapper>
                        <Input
                            ref={(input) => { this.testInput = input; }}
                            style={{display: 'none'}}
                            // autofocus={true}
                            value={this.state.userInput}
                            onChange={this.onUserInputChange}
                            readOnly={this.state.finished}
                            placeholder="Digite aqui..."
                        />
                        <Button onClick={this.onRestart}>
                            Recarregar
                        </Button>
                        <TimerCounter>
                            {
                                this.state.finished ? 0 : 60 - this.state.sec
                            }
                            s
                        </TimerCounter>
                    </FormWrapper>
                    <Speed sec={this.state.sec} symbols={this.state.symbols} />
                </ Container>
            </>
        );
    }
}

export default Layout;