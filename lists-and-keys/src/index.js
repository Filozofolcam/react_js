import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Apps extends React.Component {
    render(){
        return(
            <div className="app">
                <div className="blog">
                    <Blog posts={posts} />
                </div>
            </div>
        );
    }
}

// List Items
// function ListItem(props) {
//   // Doğru! Anahtarı burada belirtmeye gerek yok:
//   return <li>{props.value}</li>;
// }

// render multiple elements
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         // Doğru! Anahtar dizinin içinde belirtilmelidir:
//         <ListItem key={number.toString()} value={number}/>
//     );
//     return (
//         <ul>{listItems}</ul>
//     );
// }
//
// const numbers = [1, 2, 3, 4, 5];


// Blog

function Blog(props){
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
            <li key={post.id}>
                {post.title}
            </li>
            )}
        </ul>
    );

    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}

const posts = [
  {id: 1, title: 'Merhaba Dünya', content: 'React Öğrenmeye Hoşgeldiniz!'},
  {id: 2, title: 'Kurulum', content: 'React\'i npm üzerinden kurabilirsiniz.'}
];

ReactDOM.render(
    <Apps />,
    document.getElementById('root')
);

