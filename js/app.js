import React from 'react';
localStorage.session = Math.random() * 100000000000000000;
function createMarkup(messages) {
  return {__html:"<div><form action='' method='GET'><input id='query' name='query' value='Enter query here...' onfocus='this.value="+ '""' + "'></input><input id='button' type='submit' value='Search'></input></form></div>"  +messages.map(message => "<div>"+message+"</div>")};
}
let App = React.createClass({
    getInitialState() {
        return {
            messages: [],
            newMessage: ''
        }
    },
    componentDidMount() {
        fetch('/api/get/mess')
            .then((res) => res.json())
            .then(messages => this.setState({messages}));
    },
    upMessage() {
        const {messages, newMessage} = this.state;
        this.setState({messages: [newMessage, ...messages], newMessage: ''});

        if (newMessage) 
            fetch('/api/post/mess', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({message: newMessage}),
        });
    },

    render() {
        const {messages, newMessage} = this.state;
        return (
            <div>         
                <h2>React Message Board</h2>
                <div>
                    <textarea value={newMessage}
                              onChange={(e) => this.setState({newMessage: e.target.value})}
                              rows="3"/>
                </div>
                <div>
                    <button onClick={() => this.upMessage()}>Đăng bài</button>
                </div>

                <div dangerouslySetInnerHTML={createMarkup(messages)} />
            </div>
        );
    }
});
React.render(<App/>, document.body);