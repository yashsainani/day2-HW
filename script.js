const rootDiv = document.getElementById('root');
const root = ReactDOM.createRoot(rootDiv);

const headDiv = React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Topics Covered'),
    React.createElement('p', {}, 'The following is a list of all the topics we cover in the MDN learning area.')
);

const linkDiv = React.createElement(
    'div',
    {},
    React.createElement(
        'div',
        {},
        React.createElement('a', {href : 'https://developer.mozilla.org/en-US/docs/Learn'}, 'Getting start with the web'),
        React.createElement('p', {}, 'Provides a practical introduction to web development for complete beginners')
    ),
    React.createElement(
        'div',
        {},
        React.createElement('a', {href : 'https://developer.mozilla.org/en-US/docs/Learn/HTML'}, 'HTML — Structuring the web'),
        React.createElement('p', {}, 'HTML is the language that we use to structure the different parts of our  content and define what their meaning or purpos is.')
    ),
    React.createElement(
        'div',
        {},
        React.createElement('a', {href : 'https://developer.mozilla.org/en-US/docs/Learn/CSS'}, 'CSS — Styling the web'),
        React.createElement('p', {}, `CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation.`)
    )
);

const main = React.createElement('div', {}, headDiv, linkDiv);

root.render(main);