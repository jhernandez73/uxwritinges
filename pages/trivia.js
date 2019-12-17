import Airtable from 'airtable';
import Head from 'next/head';
import { Component } from 'react';
import { random } from 'lodash';
import {
  rootStyle,
  titleStyle,
  answerStyle,
  questionStyle,
  answersStyle,
  defaultQuestionStyle,
} from '../components/styles';

const base = new Airtable({
  apiKey: 'key3qcgZDloxOJaCT'
}).base('appLFRxNJdoUU4kxV');

export default class extends Component{
  constructor(){
    super();
    this.randomQuestion = this.randomQuestion.bind(this);
    this.getAnswer = this.getAnswer.bind(this);
    this.resetAnswer = this.resetAnswer.bind(this);
    this.state = {
      preguntas: null,
      preguntaActual: null,
      answer: null,
      defaultQuestion: 'Toca la pantalla si quieres morir',
    };
  }
  componentDidMount(){
    const that = this;
    base('Preguntas').select({
        maxRecords: 100,
        view: "Main"
    }).eachPage(function page(records, fetchNextPage) {
      const preguntas = records.map(r=>{
        r.fields.Respuestas = r.fields.Respuestas.split('\n');
        return r.fields;
      });
      that.setState({ preguntas })
    });
  }
  randomQuestion(){
    const { preguntas } = this.state;
    const choosen = preguntas[random(preguntas.length-1)];
    this.setState({
      preguntaActual:choosen,
    })
  }
  getAnswer(){
    const { preguntaActual } = this.state;
    console.log(preguntaActual['Respuesta Correcta']);
    this.setState({
      answer:preguntaActual['Respuesta Correcta'],
    })
  }
  resetAnswer(){
    this.setState({
      preguntaActual:null,
      answer:null,
    })
  }
  render(){
    const {
      preguntaActual,
      defaultQuestion,
      answer,
      preguntas,
    } = this.state;

    const {
      randomQuestion,
      getAnswer,
      resetAnswer,
    } = this;

    return (
      <div style={rootStyle}>
        <Head>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
          <link rel="stylesheet" href="./static/base.css"/>
        </Head>
          {preguntaActual ?
            <div style={titleStyle} onClick={answer ? resetAnswer : getAnswer}>
              <div style={questionStyle}>
                {preguntaActual.Pregunta}
              </div>
              <div style={answersStyle}>
                {preguntaActual.Respuestas.map(r=>(
                  <div style={Object.assign(
                    {},
                    answerStyle,
                    {
                      'backgroundColor': answer == r ? '#15ff15': 'white'
                    }
                  )}>
                    {r}
                  </div>
                ))}
              </div>
            </div>
            :
            <h2 style={defaultQuestionStyle} onClick={randomQuestion}>
              {preguntas ? defaultQuestion : 'llenandose ...'}
            </h2>
          }
      </div>
    )
  }
}
